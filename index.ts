import { DataObjectRegistry } from "./lib/registry";
import { DataObjectSchema } from "./lib/schema";
import { RequestDataObjects, DataObjectType, RegistryItem, DataObjects, IntentType } from "./lib/types";
import { StringReader, getChecksum, len } from "./lib/utils";

export class QrPaymentIntent {
  constructor() {}

  private encodeTemplate(item: RegistryItem, dataObject: Record<string, any>) {
    let templateValue = '';
    for (let k in dataObject) {
      const template = item.template![k]
      if (template.type === DataObjectType.TemplatePrimitive) {
        templateValue += template.id.concat(len(dataObject[k])).concat(dataObject[k])
      } else if (template.type === DataObjectType.TemplateTemplate) {
        templateValue += this.encodeTemplate(template[k].template, dataObject[k])
      }
    }
    return templateValue;
  }

  encode(requestData: RequestDataObjects) {
    DataObjectSchema.parse(requestData);
    const { version, ...objects } = requestData;
    objects.payeeAccount.schemeIdentifier = 'com.paycashless';
    objects.paymentIntentDataObjects.schemeIdentifier = 'com.paycashless';

    let payload = DataObjectRegistry.version.id.concat(len(version)).concat(version);
    for (const key in objects) {
      let value = '';
      const item = DataObjectRegistry[key];
      if (item.type === DataObjectType.RootPrimitive) {
        value = item.id.concat(len(objects[key])).concat(objects[key])
      } else if (item.type === DataObjectType.RootTemplate) {
        let templateValue = this.encodeTemplate(item, objects[key]);
        value = item.id.concat(len(templateValue)).concat(templateValue);
      }
      payload = payload.concat(value)
    }
    // append crc at the end of the payload
    const checksumObject = DataObjectRegistry.checksum.id.concat('04');
    payload = payload.concat(checksumObject);
    payload = payload.concat(getChecksum(payload));

    return payload;
  }

  private validatePayload(payload: string) {
    const startsWithVersion = payload.startsWith('00', 0);
    const endsWithChecksum = payload.endsWith('63', payload.length-6);
    if (!startsWithVersion || !endsWithChecksum) {
      throw new Error(
        'Invalid payload: must start with version id and end with crc id'
      );
    }

    const checksum = payload.substring(payload.length-4, payload.length);
    payload = payload.substring(0, payload.length-4);
    if (getChecksum(payload) !== checksum) {
      throw new Error('unsafe: failed cyclic redundancy check')
    }
  }

  private findTemplateObject(id: string, template: RegistryItem) {
    const keys = Object.keys(template.template!);
    for (const key of keys) {
      if (template.template![key].id === id) {
        return { key, item: template.template![key] };
      }
    }
    return { key: '', item: undefined };
  }

  private findRootObject(id: string) {
    const keys = Object.keys(DataObjectRegistry);
    for (const key of keys) {
      if (DataObjectRegistry[key].id === id) {
        return { key, item: DataObjectRegistry[key] };
      }
    }
    return { key: '', item: undefined };
  }

  private decodeTemplate(payload: string, template: RegistryItem) {
    const result: any = {};
    const reader = new StringReader(payload);

    do {
      const id = reader.read(2);
      const lengthIndicator = reader.read(2);
      const length = parseInt(lengthIndicator, 10);
      const value = reader.read(length);

      const { key, item } = this.findTemplateObject(id, template)
      if (!item) {
        throw new Error(`unknown template identifier used ${id}`);
      }

      if (item.type === DataObjectType.TemplatePrimitive) {
        result[key] = value; 
      } else if (item.type === DataObjectType.TemplateTemplate) {
        result[key] = this.decodeTemplate(value, item)
      }
    } while(reader.cursor < payload.length)

    return result;
  }

  decode(payload: string): DataObjects {
    let result: any = {};
    const reader = new StringReader(payload);
    this.validatePayload(payload);

    do {
      // Read the next set
      const id = reader.read(2);
      const lengthIndicator = reader.read(2);
      const length = parseInt(lengthIndicator, 10);
      const value = reader.read(length);

      const { key, item } = this.findRootObject(id)
      if (!item) {
        throw new Error(`unknown identifier used ${id}`);
      }
      
      if (item.type === DataObjectType.RootPrimitive) {
        result[key] = value; 
      } else if (item.type === DataObjectType.RootTemplate) {
        result[key] = this.decodeTemplate(value, item)
      }
    } while (reader.cursor < payload.length);
  
    return result as DataObjects;
  }
}

export {
  IntentType
}
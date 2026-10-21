import { ZodError } from 'zod';
import { QrPaymentIntent } from '../index';
import { INVALID_DATA_OBJECTS, VALID_DATA_OBJECTS } from './payloads';

describe('QrPaymentIntent', () => {
  let qpi: QrPaymentIntent;

  beforeEach(() => {
    qpi = new QrPaymentIntent();
  });

  describe('encode', () => {
    it('should encode the payload correctly', async () => {
      const result = qpi.encode(VALID_DATA_OBJECTS.requestObject);
      expect(result).toBe(VALID_DATA_OBJECTS.payload.with_crc);
    });

    it('should throw an error for invalid data', async () => {
      expect(() => qpi.encode(INVALID_DATA_OBJECTS.decodedResult))
        .toThrow(ZodError)
    });

    it('should reject a channel that is not exactly 3 characters', () => {
      const request = structuredClone(VALID_DATA_OBJECTS.requestObject);
      request.additionalDataObjects.channel = 'ONLINE';
      expect(() => qpi.encode(request)).toThrow(ZodError);
    });

    it('should refuse a template longer than 99 characters instead of writing a 3-digit length', () => {
      // Every field is within its own limit, but the additional data template
      // adds up to 101 characters.
      const request = structuredClone(VALID_DATA_OBJECTS.requestObject);
      request.additionalDataObjects = {
        storeLabel: '055',
        reference: 'R'.repeat(25),
        narration: 'N'.repeat(25),
        customerLabel: 'C'.repeat(25),
        channel: '521',
      };
      expect(() => qpi.encode(request)).toThrow(RangeError);
    });

    it('should round-trip a template of exactly 99 characters', () => {
      const request = structuredClone(VALID_DATA_OBJECTS.requestObject);
      request.additionalDataObjects = {
        storeLabel: '0',
        reference: 'R'.repeat(25),
        narration: 'N'.repeat(25),
        customerLabel: 'C'.repeat(25),
        channel: '521',
      };
      const decoded = qpi.decode(qpi.encode(request));
      expect(decoded.additionalDataObjects).toStrictEqual(request.additionalDataObjects);
    });

    it('should not modify the request object', () => {
      const request: any = structuredClone(VALID_DATA_OBJECTS.requestObject);
      delete request.payeeAccount.schemeIdentifier;
      delete request.paymentIntentDataObjects.schemeIdentifier;
      const before = structuredClone(request);
      qpi.encode(request);
      expect(request).toStrictEqual(before);
    });
  });

  describe('decode', () => {
    it('should decode the payload correctly', () => {
      const result = qpi.decode(VALID_DATA_OBJECTS.payload.with_crc);
      expect(result).toStrictEqual(VALID_DATA_OBJECTS.decodedResult);
    });

    it('should throw an error for wrong prefix', () => {
      expect(
        () => qpi.decode(INVALID_DATA_OBJECTS.payload.wrong_prefix)
      ).toThrow('Invalid payload: must start with version id and end with crc id');
    });

    it('should throw an error for invalid checksum', () => {
      expect(
        () => qpi.decode(INVALID_DATA_OBJECTS.payload.invalid_checksum)
      ).toThrow('unsafe: failed cyclic redundancy check');
    });

    it('should throw an error for an unknown identifier', () => {
      expect(
        () => qpi.decode(INVALID_DATA_OBJECTS.payload.wrong_id)
      ).toThrow('unknown identifier used 99');
    });
  });
});

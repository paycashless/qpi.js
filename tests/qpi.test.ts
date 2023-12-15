import { QrPaymentIntent } from '../index';
import { INVALID_DATA_OBJECTS, VALID_DATA_OBJECTS } from './payloads';

describe('QrPaymentIntent', () => {
  let qpi: QrPaymentIntent;

  beforeEach(() => {
    qpi = new QrPaymentIntent();
  });

  describe('encode', () => {
    it('should encode the payload correctly', async () => {
      const result = await qpi.encode(VALID_DATA_OBJECTS.requestObject);
      expect(result).toBe(VALID_DATA_OBJECTS.payload.with_crc);
    });

    it('should throw an error for invalid data', async () => {
      
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

function len(s: string) {
  return s.length.toString().padStart(2, '0');
}

function computeCheckSum(input: Uint8Array, seed: number) {
  let result = seed;
  let temp;
  let crc_table = generateCRC16Table();
  for (var i = 0, len = input.length; i < len; ++i) {
    temp = (input[i] ^ (result >> 8)) & 0xff;
    result = crc_table[temp] ^ (result << 8);
  }
  return result;
}

function generateCRC16Table() {
  let table: any = [];
  const poly = 0x1021;
  let temp;
  for (var i = 0; i < 256; ++i) {
    temp = (i << 8) & 0xFFFF;
    for (var j = 0; j < 8; ++j) {
      var bit = (temp & 0x8000)
      temp <<= 1;
      if (bit) {
          temp ^= poly;
      }
    }
    table[i] = temp & 0xFFFF;
  }
  return table;
}

function getChecksum(string: string) {
  // Encode the input string to UTF-8
  const encoder = new TextEncoder();
  const input = encoder.encode(string);
  const output = computeCheckSum(input, 0xffff);

  // Create a Uint8Array with the two bytes of the output
  const o = new Uint8Array([output >> 8, output & 0xff]);
  // Convert Uint8Array to hexadecimal string
  const hexString = Array.from(o, byte => byte.toString(16).padStart(2, '0')).join('').toUpperCase();

  return hexString;
}

interface IStringReader {
  read: (len: number) => string;
  cursor: number;
}

interface Reader {
  new(p: string): IStringReader;
  (p: string): IStringReader;
}

const StringReader = function (this: any, payload: string) {
  this.cursor = 0;
  this.payload = payload;
} as Reader;

StringReader.prototype.read = function(length: number) {
  const str = this.payload.substring(this.cursor, this.cursor + length);
  this.cursor += length;
  return str;
}

export {
  len,
  getChecksum,
  StringReader
}
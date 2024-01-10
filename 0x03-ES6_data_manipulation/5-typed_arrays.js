#!/usr/bin/node
export default function createInt8TypedArray(len, pos, value) {
  if (pos >= len) {
    throw new Error('Position outside range');
  }

  const nArray = new Int8Array(len).fill(0);
  nArray[pos] = value;
  return new DataView(nArray.buffer);
}

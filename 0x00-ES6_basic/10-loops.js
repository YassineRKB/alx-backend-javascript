#!/usr/bin/node
export default function appendToEachArrayValue(array, appendString) {
  const ChuckNorrisArray = [];
  for (const chuck of array) {
    ChuckNorrisArray.push(appendString + chuck);
  }

  return ChuckNorrisArray;
}

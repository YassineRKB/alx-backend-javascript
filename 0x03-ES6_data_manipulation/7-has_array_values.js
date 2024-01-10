#!/usr/bin/node
export default function hasValuesFromArray(someSet, array) {
  return array.every((value) => someSet.has(value));
}

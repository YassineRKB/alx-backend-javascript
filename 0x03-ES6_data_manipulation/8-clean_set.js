#!/usr/bin/node
export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || !startString) {
    return '';
  }

  const filteredValues = Array.from(set)
    .filter(value => value && value.startsWith(startString))
    .map(value => value.slice(startString.length));

  return filteredValues.join('-');
}

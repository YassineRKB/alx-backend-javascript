#!/usr/bin/node
export default function cleanSet(duSet, xString) {
  if (!duSet || typeof xString !== 'string' || !(duSet instanceof Set) || !xString) {
    return '';
  }
  return Array.from(duSet)
    .filter((y) => y && y.startsWith(xString))
    .map((y) => y.replace(xString, ''))
    .join('-');
}

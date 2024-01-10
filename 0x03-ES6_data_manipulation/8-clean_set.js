#!/usr/bin/node
export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') 
  {
    return '';
  }

  const newString = [];
  set.forEach((value) => {
    if (value && value.startsWith(startString)) {
      newString.push(value.slice(startString.length));
    }
  });
  return newString.join('-');
}

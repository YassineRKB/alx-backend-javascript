#!/usr/bin/node
export default function createIteratorObject(report) {
  return Object.values(report.allEmployees).flat();
}

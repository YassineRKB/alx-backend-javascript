#!/usr/bin/node
export default function getStudentsByLocation(students, someLocation) {
  return students.filter((student) => student.location === someLocation);
}

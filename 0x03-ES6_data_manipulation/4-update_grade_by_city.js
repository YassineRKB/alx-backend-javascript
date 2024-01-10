#!/usr/bin/node
export default function updateStudentGradeByCity(studentsList, targetLocation, updatedGrades) {
  return studentsList
    .filter(({ location }) => location === targetLocation)
    .map((student) => {
      const matchingGrades = updatedGrades.find(({ studentId }) => studentId === student.id);
      const { grade = 'N/A' } = matchingGrades || {};
      return { ...student, grade };
    });
}

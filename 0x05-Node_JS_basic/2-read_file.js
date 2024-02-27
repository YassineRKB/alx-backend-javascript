const fs = require('fs');

function countStudents(path) {
  try {
    const fields = {};
    const database = fs.readFileSync(path, 'utf8').split('\n').filter((line) => line.trim() !== '');
    console.log(`Number of students: ${database.length - 1}`);
    database.slice(1).forEach((student) => {
      const field = student.split(',')[3];
      const name = student.split(',')[0];
      if (fields[field]) {
        fields[field].push(name);
      } else {
        fields[field] = [name];
      }
    });
    Object.keys(fields).forEach((key) => {
      console.log(`Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

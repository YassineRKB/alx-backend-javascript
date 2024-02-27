const fs = require('fs').promises;

async function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((database) => {
        const students = database.split('\n').filter((line) => line.trim() !== '');
        const fields = {};
        students.slice(1).forEach((student) => {
          const field = student.split(',')[3];
          const name = student.split(',')[0];
          if (fields[field]) {
            fields[field].push(name);
          } else {
            fields[field] = [name];
          }
        });
        resolve(fields);
      })
      .catch(() => {
        reject(new Error());
      });
  });
}

module.exports = readDatabase;

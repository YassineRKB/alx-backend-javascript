export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'yassine',
  lastName: 'rakibi',
  age: 999999,
  location: 'mars',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 24,
  location: 'San Francisco',
};

const studentsList: Array<Student> = [student1, student2];

export const restable = (studentsList: Array<Student>) => {
  const sheet = document.createElement('table');
  const header = document.createElement('tr');
  (sheet as HTMLElement).insertAdjacentElement('beforeend', header);

  header.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
  header.insertAdjacentHTML('beforeend', '<th>Location</th>');

  for (const student of studentsList) {
    const studentRow = document.createElement('tr');
    (sheet as HTMLElement).insertAdjacentElement('beforeend', studentRow);
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
  }

  (document.body as HTMLElement).insertAdjacentElement('beforeend', sheet);
};

restable(studentsList);

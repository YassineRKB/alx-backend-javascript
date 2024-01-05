export default class HolbertonCourse {
  /* eslint-disable no-underscore-dangle */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw TypeError('name must be a String');
    }
    this._name = value;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw TypeError('length must be a Number');
    }
    this._length = value;
  }

  set students(value) {
    if (!Array.isArray(value)) {
      throw TypeError('students must be an Array');
    }
    if (value.some((student) => typeof student !== 'string')) {
      throw TypeError('students must be an Array of Strings');
    }
    this._students = value;
  }
}

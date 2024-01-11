export interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [index:string]: any,
}

export interface Directors extends Teacher {
  numberOfReports: number,
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string,
}

export function printTeacher(firstName: string, lastName: string) {
  return `${firstName.charAt(0)}. ${lastName}`;
}

interface StudentC {
  firstName: string,
  lastName: string,
  workOnHomework(): string,
  displayName(): string,  
}

class StudentClass implements StudentC {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework() {
    return 'Currently working';
  }
  displayName() {
    return this.firstName;
  }
}

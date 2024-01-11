export interface majorCredits {
  credits: number;
  thebrand: 'major';
}
export interface minorCredits {
  credits: number;
  thebrand: 'minor';
}
export const sumMajorCredits = (subject1: majorCredits, subject2: majorCredits): number => {
  let majorCredits = subject1.credits + subject2.credits;
  return majorCredits;
}
export const sumMinorCredits = (subject1: minorCredits, subject2: minorCredits): number => {
  let minorCredits = subject1.credits + subject2.credits;
  return minorCredits;
}

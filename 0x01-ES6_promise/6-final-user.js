#!/usr/bin/node
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      const array = [];
      for (const result of results) {
        if (result.status === 'fulfilled') {
          array.push({ status: result.status, value: result.value });
        } else array.push({ status: result.status, value: `${result.reason}` });
      }
      return array;
    });
}

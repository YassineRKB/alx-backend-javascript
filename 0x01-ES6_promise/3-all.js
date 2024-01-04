#!/usr/bin/node
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  try {
    const [photo, user] = Promise.all([uploadPhoto(), createUser()]);
    console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
  } catch (error) {
    console.error('Signup system offline');
  }
}

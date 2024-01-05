import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const valarr = [19, 20, 34];
  return valarr.map((value) => new ClassRoom(value));
}

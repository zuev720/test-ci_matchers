export default function sortPersonsByHealth(arrayPerson) {
  return arrayPerson.sort((a, b) => (a.health < b.health ? 1 : -1));
}

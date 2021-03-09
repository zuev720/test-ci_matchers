import sortPersonsByHealth from '../index';

test('should sort objects of persons by health in descending order', () => {
  const arrayPersons = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const received = sortPersonsByHealth(arrayPersons);
  expect(received[0].health).toBeGreaterThanOrEqual(received[1].health);
});

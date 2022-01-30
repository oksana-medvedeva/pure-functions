import showLifeBar from '../life-bar';

test('should be healthy with health > 50', () => {
  const result = showLifeBar({ name: 'Маг', health: 90 });

  expect(result).toBe('healthy');
});

test('should be wounded with health 50', () => {
  const result = showLifeBar({ name: 'Маг', health: 50 });

  expect(result).toBe('wounded');
});

test('should be wounded with health 15', () => {
  const result = showLifeBar({ name: 'Маг', health: 15 });

  expect(result).toBe('wounded');
});

test('should be critical with health < 15', () => {
  const result = showLifeBar({ name: 'Маг', health: 10 });

  expect(result).toBe('critical');
});

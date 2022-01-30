export default function showLifeBar(character) {
  if (character.health > 50) {
    return 'healthy';
  }
  if (character.health < 15) {
    return 'critical';
  }
  return 'wounded';
}

const character1 = {
  name: "Eldrin",
  health: 100,
  mana: 50,
};

const character2 = {
  name: "Mira",
  health: 85,
  mana: 60,
};

const mergedCharacter = { ...character2, ...character1 };

console.log(mergedCharacter);

const copy = Object.assign({}, character1);
copy.name = "Reuven";
console.log(copy);
console.log(character1);

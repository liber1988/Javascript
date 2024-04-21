const weaponInventory = ["Sword", "Bow", "Magic Staff"];
const weaponToCheck = "Sword";

if (weaponInventory.includes(weaponToCheck)) {
  console.log(`${weaponToCheck} exists in weapon inventory.`);
} else {
  console.log(`${weaponToCheck} does not exist in weapon inventory.`);
}

const questNames = [
  "Dragon's Lair",
  "The Lost Artifact",
  "Rescue the Princess",
];
const arr = questNames.slice().reverse();
console.log(arr);

const monsterTypes = ["Dragon", "Goblin", "Orc"];
const str = monsterTypes.join(",");
console.log(str);

const monsterTypes2 = ["Dragon", "Goblin", "Orc"];
const monsterToCheck = "Orc";

if (monsterTypes.includes(monsterToCheck)) {
  console.log(`${monsterToCheck} is in the monster types.`);
} else {
  console.log(`${monsterToCheck} is not in the monster types.`);
}

const questNames1 = [
  "Dragon's Lair",
  "The Lost Artifact",
  "Rescue the Princess",
];
const specificQuest = "Rescue the Princess";
const questIndex = questNames1.indexOf(specificQuest);

if (questIndex !== -1) {
  console.log(`${specificQuest} found at index ${questIndex}.`);
} else {
  console.log("Quest not found.");
}

const monsterList = ["Dragon", "Orc", "Goblin"];
monsterList.pop();
console.log(monsterList);

const monsterList1 = ["Orc", "Goblin"];
const newMonster = "Dragon";
monsterList1.unshift(newMonster);
console.log(monsterList1);

const monsterList2 = ["Dragon", "Orc", "Goblin"];
const firstMonster = monsterList2.shift();
console.log("Removed monster:", firstMonster);
console.log("Updated monster list:", monsterList2);

const heroList1 = ["Archer", "Mage"];
const heroList2 = ["Warrior", "Healer"];
const allHeroes = heroList1.concat(heroList2);
console.log(allHeroes);

const heroList11 = ["Archer", "Mage"];
const heroList22 = ["Warrior", "Healer"];
const allHeroes2 = heroList1.concat(heroList2);
console.log(allHeroes2);

const spellsString = "Fireball, Heal, Ice Lance";
const spellsArray = spellsString.split(",");
console.log(spellsArray);

const questNames2 = [
  "Dragon's Lair",
  "The Lost Artifact",
  "Rescue the Princess",
];
const n = 2;
const arrNames = questNames2.slice(0, n);
console.log(arrNames);

// const monsterList3 = ["Dragon", "Orc", "Goblin"];
// monsterList3 = [];
// console.log(monsterList3);

const inventory = ["Sword", "Shield"];
const newWeapon = "Bow";
inventory.push(newWeapon);
console.log(inventory);

const inventory1 = ["Gold", "Magic Potion", "Shield"];
const soldItem = inventory1.pop();
console.log(`Sold item: ${soldItem}`);
console.log(inventory1);

const inventory3 = ["Gold", "Magic Potion", "Shield"];
const soldItem1 = inventory3.pop();
console.log(`Sold item: ${soldItem1}`);

const quests = ["Dragon's Lair", "Rescue the Princess"];
const newQuest = "Defeat the Goblin King";
quests.unshift(newQuest);
console.log(quests);

let quests3 = [
  "Dragon's Lair",
  "Rescue the Princess",
  "Defeat the Goblin King",
];
quests.sort();
console.log(quests3);

const quests4 = [
  "Dragon's Lair",
  "Rescue the Princess",
  "Defeat the Goblin King",
];
const questToCheck = "Rescue the Princess";
if (quests.includes(questToCheck)) {
  console.log(`${questToCheck} exists.`);
} else {
  console.log(`${questToCheck} does not exist.`);
}

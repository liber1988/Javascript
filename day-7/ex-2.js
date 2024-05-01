const character = {
  name: "",
  class: "",
  level: 0,
  abilities: [],
  stat: { stenght: 0, dexterity: 0, intelligence: 0 },
  getOverallStrenght: function () {
    return this.stat.dexterity + this.stat.stenght + this.stat.intelligence;
  },
};
// exercie-2

character.equipment = {
  weapon: "",
  armor: "",
  accessories: "",
};

console.log(character.abilities[0]);

console.log(character["abilities"][0]);

console.log(character.equipment.armor);

console.log(character["equipment"]["armor"]);

// exersice-3
character.level = 2;
character.abilities.push("fire");
delete character.weapon;
character.equipment.weapon = 4;
character["equipment"]["weapon"] = 10;
if (character.stat) {
  console.log("Yes");
  console.log(character["equipment"]["weapon"]);
}

// exercise-4
const characters = [
  { name: "Eldrin", attributes: { health: 100, mana: 50 } },
  { name: "Mira", attributes: { health: 85, mana: 60 } },
];
console.log(characters[1].attributes.health);
let sum = 0;
let b = 0;
let len = characters.length;
for (i = 0; i < len; i++) {
  b = characters[i].attributes.health;
  sum += b;
}
console.log(sum);

function averageHealth(characters) {
  let totalHealth = 0;

  characters.forEach((character) => {
    totalHealth += character.attributes.health;
  });

  return totalHealth / characters.length;
}

// exercise-5
const character1 = { name: "Eldrin", health: 100 };
const character2 = { name: "Mira", mana: 50 };

const mergedCharacter = { ...character1, ...character2 };

console.log(mergedCharacter);

Object.preventExtensions(mergedCharacter);
Object.seal(mergedCharacter);
console.log(Object.isSealed(mergedCharacter));
console.log(Object.isFrozen(mergedCharacter));

//exercise -6
const characterStats = {
  name: "Eldrin",
  class: "Mage",
  level: 7,
  health: 100,
  mana: 200,
};
console.log(Object.keys(characterStats));
Object.keys(characterStats).forEach((key) => {
  console.log(`Property name: ${key}, Property value: ${characterStats[key]}`);
});

// exercise -7
const gameScores = {
  Eldrin: 950,
  Mira: 1200,
  Thorn: 800,
};

Object.entries(gameScores).forEach((key) => {
  if (gameScores[key[0]] < 1000) {
    gameScores[key[0]] = gameScores[key[0]] + 10;
  }
});
// exersice 8
Object.keys(gameScores).forEach((key) => {
  console.log(`Property name: ${key}, Property value: ${gameScores[key]}`);
});
const quests = {
  1: { name: "Find the Lost Sword", difficulty: "Hard", reward: "100 gold" },
  2: { name: "Defeat the Dragon", difficulty: "Hard", reward: "500 gold" },
  3: { name: "Escort the Merchant", difficulty: "Medium", reward: "250 gold" },
};

// exersice 9
let arr = [];
Object.entries(quests).forEach((key) => {
  if (quests[key[0]].difficulty === "Hard") {
    key[1].isHard = "True";
    const keyCopy = Object.assign({}, key[1]);
    keyCopy.isHard = "True";
    arr.push(keyCopy);
  }
});
console.log(arr);
console.log(quests);

const skillLevels = {
  Ranger: [8, 9, 7, 10, 8.5],
  Mage: [8.5, 8, 9, 9.5, 7.5],
  Warrior: [7, 7.5, 8, 8.5, 9],
};

Object.entries(skillLevels).forEach((key) => {
  let Average = 0;
  let num = 0;

  key[1].forEach((i) => {
    Average += i;
    num++;
  });
  console.log(Average / num);
});
// exersice 10
const questRewards = {
  "Find the Lost Sword": "Legendary Weapon",
  "Defeat the Dragon": "Epic Armor",
  "Escort the Merchant": "Gold",
  "Discover the Ancient Ruins": "Legendary Weapon",
};

newQuest = {};
Object.entries(questRewards).forEach((key) => {
  if (key[1] in newQuest) {
    newQuest[key[1]].push(key[0]);
  } else {
    newQuest[key[1]] = [key[0]];
  }
});
console.log(newQuest);

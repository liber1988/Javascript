// // 5
// const heroInfo = {
//   name: "Legolas",
//   equipment: {
//     first: "Bow of the Galadhrim",
//     second: "Elven dagger",
//     third: "Cloak of Lothlórien",
//   },
// };

// // 6

// // 7
// const heroStats = {
//   name: "Legolas",
//   level: 20,
//   skills: ["Archery", "Sneaking", "Hand-to-hand combat"],
// };

// // 8
// const questLog = [
//   ["Defeat the dragon", "Rescue the princess"],
//   ["Rescue the princess", "Explore the ancient ruins"],
//   ["Explore the ancient ruins", "Discover the hidden treasure"],
// ];

// // 9
// const adventurers = [
//   { name: "Bilbo", favorites: ["Find the ring", "Join the dwarves"] },
//   { name: "Frodo", favorites: ["Destroy the ring", "Visit Rivendell"] },
//   { name: "Aragorn", favorites: ["Protect the hobbits", "Serve the king"] },
// ];

// // 10
// const quests = [
//   { name: "Defeat the dragon", difficulty: 8 },
//   { name: "Rescue the princess", difficulty: 5 },
// ];

function ex1() {
  const hero = {
    name: "Aragorn",
    level: 20,
    class: "Ranger",
    race: "Human",
  };

  // Destructuring assignment to extract name, level, and class
  const { name, level, class: heroClass } = hero;

  // Logging the extracted values
  console.log(`Hero Name: ${name}`);
  console.log(`Hero Level: ${level}`);
  console.log(`Hero Class: ${heroClass}`);
}

function ex2() {
  let topHeroNames = ["Gandalf", "Legolas", "Frodo", "Samwise"];
  let [first, second, ...remaningHeroNames] = topHeroNames;
  return [second, first, ...remaningHeroNames];
}

function ex3() {
  const heroLevels = {
    Aragorn: 20,
    Legolas: 19,
  };
  const levelUpdates = {
    Aragorn: 21,
    Legolas: 20,
  };
  return { ...heroLevels, ...levelUpdates };
}

function ex4() {
  const questList1 = ["Find the ring", "Save the king", "Protect the realm"];
  const questList2 = [
    "Destroy the ring",
    "Find the lost city",
    "Save the king",
  ];
  return [...new Set([...questList1, ...questList2])];
}

function ex5() {
  const heroInfo = {
    name: "Legolas",
    equipment: {
      first: "Bow of the Galadhrim",
      second: "Elven dagger",
      third: "Cloak of Lothlórien",
    },
  };
  let { first, second } = [...heroInfo.equipment];
  return [first, second];
}

function ex6() {
  const baseDetails = {
    name: "Gandalf",
    class: "Wizard",
  };

  const extraDetails = {
    level: 25,
    power: 100,
  };
  return { ...baseDetails, ...extraDetails };
}

function ex7() {
  const uniqueSkills = new Set([...hero.skills, ...newSkills]);

  hero.skills = Array.from(uniqueSkills);
  return hero;
}

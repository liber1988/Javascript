
// exersice 1
function ex1() {
  const hero = {
    name: "Aragorn",
    level: 20,
    class: "Ranger",
    race: "Human",
  };
  const { name, level, class: heroClass } = hero;
  console.log(`Hero Name: ${name}`);
  console.log(`Hero Level: ${level}`);
  console.log(`Hero Class: ${heroClass}`);
}
// exersice 2
function ex2() {
  let topHeroNames = ["Gandalf", "Legolas", "Frodo", "Samwise"];
  let [first, second, ...remaningHeroNames] = topHeroNames;
  return [second, first, ...remaningHeroNames];
}
// exersice 3
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
// exersice 4
function ex4() {
  const questList1 = ["Find the ring", "Save the king", "Protect the realm"];
  const questList2 = [
    "Destroy the ring",
    "Find the lost city",
    "Save the king",
  ];
  return [...new Set([...questList1, ...questList2])];
}
// exersice 5
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
// exersice 6
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
// exersice 7
function ex7(heroDetails) {
  const uniqueSkills = new Set([...hero.skills, ...newSkills]);
  hero.skills = Array.from(uniqueSkills);
  return hero;
}

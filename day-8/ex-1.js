// exersice 1 arrays
function ex1() {
  let str = [{ name: "Hero" }, { name: "Warrior" }, { name: "Mage" }];
  console.log(str.map((a) => a.name));
}
// ex2
function ex2(str, minlevel) {
  return str.filter((a) => a.level >= minlevel);
}

// ex3
function ex3(str) {
  return str
    .map((a) => a.health)
    .reduce((acc, currentValue) => acc + currentValue);
}

// ex-4
function ex4(str) {
  console.log(str.map((a) => a.name + "- Level: " + a.level));
}

//  ex5
function ex5(players, newHealth, playerName) {
  return players.map((player) => {
    if (player.name === playerName) {
      return { ...player, health: newHealth };
    }

    return player;
  });
}

// ex6
function ex6(str, location) {
  return str
    .filter((a) => a.location === location)
    .reduce((acc, currentValue) => acc + currentValue, 0);
}

//ex7
function ex7(str) {
  return (
    str
      .map((a) => a.level)
      .reduce((acc, currentValue) => acc + currentValue, 0) / str.length
  );
}

// ex8
function ex8(str) {
  return str
    .map((a) => a.health)
    .sort((a, b) => a - b)
    .map(
      (a) =>
        (a = {
          health: a,
        })
    );
}
console.log(ex8([{ health: 100 }, { health: 120 }, { health: 80 }]));

// ex9
function ex9(str) {
  return str.map((a) => (a = a.inventory));
}
console.log(
  ex9([
    { inventory: ["sword", "health potion"] },
    { inventory: ["axe", "shield"] },
  ])
);

// 1. Move Player
const gameWorld1 = [
  [0, 2, 0],
  [1, 3, 0],
  [0, 2, 0],
];
let i = 0,
  j = 0;
const playerPosition1 = { x: 1, y: 2 };
const direction1 = "south";
const dir = { north: [0, -1], south: [0, 1], west: [-1, 0], east: [1, 0] };
leni = gameWorld1[0].length;
lenjj = gameWorld1.length;
let newCordinates = [0, 0];
newCordinates[0] = playerPosition1.x + dir[direction1][0];
newCordinates[1] = playerPosition1.y + dir[direction1][1];
if (newCordinates[0] >= leni || newCordinates[1] >= lenjj) {
  console.log("Out of bonderies");
} else {
  console.log(newCordinates);
}

// 2. Battle Simulation
let playerHP2 = 100;
let playerAttack2 = 20;
let enemyHP2 = 150;
let enemyAttack2 = 10;
while (true) {
  enemyHP2 -= playerAttack2;
  if (enemyHP2 <= 0) {
    console.log("the player wins");
    break;
  }
  playerHP2 -= enemyAttack2;
  if (playerHP2 <= 0) {
    console.log("Enemy wins");
    break;
  }
}
// 3. Find Enemies
const gameWorld3 = [
  [0, 2, 0],
  [1, 3, 0],
  [0, 2, 0],
];

// 4. Find Path to Goal
const playerPosition4 = { x: 1, y: 1 };
const goalPosition4 = { x: 0, y: 2 };

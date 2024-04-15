// let weather = "rainy"; //3. Nested If-Else for Weather and Time:
// let timeOfDay = "night";

// if (weather === "rainy") {
//   if (timeOfDay === "day") {
//     console.log("Seek shelter");
//   } else {
//     console.log("Continue the adventure");
//   }
// } else if (weather === "sunny") {
//   if (timeOfDay === "day") {
//     console.log("Continue the adventure");
//   } else {
//     console.log("Seek shelter");
//   }
// } else {
//   console.log("Continue the adventure");
// }

let playerWeapon; // Comparing Weapon Strength:
let enemyWeapon;
if (playerWeapon === enemyWeapon) {
  console.log("Weapons clashing!");
} else {
  console.log("Advantage");
}

let playerAge = 16; //Check Player Age for Game Content:
if (playerAge >= 13 && playerAge <= 19) {
  console.log("Player is between 13 and 19 years old.");
} else {
  console.log("Player is not between 13 and 19 years old.");
}

let gameScore = 60; //Game Score Evaluation with Ternary Operator:
let result = gameScore >= 50 ? "High score" : "Low score";
console.log(result);

let numOfEnemies = 10;
let result1 =
  numOfEnemies % 2 === 0 ? "Even number of enemies" : "Odd number of enemies";
console.log(result1);

let characterAge = 35; //Character Age Group Classification:
let ageGroup =
  characterAge < 12
    ? "Youngling"
    : characterAge >= 13 && characterAge <= 19
    ? "Adolescent"
    : "Adult";
console.log(ageGroup);

let battleSkill = 75; //Player's Battle Skill Evaluation

let evaluation = battleSkill > 70 ? "Skilled warrior" : "Train harder";
console.log(evaluation);

let gameSettingYear = 1200; //Identify Era of Game Setting:

if (gameSettingYear >= 900 && gameSettingYear <= 1500) {
  console.log("Medieval era setting");
} else {
  console.log("Different historical era");
}

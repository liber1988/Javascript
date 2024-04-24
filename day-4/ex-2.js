// 1. Calculate Total Player Experience
const experiencePoints1 = [100, 150, 75];
let i = 0,
  b = 0;
for (i in experiencePoints1) {
  b += experiencePoints1[i];
}
console.log(b);
// 2. Locate Quest by Title
const questTitles2 = ["Quest 1", "Quest 2", "Quest 3"];
for (i = 0; i < questTitles2.length; i++) {
  console.log(`is ${questTitles2[i]} located ${i} `);
}

// 3. List Enemies Above Health Threshold
const enemyHealths3 = [80, 120, 65];
for (i = 0; i < enemyHealths3.length; i++) {
  if (enemyHealths3[i] > 100) {
    console.log(`index ${i}`);
  }
}

// 4. Enhance All Quest Rewards
const questRewards4 = [50, 100, 75];
for (i = 0; i < questRewards4.length; i++) {
  questRewards4[i] += 10;
}
console.log(questRewards4);
// 5. Count Occurrences of a Specific Reward
const questRewards5 = [50, 100, 75, 100];
const specificReward5 = 100;
b = 0;
for (i = 0; i < questRewards5.length; i++) {
  if (questRewards5[i] === specificReward5) {
    b += 1;
  }
}
console.log(b);
// 6. Verify All Quests Offer Sufficient Challenge
const questChallenges6 = [120, 150, 125];
let check = true;
for (i = 0; i < questChallenges6.length; i++) {
  if (questChallenges6[i] < 100) {
    check = false;
    console.log(false);
    break;
  }
}
if (check) {
  console.log(true);
}
// 7. Discover the Quest with the Maximum Reward
const questRewards7 = [50, 100, 75, 150];

// 8. Combine Enemy Powers for a Total Assault Value
const enemyPowers8 = [50, 80, 65, 90];
const enemyHealths8 = [80, 120, 60, 100];
let len;
len =
  enemyPowers8.length > enemyHealths8.length
    ? enemyPowers8.length
    : enemyHealths8.length;
let power = 0;
let health = 0;
for (i = 0; i < len; i++) {
  health += enemyHealths8[i];
  power += enemyPowers8[i];
}

// 9. Calculate Total Experience from Quest Matrix
const questExperienceMatrix9 = [
  [100, 200],
  [150, 175],
  [120, 250],
];

// 10. Find the Quest with Highest Experience in Each Category
const questExperienceMatrix10 = [
  [100, 200],
  [150, 175],
  [120, 250],
];
let sum = 0;
for (i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    sum += questExperienceMatrix10[i][j];
  }
}
console.log(sum);
// 11. Count High-Difficulty Quests in Each Category
const questDifficultyMatrix11 = [
  [5, 7],
  [8, 6],
  [9, 7],
];

// 12. Sum of Rewards for High-Reward Quests by Category
const questRewardsMatrix12 = [
  [50, 200],
  [300, 175],
  [120, 500],
];

// 13. Average Health of Enemies by Type
const enemyHealthMatrix13 = [
  [80, 120],
  [60, 90],
  [200, 150],
];

// 1. Character Name Capitalization
// Input: "iron warrior"
let str = "iron warrior";
let words = str.split(" ");
let capitalizedWords = [];
for (i = 0; i < words.length; i++) {
  capitalizedWords[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}
console.log(capitalizedWords.join(" "));
console.log(str.slice("two"));
// 2. Item Search
// Input: ["Iron Sword", "Healing Potion", "Steel Shield", "Iron Axe"] and query "Iron"
let str3 = [
  "Iron Sword",
  "Healing Potion",
  "Steel Shield",
  "Iron Axe",
  "Iron Check",
  "No Iron",
  "Nice Game",
];
let words2 = "";
let ironInclude = [];
let bool = false;
for (let i = 0; i < str3.length; i++) {
  words2 = str3[i].split(" ");
  for (let j = 0; j < words2.length; j++) {
    if (words2[j] === "Iron") {
      bool = true;
      break;
    }
  }
  if (bool) {
    ironInclude.push(str3[i]);
  }
  bool = false;
}
console.log(ironInclude);
// 3. NPC Name Format
// Input: "Goblin, Grunty"
let str4 = "Goblin , Grunty";
let arr = str4.split(",");
let x;
console.log(arr);
x = arr[0];
arr[0] = arr[1];
arr[1] = x;
console.log(arr.join(" , "));

// 4. Quest Duration
// Input: "3h 45min"
let input = "3h 45min";
let arrInput = input.split(" ");
let x1 = parseInt(arrInput[0]) + " hours " + parseInt(arrInput[1]) + " min ";
console.log(x1);
// 5. Game Title Acronym
// Input: "Epic Fantasy Battle"
input = "Epic Fantasy Battle";
arr = input.split(" ");
output = "";
for (i = 0; i < arr.length; i++) {
  output += arr[i][0];
}
console.log(output);
// 6. Concatenate Character Details
input = "Iron Warrior;Warrior;10";
arr = input.split(";");
output = arr[0] + ", class:" + arr[1] + ", level:" + arr[2];
console.log(output);

// 7. Location Slug
input = "Dark Forest";
input = input.toLowerCase().replace(/\s+/g, "-");
console.log(input);

// 8. Quest Description Trimming
(input =
  "Retrieve the sacred artifact from the dragon's lair. But beware, the dragon is cunning and powerful."),
  50;
let maxLength = 50;
if (input.length <= maxLength) {
  console.log(input);
}
input = input.substring(0, maxLength);
let lastSpace = input.lastIndexOf(" ");
if (lastSpace !== -1) {
  input = input.substring(0, lastSpace);
  input += "...";
  console.log(input);
}

// 9. Monster List
input = "Goblin, Orc, Dragon";
console.log(input.split(","));

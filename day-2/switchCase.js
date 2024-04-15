let dayOfWeek = 3;

switch (dayOfWeek) {
  case 1:
    console.log("train!");
    break;
  case 2:
    console.log(" work!");
    break;
  case 3:
    console.log("more work");
    break;
  case 4:
    console.log(" a lot of work");
    break;
  case 5:
    console.log("to much work ");
    break;
  case 6:
    console.log(" forget the work");
    break;
  case 7:
    console.log("rest");
    break;

  default:
    console.log("No special quest or event planned for this day.");
}

let themeColor = "dark";

switch (themeColor) {
  case "light":
    console.log("Setting theme color to light.");

    break;
  case "dark":
    console.log("Setting theme color to dark.");

    break;
  case "dungeon":
    console.log("Setting theme color to dungeon.");

    break;
  default:
    console.log("Unsupported color theme. Setting default theme color.");
}

let questStatus = "unread";

switch (questStatus) {
  case "new":
  case "unread":
  case "unopened":
    console.log("You have new quests awaiting!");
    break;
  case "completed":
    console.log("You have completed all quests.");
    break;
  default:
    console.log("Unknown quest status.");
}

let playerLevel = "Advanced";

switch (playerLevel) {
  case "Beginner":
    console.log("You are a beginner. Keep practicing!");
    break;
  case "Intermediate":
    console.log("You are an intermediate player. You're making progress!");
    break;
  case "Advanced":
    console.log("You are an advanced player. Well done!");
    break;
  case "Expert":
    console.log("You are an expert player. Impressive!");
    break;
  case "Master":
    console.log("You are a master player. You have mastered the game!");
    break;
  default:
    console.log("Unknown player level.");
}

let playerScore = 85;

switch (true) {
  case playerScore >= 90:
    console.log("Legend");
    break;
  case playerScore >= 70 && playerScore <= 89:
    console.log("Champion");
    break;
  default:
    console.log("Rookie");
}

let questMonth = 8;
let seasonalQuest;

switch (questMonth) {
  case 1:
    seasonalQuest = "Ice Kingdom Adventure";
    break;
  case 2:
    seasonalQuest = "Valentine's Day Special";
    break;
  case 3:
    seasonalQuest = "Spring Blossom Hunt";
    break;
  case 4:
    seasonalQuest = "Easter Egg Hunt";
    break;
  case 5:
    seasonalQuest = "Flower Festival Celebration";
    break;
  case 6:
    seasonalQuest = "Summer Solstice Quest";
    break;
  case 7:
    seasonalQuest = "Beach Party Bonanza";
    break;
  case 8:
    seasonalQuest = "Underwater Expedition";
    break;
  case 9:
    seasonalQuest = "Harvest Festival Quest";
    break;
  case 10:
    seasonalQuest = "Haunted Mansion Mystery";
    break;
  case 11:
    seasonalQuest = "Turkey Trot Adventure";
    break;
  case 12:
    seasonalQuest = "Frosty Festivities";
    break;
  default:
    console.log("Invalid month for quest");
}

console.log(seasonalQuest);

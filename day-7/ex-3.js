// Arrow function
// ex-1
let getPlayerName = (player) => player.name;
// ex-2
const getPlayerHealth = (health) => {
  if (health > 70) {
    return "High";
  } else if (health > 40) {
    return "Medium";
  } else {
    return "Low";
  }
};
// ex-3
const getTotalInventoryValue = (items) => {
  let totalValue = 0;
  for (let i = 0; i < items.length; i++) {
    totalValue += items[i].value;
  }
  return "Total inventory value is " + totalValue;
};
// ex-4
let sortedItems = items.sort((a, b) => b.value - a.value);
// ex-5
const getItemNames = (items) => items.map((item) => item.name);

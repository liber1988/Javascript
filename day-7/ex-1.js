//Objects lecture

// exersice-1
const gameWorld = {
  players: [],
  enemies: [],
  items: [],
  npcs: [],
  createEntity: function (name, health, position, inventory) {
    return {
      name: name,
      health: health,
      position: position,
      inventory: inventory,
    };
  },

  addPlayer: function (player) {
    this.players.push(player);
  },

  removePlayer: function (player) {
    const index = this.players.indexOf(player);
    if (index !== -1) {
      this.players.splice(index, 1);
    }
  },

  addEnemy: function (enemy) {
    this.enemies.push(enemy);
  },

  removeEnemy: function (enemy) {
    const index = this.enemies.indexOf(enemy);
    if (index !== -1) {
      this.enemies.splice(index, 1);
    }
  },

  addItem: function (item) {
    this.items.push(item);
  },

  removeItem: function (item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  },

  addNPC: function (npc) {
    this.npcs.push(npc);
  },

  removeNPC: function (npc) {
    const index = this.npcs.indexOf(npc);
    if (index !== -1) {
      this.npcs.splice(index, 1);
    }
  },
};

gameworld.createEntity = function (name, health, position, inventory) {
  const entity = {
    name: name,
    health: health,
    position: position,
    inventory: inventory,
  };

  entity.move = function (newPosition) {
    this.position = newPosition;
  };

  return entity;
};

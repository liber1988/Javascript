class Trip {
  constructor(destination, duration, distance) {
    this.#destination = destination;
    this.#duration = duration;
    this.#distance = distance;
    this.#activities = [];
  }
  getDestination() {
    return this.#destination;
  }
  #destination;
  #duration;
  #distance;
  #activities;
  getDestination() {
    return this.#destination;
  }

  getDuration() {
    return this.#duration;
  }
  getDistance() {
    return this.#distance;
  }
  setDestination(destination) {
    this.#destination = destination;
  }

  setDuration(duration) {
    this.#duration = duration;
  }
  setDistance(distance) {
    this.#distance = distance;
  }
  set distance(newDistance) {
    if (typeof newDistance === 'number' && newDistance > 0) {
      this.#distance = newDistance;
    } else {
      throw new Error('Distance must be a positive number.');
    }
  }

  addActivity(activity) {
    if (typeof activity === 'string' && activity.trim().length > 0) {
      this.#activities.push(activity.trim());
    } else {
      throw new Error('Activity must be a non-empty string.');
    }
  }

  #calculateTotalCost() {
    const fixedCostPerDay = 50; // Example fixed cost per day
    const fixedCostPerMile = 0.1; // Example fixed cost per mile
    this.#totalCost = fixedCostPerDay * this.#duration + fixedCostPerMile * this.#distance;
  }

  get totalCost() {
    this.#calculateTotalCost();
    return this.#totalCost;
  }
}

}

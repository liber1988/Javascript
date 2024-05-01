var obj = {
  prop1: "value1",
  prop2: {
    nestedProp: "nestedValue",
  },
  prop: [1, 2, 3, 4],
};

// Freeze the outer object
Object.freeze(obj);

// Try to modify the value of nestedProp
obj.prop2.nestedProp = "new nested value"; // This will not have an effect
obj.prop2.check = "checking";
obj.prop[0] = 1000;
console.log(obj.prop); // Output: 'nestedValue'

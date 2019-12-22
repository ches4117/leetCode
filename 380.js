/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.valSet =  {}
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if(this.valSet[val] || this.valSet[val] === 0) {
    return false
  } else {
    this.valSet[val] = val
    return true
  }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if(this.valSet[val] || this.valSet[val] === 0) {
    delete this.valSet[val]
    return true
  } else {
    return false
  }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  let allValues = Object.values(this.valSet)
  return allValues[Math.floor(Math.random() * allValues.length )]
};


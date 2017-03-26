var Store = function(name, city, opening_balance){
  this.name = name;
  this.city = city;
  this.opening_balance = opening_balance;
  this.inventory = [];
};

Store.prototype = {
  addInventory: function(record){
    this.inventory.push(record);
  }
};

module.exports = Store
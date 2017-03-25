var Store = function(name, city, opening_balance){
  this.name = name;
  this.city = city;
  this.opening_balance = opening_balance;
  this.inventory = [];
}

Store.prototype = {
  addInventory: function(record){
    this.inventory.push(record);
  },
  setBalance: function(){
    this.total = this.opening_balance;
    this.inventory.forEach(function(record) {
      this.total += record.price;
    }.bind(this));
  }
};

module.exports = Store

// var ourForEach = function(array, callback) {
//   for (var item of array) {
//     callback(item);
//   }
// };

// ourForEach(array, function(item) {
//   console.log("The item is: ", item);
// });
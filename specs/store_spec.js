var assert = require("assert");
Store = require("../store");
Inventory = require("../inventory");


describe("Store", function(){
  var store;
  var record1;
  var record2;
  var record3;

  beforeEach(function(){
    store = new Store("A Big Record Shop", "Chalfont St Giles", 500.00);
    // record1 = new Record("Otis Redding", "Pain in my heart", 12.46);

  });

  it('should have a name', function(){
    assert.equal("A Big Record Shop", store.name);
  });
  it('should start with no records', function(){
    assert.equal(0, store.inventory.length);
  });
  it('should be able to add a record', function(){
    store.addInventory("Otis Redding", "Pain in my heart", 12.46);
    assert.equal(1, store.inventory.length);
  });
  it('should have an opening balance', function(){
    assert.equal(500.00, store.opening_balance);
  });
  it('should increase balance with sales', function(){
    store.addInventory("Otis Redding", "Pain in my heart", 12.46);
    store.addInventory("Echo & The Bunnymen", "Porcupine", 11.42);
    console.log("inventory1 --- " + this.price);

    store.setBalance();
    console.log("store.opening_balance -- " + store.opening_balance);
    console.log("store.total --- " + store.total);
    console.log("inventory2 --- " + store.inventory[1]);
    console.log("price --- " + record.price);
    console.log("price --- " + this.price);

    assert.equal(512.46, store.total);
  });
});
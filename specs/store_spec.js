var assert = require("assert");
Store = require("../store");
Inventory = require("../inventory");


describe("Store", function(){
  var store;

  beforeEach(function(){
    store = new Store("A Big Record Shop", "Chalfont St Giles", 500.00);
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
});
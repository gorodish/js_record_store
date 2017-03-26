var assert = require("assert");
Store = require("../store");
Inventory = require("../inventory");



describe("Inventory", function(){
  var inventory;
  var store;
  var record1;

  beforeEach(function(){

  });
  it('should have an artist', function(){
    record1 = new Inventory("Echo & The Bunnymen", "Porcupine", 11.42);
    assert.equal("Echo & The Bunnymen", record1.artist);
  });
  it("should print out record details as a string", function() {
    record1 = new Inventory("Echo & The Bunnymen", "Porcupine", 11.42);
    assert.equal("Artist: Echo & The Bunnymen, Title: Porcupine, Price: 11.42", record1.printRecords());
   });
});

// it("should print out record details as a string", function() {
//    assert.equal("Artist: Kip Moore, Title: Up All Night, Price: 5.99", record1.toString());
//  });
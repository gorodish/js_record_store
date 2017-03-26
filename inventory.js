var Inventory = function(artist, title, price){
  this.artist = artist;
  this.title = title;
  this.price = price;
};

Inventory.prototype = {
  printRecords: function(){
    return("Artist: " + this.artist + ", Title: " + this.title + ", Price: " + this.price);
     }
};

module.exports = Inventory
class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
        const item = this.items[i];
        function isSulfuras(item) {
            return item.name == "Sulfuras, Hand of Ragnaros"
        }
        function isBrie(item) {
            return item.name == "Aged Brie"
        }
        function isTAFKAL80ETC(item) {
            return item.name == "Backstage passes to a TAFKAL80ETC concert"
        }
        function isConjured(item) {
            return item.name == "Conjured"
        }

        function sellByDatePassed(item) {
            return item.sellIn <= 0
        }

        // Returns if Sulfuras as its values never change
        if (isSulfuras(item)) {
            return
        }

        if (!sellByDatePassed(item)) {
            if (isBrie(item)) {
                item.quality = item.quality + 1
            } else if (isTAFKAL80ETC(item)) {   
                if (item.sellIn < 6) {
                    item.quality = item.quality + 3
                } else if (item.sellIn < 11) {
                    item.quality = item.quality + 2
                } else {
                item.quality = item.quality + 1
                }
            } else if (isConjured(item)) {
                item.quality = item.quality - 2
            } else {
                item.quality = item.quality - 1
            }
        }

        if (sellByDatePassed(item)) {
            if (isBrie(item)) {
                item.quality = item.quality + 2
            } else if (isTAFKAL80ETC(item)) {   
                item.quality = 0
            } else if (isConjured(item)) {
                item.quality = item.quality - 4
            } else {
                item.quality = item.quality - 2
            }
        }
        
         // Sets quality to 0 if it goes below 0 as it cannot be negative
        if (item.quality < 0) {
            item.quality = 0
        }
        // Sets quality to 50 if it goes above 50 as it cannot be greater than 50
        if (item.quality > 50) {
            item.quality = 50
        }

        item.sellIn = item.sellIn - 1
    }

    return this.items;
  }
  updateQualityForMultipleDays(days) {
    for (let i = 0; i < days; i++) {
      this.updateQuality();
    }
    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
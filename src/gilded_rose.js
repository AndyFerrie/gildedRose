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
        const minimumQuality = 0
        const maximumQuality = 50
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

        function increaseQuality(item, amount) {
        item.quality = item.quality + amount;
        }

        function decreaseQuality(item, amount) {
        item.quality = item.quality - amount;
        }

        function updateTAFKAL80ETCQuality(item) {
            if (item.sellIn < 6) {
                increaseQuality(item, 3);
            } else if (item.sellIn < 11) {
                increaseQuality(item, 2);
            } else {
                increaseQuality(item, 1);
            }
        }

        // Returns if Sulfuras as its values never change
        if (isSulfuras(item)) {
            return
        }

        if (!sellByDatePassed(item)) {
            if (isBrie(item)) {
                increaseQuality(item, 1)
            } else if (isTAFKAL80ETC(item)) {   
                updateTAFKAL80ETCQuality(item)
            } else if (isConjured(item)) {
                decreaseQuality(item, 2)
            } else {
                decreaseQuality(item, 1)
            }
        }

        if (sellByDatePassed(item)) {
            if (isBrie(item)) {
                increaseQuality(item, 2)
            } else if (isTAFKAL80ETC(item)) {   
                item.quality = 0
            } else if (isConjured(item)) {
                decreaseQuality(item, 4)
            } else {
                decreaseQuality(item, 2)
            }
        }
        
        if (item.quality < minimumQuality) {
            item.quality = minimumQuality
        }
        
        if (item.quality > maximumQuality) {
            item.quality = maximumQuality
        }

        // Decreases sell in days by 1
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
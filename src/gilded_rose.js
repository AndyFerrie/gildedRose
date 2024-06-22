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

        if (isSulfuras(item)) {
            return
        }

        if (item.quality < 0) {
            item.quality = 0
        }

      if (!isBrie(item) && !isTAFKAL80ETC(item)) {
        if (item.quality > 0) {
            if (isConjured(item)) {
                if (item.quality - 2 > 0) {
                    item.quality = item.quality - 2;
                } else {
                    item.quality = 0;
                }
            } else {
                item.quality = item.quality - 1;
            }
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
          if (isTAFKAL80ETC(item)) {
            if (item.sellIn < 11) {
              if (item.quality < 50) {
                item.quality = item.quality + 1;
              }
            }
            if (item.sellIn < 6) {
              if (item.quality < 50) {
                item.quality = item.quality + 1;
              }
            }
          }
        }
      }
        
        item.sellIn = item.sellIn - 1;
      if (item.sellIn < 0) {
        if (!isBrie(item)) {
          if (!isTAFKAL80ETC(item)) {
            if (item.quality > 0) {
                if (isConjured(item)) { 
                    item.quality = item.quality - 2;
                } else {
                    item.quality = item.quality - 1;
                }
            }
          } else {
            item.quality = item.quality - item.quality;
          }
        } else {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
          }
        }
      }
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
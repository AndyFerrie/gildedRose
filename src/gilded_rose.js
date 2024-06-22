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
        if (this.items[i].name == "Sulfuras, Hand of Ragnaros") {
            return
        }

        if (this.items[i].quality < 0) {
            this.items[i].quality = 0
        }

      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
            if (this.items[i].name == 'Conjured') { 
                if (this.items[i].quality - 2 > 0) {
                    this.items[i].quality = this.items[i].quality - 2;
                } else {
                    this.items[i].quality = 0;
                }
            } else {
                this.items[i].quality = this.items[i].quality - 1;
            }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
        
        this.items[i].sellIn = this.items[i].sellIn - 1;
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
                if (this.items[i].name == 'Conjured') { 
                    this.items[i].quality = this.items[i].quality - 2;
                } else {
                    this.items[i].quality = this.items[i].quality - 1;
                }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
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
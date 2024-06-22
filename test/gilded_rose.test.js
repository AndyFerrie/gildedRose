const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
    describe("Given a non-legendary item", function() {
        test("When the sell by date has not passed, then `Quality` decreases by 1", function() {
        const gildedRose = new Shop([new Item("non-legendary item", 2, 4)]);
        const items = gildedRose.updateQualityForMultipleDays(1)
        expect(items[0].quality).toBe(3);
        });
        test("When the sell by date has passed, then `Quality` degrades by 2", function() {
            const gildedRose = new Shop([new Item("non-legendary item", 1, 4)]);
            const items = gildedRose.updateQualityForMultipleDays(2)
            expect(items[0].quality).toBe(1);
        });
        test("When 'Quality' reaches 0, then `Quality` cannot decrease to a negative value", function() {
            const gildedRose = new Shop([new Item("non-legendary item", 1, 0)]);
            const items = gildedRose.updateQualityForMultipleDays(20)
            expect(items[0].quality).toBe(0);
        });
        test("When an item is added with negative quality, then `Quality` is set to zero", function() {
            const gildedRose = new Shop([new Item("non-legendary item", 1, -1)]);
            const items = gildedRose.updateQualityForMultipleDays(20)
            expect(items[0].quality).toBe(0);
        });
    });
    describe("Given 'Aged Brie'", function() {
        test("When the sell by date has not passed, then `Quality` increases by 1", function() {
            const gildedRose = new Shop([new Item("Aged Brie", 2, 4)]);
            const items = gildedRose.updateQualityForMultipleDays(1)
            expect(items[0].quality).toBe(5);
        });
        test("When the sell by date has passed, then `Quality` increases by 2", function() {
            const gildedRose = new Shop([new Item("Aged Brie", 1, 4)]);
            const items = gildedRose.updateQualityForMultipleDays(2)
            expect(items[0].quality).toBe(7);
        });
        test("When 'Quality' reaches 50, then `Quality` cannot increase further", function() {
            const gildedRose = new Shop([new Item("Aged Brie", 1, 50)]);
            const items = gildedRose.updateQualityForMultipleDays(20)
            expect(items[0].quality).toBe(50);
        });
    });
    describe("Given 'Sulfuras, Hand of Ragnaros'", function() {
        test("When multiple days pass, then `Quality` does not change", function() {
            const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 1, 80)]);
            const items = gildedRose.updateQualityForMultipleDays(20)
            expect(items[0].quality).toBe(80);
        });
        test("When multiple days pass, then `SellIn` does not change", function() {
            const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 1, 80)]);
            const items = gildedRose.updateQualityForMultipleDays(20)
            expect(items[0].sellIn).toBe(1);
        });
    });
    describe("Given 'Backstage passes to a TAFKAL80ETC concert'", function() {
        test("When the sell by date is in over 10 days, then `Quality` increases by 1", function() {
            const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 4)]);
            const items = gildedRose.updateQualityForMultipleDays(1)
            expect(items[0].quality).toBe(5);
        });
        test("When the sell by date is in 6-10 days, then `Quality` increases by 2", function() {
            const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 4)]);
            const items = gildedRose.updateQualityForMultipleDays(1)
            expect(items[0].quality).toBe(6);
        });
        test("When the sell by date is in 5 days or less, then `Quality` increases by 3", function() {
            const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 4)]);
            const items = gildedRose.updateQualityForMultipleDays(1)
            expect(items[0].quality).toBe(7);
        });
        test("When the sell by date has passed, then `Quality` drops to 0", function() {
            const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 4)]);
            const items = gildedRose.updateQualityForMultipleDays(1)
            expect(items[0].quality).toBe(0);
        });
    });
    describe("Given 'Conjured' item", function() {
        test("When the sell by date has not passed, then `Quality` decreases by 2", function() {
            const gildedRose = new Shop([new Item("Conjured", 3, 6)]);
            const items = gildedRose.updateQualityForMultipleDays(1)
            expect(items[0].quality).toBe(4);
        });
        test("When 'Quality' reaches 0 before the sell by date, then `Quality` cannot decrease further", function() {
            const gildedRose = new Shop([new Item("Conjured", 3, 1)]);
            const items = gildedRose.updateQualityForMultipleDays(20)
            expect(items[0].quality).toBe(0);
        });
        test("When the sell by date has passed, then `Quality` decreases by 4", function() {
            const gildedRose = new Shop([new Item("Conjured", 0, 6)]);
            const items = gildedRose.updateQualityForMultipleDays(1)
            expect(items[0].quality).toBe(2);
        });
        test("When 'Quality' reaches 0 after the sell by date, then `Quality` cannot decrease further", function() {
            const gildedRose = new Shop([new Item("Conjured", 0, 1)]);
            const items = gildedRose.updateQualityForMultipleDays(20)
            expect(items[0].quality).toBe(0);
        });
    });

})
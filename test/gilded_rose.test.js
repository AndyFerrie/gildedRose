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
})
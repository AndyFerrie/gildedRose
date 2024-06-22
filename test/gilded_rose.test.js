const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
    describe("Given a non-legendary item", function() {
        test("When the sell by date has not passed, then `Quality` decreases by 1", function() {
        const gildedRose = new Shop([new Item("non-legendary item", 2, 4)]);
        const items = gildedRose.updateQualityForMultipleDays(1)
        expect(items[0].quality).toBe(3);
        });
        test("When the sell by date has passed, then `Quality` degrades twice as fast", function() {
            const gildedRose = new Shop([new Item("non-legendary item", 1, 4)]);
            const items = gildedRose.updateQualityForMultipleDays(2)
            expect(items[0].quality).toBe(1);
        });
        test("When the sell by date has passed, then `Quality` cannot be negative", function() {
            const gildedRose = new Shop([new Item("non-legendary item", 1, 0)]);
            const items = gildedRose.updateQualityForMultipleDays(2)
            expect(items[0].quality).toBe(0);
        });
    });
})
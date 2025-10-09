// Task 5
// You work for a manufacturer, and have been asked to calculate
// the total profit made on the sales of a product. You are given an object
// containing the cost price per unit (in dollars), sell price per unit (in dollars),
// and the starting inventory. Return the total profit made,
// rounded to the nearest dollar. Assume all of the inventory has been sold.

// Examples
// profit({
// costPrice: 32.67,
// sellPrice: 45.00,
// inventory: 1200
// }) - 14796
function profit({costPrice, sellPrice, inventory}){
    return Math.round((sellPrice - costPrice) * inventory);
}
console.log(profit({costPrice: 32.67, sellPrice: 45.00, inventory: 1200}));
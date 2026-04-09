// Project A: Food Order System
// Read and study this solution carefully before attempting Project B.

// Step 1: Menu (array of objects)
const menu = [
  { name: "Burger", price: 8 },
  { name: "Fries", price: 5 },
  { name: "Drink", price: 3 },
  { name: "Pizza", price: 12 }
];

// Step 2: User order (simulate selection)
const order = ["Burger", "Fries", "Drink"];

// Step 3: Function to find an item in the menu by name
function findItem(name) {
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].name === name) {
      return menu[i];
    }
  }
  return null;
}

// Step 4: Calculate the total cost of an order
function calculateTotal(orderList) {
  let total = 0;

  for (let i = 0; i < orderList.length; i++) {
    const item = findItem(orderList[i]);
    if (item !== null) {
      total += item.price;
    }
  }

  return total;
}

// Step 5: Apply a 10% discount if total exceeds $20
function applyDiscount(total) {
  if (total > 20) {
    return total * 0.9;
  }
  return total;
}

// Step 6: Print the receipt
function printReceipt(orderList) {
  console.log("Order Summary:");

  for (let i = 0; i < orderList.length; i++) {
    const item = findItem(orderList[i]);
    if (item !== null) {
      console.log(item.name + " - $" + item.price);
    }
  }

  const total = calculateTotal(orderList);
  const finalTotal = applyDiscount(total);

  console.log("\nTotal: $" + total);

  if (total > 20) {
    console.log("Discount applied!");
  } else {
    console.log("No discount applied");
  }

  console.log("Final Total: $" + finalTotal);
}

// Run program
printReceipt(order);

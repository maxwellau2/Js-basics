// Project B: Game Store System
// Your task: recreate Project A, but for a game store.
//
// Study Project A (project-a-food-order/solution.js) first.
// Then rebuild this project step by step — do NOT copy-paste and rename.
//
// -----------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------
//
// 1. GAME MENU
//    Create an array called `games` where each element is an object with:
//      - name  (string)
//      - price (number)
//
//    Example:
//      const games = [
//        { name: "FIFA",          price: 30 },
//        { name: "Minecraft",     price: 25 },
//        { name: "Elden Ring",    price: 60 },
//        { name: "Stardew Valley",price: 15 }
//      ];
//
// 2. SHOPPING CART
//    Create an array called `cart` with the names of games to purchase.
//
//    Example:
//      const cart = ["FIFA", "Minecraft"];
//
// 3. FUNCTIONS TO IMPLEMENT
//
//    findGame(name)
//      - Takes a game name (string)
//      - Searches the `games` array
//      - Returns the matching game object, or null if not found
//
//    calculateTotal(cart)
//      - Takes the cart array
//      - Uses findGame() to look up each item
//      - Returns the total price (number)
//
//    applyDiscount(total)
//      - If total > 50, apply a 15% discount (multiply by 0.85)
//      - Otherwise, return the total unchanged
//
//    printReceipt(cart)
//      - Prints each item in the cart with its price
//      - Prints the subtotal
//      - Prints whether a discount was applied
//      - Prints the final total
//
// 4. EXPECTED OUTPUT (for the example cart above)
//
//    Cart Summary:
//    FIFA - $30
//    Minecraft - $25
//
//    Total: $55
//    Discount applied!
//    Final Total: $46.75
//
// -----------------------------------------------------------------------
// YOUR CODE GOES BELOW THIS LINE
// -----------------------------------------------------------------------

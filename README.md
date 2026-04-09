# JavaScript Mini Project: Learn by Mimicry

## Objective

You will learn foundational programming in JavaScript by:

1. Studying a working project (Project A)
2. Rebuilding a similar project (Project B) by mimicking it

---

## Repository Structure

```
project-a-food-order/
  solution.js        <- Full working solution (read and study this)

project-b-game-store/
  starter.js         <- Your task (requirements inside, no solution)
```

---

# Project A — Food Order System (WITH SOLUTION)

## Problem

Build a simple food ordering system that:

- Stores a menu
- Lets a user "order" items (hardcoded)
- Calculates total cost
- Applies a discount if needed
- Prints a receipt

## Concepts Used

- Arrays
- Objects
- Functions
- Loops
- Conditionals (if/else)

See the full solution in [`project-a-food-order/solution.js`](project-a-food-order/solution.js).

### How to Study This Code

Before moving on, make sure you understand:

- What is `menu`?
- Why is `order` an array of names?
- What does `findItem()` return?
- How does `calculateTotal()` use `findItem()`?
- Where is the discount applied?

---

# Project B — Game Store System (NO SOLUTION)

## Task

Recreate Project A, but for a game store.

See the starter file in [`project-b-game-store/starter.js`](project-b-game-store/starter.js).

### Requirements

1. **Create a Game Menu** — each game must have a `name` and `price`
2. **Create a Shopping Cart** — an array of game names to purchase
3. **Implement these functions:**
   - `findGame(name)`
   - `calculateTotal(cart)`
   - `applyDiscount(total)`
   - `printReceipt(cart)`
4. **Discount Rule:** if total > 50, apply a 15% discount; otherwise no discount

### Expected Output

```
Cart Summary:
FIFA - $30
Minecraft - $25

Total: $55
Discount applied!
Final Total: $46.75
```

### Important Rule

Do not copy-paste and rename. You must:

- Understand Project A
- Rebuild it step by step

---

## Where to Get Help

### AI Tools

Use AI for guidance, not full answers:

- [ChatGPT](https://chat.openai.com)
- [Google Gemini](https://gemini.google.com)

Good prompts:

- "Explain how this function works"
- "Why is my loop not working?"
- "What is wrong with this code?"

### Search

Use Google Search with queries such as:

- `javascript for loop example`
- `javascript array of objects`
- `how to write function javascript`

### Documentation

| Topic | Link |
|-------|------|
| JavaScript Basics | [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
| JavaScript Basics | [W3Schools](https://www.w3schools.com/js/) |
| Arrays | [MDN — Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) |
| Objects | [MDN — Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects) |
| Loops | [MDN — Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration) |
| Functions | [MDN — Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) |
| If / Else | [MDN — if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) |

---

## Tips

- Test functions individually before wiring them together
- Use `console.log()` to debug your code
- Break the problem into smaller parts
- Refer back to Project A when stuck

---

## Optional Challenges

After completing Project B, try:

- Add quantity (e.g. 2x FIFA)
- Add tax calculation
- Add user input using `prompt()`

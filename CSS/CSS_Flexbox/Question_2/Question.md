## Question 2 — Fix the product card layout

[E-commerce & Shopping web ui design by Roohi Koohi ✦ on Dribbble](https://images.openai.com/static-rsc-4/XtLCFnDznI-Jt3S792LXez23jLjS10TZFuBPI0sUFhG-UmGeGRvW6PSiF6UNBhxjpP8GWZK83TqSayRkVTQvtl20HqxEU1XCfLzl6amKRuPhKA_Bpb5KtC2ff7X2xmjbVplzFQCp5d5wLHAks52HQawa1YXKdtE_8pP3nfh7Vv4?purpose=inline)


HTML

```
<section class="products">
  <article class="product">
    <img src="shoe.jpg" alt="Running shoe">
    <h3>Running Shoes</h3>
    <p>Comfortable shoes for everyday running.</p>
    <strong>₹1,999</strong>
    <button>Buy Now</button>
  </article>

  <article class="product">
    <img src="watch.jpg" alt="Watch">
    <h3>Smart Watch</h3>
    <p>Track your daily activity and health goals.</p>
    <strong>₹2,499</strong>
    <button>Buy Now</button>
  </article>

  <article class="product">
    <img src="bag.jpg" alt="Backpack">
    <h3>Travel Backpack</h3>
    <p>A spacious backpack for your next trip.</p>
    <strong>₹1,499</strong>
    <button>Buy Now</button>
  </article>

  <article class="product">
    <img src="headphones.jpg" alt="Headphones">
    <h3>Headphones</h3>
    <p>Enjoy music with clear sound quality.</p>
    <strong>₹999</strong>
    <button>Buy Now</button>
  </article>

  <article class="product">
    <img src="keyboard.jpg" alt="Keyboard">
    <h3>Mechanical Keyboard</h3>
    <p>A responsive keyboard for work and gaming.</p>
    <strong>₹3,499</strong>
    <button>Buy Now</button>
  </article>

  <article class="product">
    <img src="mouse.jpg" alt="Mouse">
    <h3>Wireless Mouse</h3>
    <p>A compact mouse with wireless connectivity.</p>
    <strong>₹799</strong>
    <button>Buy Now</button>
  </article>
</section>
```

Broken CSS

```
.products {
  display: block;
  width: 900px;
  height: 500px;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: stretch;
  align-content: center;
  gap: 20px;
}

.product {
  width: 280px;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: 1px solid #ccc;
}

.product img {
  width: 100%;
  height: 120px;
  object-fit: cover;
}

.product button {
  margin-top: auto;
}
```

Your tasks

1. Display the product cards in multiple rows, with three cards per row at a container width of 900px.
2. Use a 20px gap between cards in both directions.
3. Arrange each card's image, title, description, price, and button vertically.
4. Stretch the cards so their content areas are aligned consistently.
5. Position each Buy Now button at the bottom of its card.
6. Correct the use of `align-content` so the rows are positioned correctly within the fixed-height container.
7. Make the product images fit inside their cards without overflowing.
8. Do not use Grid.

Expected result: Six vertically organized cards displayed in two rows of three, with evenly spaced cards and buttons aligned at the bottom.

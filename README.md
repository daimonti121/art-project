🎨 Art Project — Interactive Website with Modular Architecture and Full Client-Side Logic

🔧 Task:
Develop a multifunctional landing page with numerous interactive elements, forms, a calculator, sliders, and responsive layout. All components were built from scratch using pure JavaScript with a modular structure and a bundler.

🛠 Technologies:
HTML5, CSS3, JavaScript (ES6+), Webpack, OOP, modular architecture, AJAX (Fetch API), RegExp, responsive layout.

📌 Key Features:

🔹 Sliders:
* Main slider on the first screen — automatic vertical transition, no arrows.
* Secondary slider with horizontal animation and navigation arrows.
* Both sliders support auto-looping with a set interval.

🔹 Modals:
* Triggered by buttons (.popup-design, .popup-consultation, .popup-gift).
* Closable via overlay or close icon.
* Auto-triggers:
*  .popup-consultation after 60 seconds of inactivity.
*  .popup-gift when scrolling to the bottom of the page.

🔹 Forms:
* AJAX submission without page reload (async/await).
* Phone input mask (country code + format).
* Name and comment validation in Russian only.
* Animated transitions and dynamic form content based on status (loading, success, failure).
* Fields clear automatically after submission.

🔹 Cost Calculator:
* Calculates price based on dropdown selections.
* Conditional logic for showing the result (required fields).
* Promo code IWANTPOPART gives a 30% discount.
* Dynamic data updates on change.

🔹 Card Filtering & Interactions:
* Image filtering by category.
* No results — shows a portfolio-no block.
* On hover — replaces image with a variant (postfix -1).

🔹 Accordion:
* Smooth toggle with active state switching.

🔹 Extra Features:
* "Show more styles" button — reveals hidden blocks and disappears.
* "Gift" button — triggers popup and removes the gift from the page.
* Responsive burger menu — closes automatically on screen resize.
* Clean modular structure — reusable components, no duplicate event handlers.

✅ Result:
* An interactive, dynamic website demonstrating DOM manipulation, event handling, UX logic, and business logic.
* Clean architecture: everything built with modules and classes, no code duplication.
* Ready for backend or CMS integration.


// Write your code below:
// 1️⃣ Select the first div and main heading
const firstDiv = document.querySelector("#header");
const mainHeading = document.querySelector("#main-heading");

// 2️⃣ Create a sub-heading (h3) and add text
const subHeading = document.createElement("h3");
subHeading.textContent = "Buy high quality organic fruits online";

// 3️⃣ Make the sub-heading text italic
subHeading.style.fontStyle = "italic";

// 4️⃣ Insert the sub-heading after the main heading
mainHeading.insertAdjacentElement("afterend", subHeading);

// 5️⃣ Select the second div and basket heading
const secondDiv = document.querySelector("div:nth-of-type(2)");
const basketHeading = document.querySelector("#basket-heading");

// 6️⃣ Create a paragraph for "Total fruits: 4"
const fruitTotalPara = document.createElement("p");
fruitTotalPara.textContent = "Total fruits: 4";
fruitTotalPara.id = "fruits-total"; // Set ID to "fruits-total"

// 7️⃣ Insert the paragraph before the unordered list
basketHeading.insertAdjacentElement("afterend", fruitTotalPara);

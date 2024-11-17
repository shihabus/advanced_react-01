const rootElement = document.getElementById("root");

// creating a div using JS
const element = document.createElement("div");

// setting the content
element.textContent = "Hello World!";

// className used to avoid conflict with class in many languages
element.className = "container";

// appending it to the root
rootElement.appendChild(element);

// ============ Shop Item or Ratings Gallery variant: how to get the "data" ================
// If you are doing either the Shop Item or Ratings Gallery variants: 

// If you were using plain JS, you could simply un-comment the line loading one of thse scripts in your html file, and just use the const because it has already been loaded in, like this:
// console.log(data);

// Typescript will (arguably justifiably) not be happy with that way of doing it. Instead, it wants you to formally import the "data" const using module import syntax (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules):
import { data } from "./inventory";
console.log(data);
// Unfortunately, that means you also need to 1) change to `<script type="module" src="js/main.js"></script>` in your html, and, because of CORS restrictions, actually serve your site. (See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#other_differences_between_modules_and_classic_scripts )

// ====================================================================================


// Defining a function. We'll use this one in an eventListener (line 40).
const clickHandler  = (event: PointerEvent) : void => {
	console.log("A click!");
}

// =================== Stuff to do when the page loads ================================
// This function will be run when the page finishes loading, which is good practice to ensure that everything is in-place before you start requesting access to particular elements. This is a good place to put any code that refers to elements defined by the HTML (e.g. making new elements and adding them as children, and/or attaching event listeners).
window.onload = () : void => {
	// You can retrieve existing elements from the document. If the element has an "id", you can get that element using that:
	const mainDiv : HTMLDivElement = document.getElementById("main") as HTMLDivElement;
	const firstButton : HTMLButtonElement = document.getElementById("firstButton") as HTMLButtonElement;

	// You can also make new elements:
	const secondButton : HTMLButtonElement = document.createElement("button");

	// For most elements, you'll want to modify their various attributes. For a button, the innerText will be the text on the button:
	secondButton.innerText = "I'm the second button!";

	// you can also add/remove CSS classes:
	secondButton.classList.add("fancy");

	// When you make a new element, it won't show on the page until you add it to a specific location in the element hierarchy. In this case, I'll add it as a child of the mainDiv. It will be added as the last child of mainDiv, so it will go after the firstButton.
	mainDiv.appendChild(secondButton);

	// Elements can have event listeners, which will listen for Events. Popular ones include "click" and "change" (full list at https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events ). You define a listener with 1) which event to listen for, and 2) a function to run when it happens. The function can be defined in advance, like this (clickHandler was defined at the top of this file):
	firstButton.addEventListener("click", clickHandler);

	// ...or in-place, like this:
	secondButton.addEventListener("click", (event:PointerEvent) => {
		console.log("Wow!")
	});

	// You can load an image like this. First, make a new image element:
	let newImageElement : HTMLImageElement = document.createElement ("img"); 
	// then set its "src" attribute to be the path to an image file.
	newImageElement.src = "img/floof.png" ;

	// In general you *should* set its size with CSS, but you *can* (especially for this assignment) also just set a size attribute:
	newImageElement.width = 300;
	// And again you have to actually put it into the element hierarchy:
	mainDiv.appendChild(newImageElement);

}


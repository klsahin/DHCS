// ============ Shop Item or Ratings Gallery variant: how to get the "data" ================
// If you have un-commented the line loading one of thse scripts in your html file, you can refer to "data" because it has already been loaded in, like this:
console.log(data);

// ====================================================================================
// Defining a function. We'll use this one in an eventListener (line 40).
var clickHandler = function (event) {
    console.log("A click!");
};

// =================== Stuff to do when the page loads ================================
// This function will be run when the page finishes loading, which is good practice to ensure that everything is in-place before you start requesting access to particular elements. This is a good place to put any code that refers to elements defined by the HTML (e.g. making new elements and adding them as children, and/or attaching event listeners).
window.onload = function () {
    // HEADER SECTION
    const header = document.getElementById("main"); // adding the Rate These Colors! header
    
    header.style.width = "275px"; // exactly size of text b/c centering was not working
    header.style.margin = "20px auto"; // adds space between header and color cards
    header.classList.add("fancy"); // add sparkle and cool font

    // this makes sure the title isnt cut off (or pushed up)
    document.body.style.height = "auto";


    // IMAGE LIST SECTION

    // creating list of images/cards - 'list-of-images' is an element in the html file
    const img_list = document.getElementById('list-of-images');

    // flex container row & wrap make this a grid. i changed the flex block in style.css since this seemed to work in the chrome inspector
    img_list.classList.add("flex-container-row");
    img_list.classList.add("wrap");


    // using for each loop to cycle through colors
    data.forEach(item => {
        // CARD SECTION

        // create card aka the background for each color
        const card = document.createElement('div');

        // outline is one of the style.css classes - it gives the cards a border
        card.classList.add('outline');
        
        // stacks all elements (img, label, stars) in a column neatly
        card.style.flexDirection = "column";
        
        card.style.width = "220px";       // define width for each img
        card.style.margin = "10px";       // spaces the cards out with 10px spacing
        card.style.padding = "10px";      // padding all around card block
        card.style.textAlign = "center";  // centered in column

        // create img on top of card
        const img = document.createElement("img");
        // using backslash for variable name 
        img.src = `img/${item.imageName}`;
        img.width = 200;

        // create label for each color
        const label = document.createElement('h3');
        label.textContent = item.name;

        // add the img and label to the card part
        card.appendChild(img);
        card.appendChild(label);


        // RATING SECTION

        // creating text for rating stars (*)
        var stars = document.createElement("p");
        stars.innerText = "not yet rated"; // default value without rating
        card.appendChild(stars);

        // stars were originally appearing in a column, so i created a row element for the *
        var starRow = document.createElement("div");
        // this 'flex-container-row' is the style.css class that assigns this to be horizontal
        starRow.classList.add("flex-container-row");
        starRow.style.display = "flex"; // this makes it horizontal !
        starRow.style.justifyContent = "flex-start"; // left aligned

        // with the 'flex-container-row', all the rows were very large so this auto style seems to help
        // auto calculated the necessary height based on the element's content
        starRow.style.height = "auto"; 

        // loop for 5 star buttons
        for (let i = 1; i <= 5; i++){
            const star_btn = document.createElement('button');
            star_btn.textContent = " * ";

            star_btn.style.marginRight = "5px"; // add a little space btwn * boxes

            // when user clicks on a button, the text will change to show how many stars it is
            // using 'i' because we want the text to be based on the loop variable (which star it is)
            star_btn.addEventListener("click", function(){
                stars.innerHTML = "rating: " + i + " stars";
                console.log(item.name + " clicked");
            });
            starRow.append(star_btn);
        }
        card.appendChild(starRow)

        // add card to html
        img_list.appendChild(card);
    })

};
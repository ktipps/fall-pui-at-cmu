//FUNCTION DESCRIPTION: Loading any page on this website triggers this function to update the cart item count next to the cart logo. 
//It tests if an item is set up in local storage, and if it isn't it sets up the count key at zero. If it exists, it targets the html and changes it to reflect count 
//Gets the value of the cart count
function pageLoad() {
	if (!localStorage.getItem("cartIconCount")) { //check if this does not exist in local storage
		localStorage.setItem("cartIconCount", "0"); //If it doesn't exist, create a local storage item with a starting value of 0
	}
	document.getElementById("cartItemCount").innerHTML=localStorage.getItem("cartIconCount"); //Target this ID, change the HTML to be the local storage item
}
//FUNCTION DESCRIPTION: This function triggers multiple page load functions for pages that need them (i.e. shopping_cart.html)
function completeCartPageLoad() {
  pageLoad(); 
  cartItemPageLoad();
}

// FUNCTION DESCRIPTION: Clicking on the details submit button triggers this function, which triggers two other functions (one to increase logo count and another to store and create cart items)
function detailsButtonClick() {
  increaseCartItemCount(); 
  capturingUserSelections(); 
}

//FUNCTION DESCRIPTION: This function establishes an varitable to hold the cart count for the icon, gets the local storage object and puts it in that varitable, and makes it workable as a number
//And adds one to the varitable every time the function is triggered (i.e. when the button is clicked)
//Then shoots it back up to local storage when it's been added to 

//Ciitation: https://stackoverflow.com/questions/22402777/html-javascript-button-click-counter;
//Citation: Clara Cook, Sidra, and Sohail Bagheri talked through pseudo code with me for this.

function increaseCartItemCount() {
	let cartIconCount = Number(localStorage.getItem("cartIconCount"));  //initializing a variable for cartIconCount to store //retrieve local storage item and have variable take on that value
	cartIconCount += 1; // add one number when clicked
	localStorage.setItem("cartIconCount", cartIconCount); //then set that back into local storage
}

//FUNCTION DESCRIPTION: This function establishes an array to hold cart items, tests if that array exists or not, then creates a local storage item for that array if it is new
//It the array exists, it pulls down the local storage item, makes it the right time to work, and then appends the array with the new cart values selected

function capturingUserSelections() { //onclick on product-browsing page performs this function
  let cartItemsArray = []; //  Establish an array -> [] (bucket to put different cart items)
  if (!cartItemsArray) {  //if doesn't exist, then 
    localStorage.setItem("cartItemsList", JSON.stringify([])); //  establish - localStorage.setItem("array name", JSON.stringify([]));
  }
  else { //But if it exists, then 
    localStorage.getItem("cartItemsList"); ////You have to pull out the local storage item to add the new cart item to it -- localStorage.getItem("array name"); 
    JSON.parse(localStorage.getItem("cartItemsList"));//Make it workable with types because local storage only works with strings, but arrays aren't string types always,   JSON.parse(localStorage.getItem("array name")); 
    let newCartItem = {"glazeInput": document.getElementById("glazeType").value, "bunCountInput": document.getElementById("rollQuantity").value}; //Establish a varitable to hold all of your subvariables of bun count and values;  let newCart = {"glazeInput", document.getElementById("glazeType").value, do it the same for the next input};
    cartItemsArray.push(newCartItem); //Append that new varitable to the array (which is the big bucket of all the cart items);
    localStorage.setItem("cartItemsList", JSON.stringify(cartItemsArray)); //localStorage.setItem("array name", JSON.stringify(literal array variable name here));
  }
}

//FUNCTION DESCRIPTION: This function is performed when shopping_cart.html loads, and it renders the cart items
//Pro tip: practice in html and then copy that format into the stuff on line 59, and that way your ids targetted in your CSS will correlate to input)
function cartItemPageLoad() { // There would have to be onload function triggered when the page loads 
  //localStorage.getItem("cartItemsList"); //getting the key with the array from local storage; localStorage.getItem("array name"); 
  let cartItemsArray = JSON.parse(localStorage.getItem("cartItemsList"));
  console.log(cartItemsArray); //make that array workable and restored to original type using JSON as the translator;JSON.parse(localStorage.getItem("array name key"); 
  for (let currentcartitem of cartItemsArray) { // Loop through the length of the array (syntax? -> arrayname.length?) and display each array item (i.e. the cart item), maybe for / of loops -> might be a good approach 
    let itemDisplay = document.getElementById("parentCartItemDiv");
    console.log(itemDisplay); //Intializing a varitable to store the parent div to hold all cart items that I'm targeting in my HTML; Displaying each item -> let itemDisplay = document.getElementById("parent div element");
    itemDisplay.insertAdjacentHTML("beforeend", `<div <p id="test">test</p> ${currentcartitem.glazeInput} </div>`); //CHECK // itemDisplay.insertAdjacentHTML("beforeend", `<div> <p id="test">${currentcartitem.Keyforthatarrayitemthatwepreviouslyestablished}<p> <p>${currentcartitem.glazeInput}</p> <p>${currentcartitem.bunCountInput</p>} //have all of the stuff that you want to appear in that div in here; puts all the id and classes in here that you target with CSS </div>`);
  }
}

//FUNCTION DESCRIPTION: The purpose of this function is to remove unwanted items from the shopping cart. 
//It's an on click function (correlating to the remove p tag in the HTML on shopping_cart.html) deletes the actual div on the page (document.getElementById('').remove();)
function removeCartItem() {
document.getElementById("").remove(); //actually deleting the cart item content from the page by deleting its div; the ID for this div would be the same as the index value in the array
localStorage.getItem("cartItemsList"); //pulling down the local storage item 
JSON.parse(localStorage.getItem("cartItemsList")); // Parse the local storage key to make it workable
cartItemsArray.splice //CHECK//Remove the index value of the array item that you no longer want;   -array.splice that index in that array (removing the value)
JSON.stringify("cartItemsArrray") //CHECK this is the right varitable to be targetting  //stringify it 
localStorage.setItem("cartItemsArray", JSON.stringify([])); //CHECK //Pull it back up to local storage

}

//GENERAL NOTES//

/*I can create this thing and it can establish multiple keys to hold values under one variable let name = {"Key": "0", "Key2": "0"};
json.stringfy - translates into a string 
json.parse - get the original type back 

*/

//DRAFTS THAT WERE NOT ULTIMATELY USED // 

/* Pseudocode draft 1: 
on click of the button on the product-detail-copy page at the bottom of the form
1.) Select a glaze -> that selection value is added to the cartItem object
2.) Select a quantity -> that selection value is added to the cartItem object
on click of the button on the product-detail-copy page at the bottom of the form
3.) Store that object in local storage

Draft 1 of product-detail on click function: 
function capturingUserSelections() {
    let glazeInput = document.getElementById("glazeType").value; // intializing a variable for glaze input, setting that variable to the value of the selection for glaze
    localStorage.setItem("glazeType", glazeInput); //Creating new local storage object - key is glaze type and value is the value of variable meant to capture the user's selection
    let bunCountInput = document.getElementById("rollQuantity").value; 
    Number(bunCountInput);
    localStorage.setItem("rollQuantity", bunCountInput);
}

Draft 2 - experimenting with a constructor: 
function CartItem(glazeInput, bunCountInput, flavorInput) {
  this.glazeInput = glazeInput; 
  this.bunCountInput = bunCountInput; 
  this. flavorInput = flavorInput; 
} 

Draft 1 - Product Details Page Dropbox Selections
Citation: Javascript & JQuery Interactive Front End Development, Jon Duckett, pgs 584 - 587

/*(function() {
  var glazeType = document.getElementById('glazeType'); // Selecting Glaze Type box
  var rollQuantity = document.getElementById('rollQuantity'); //Selecting the Roll Quantity Box
}

addEvent(glazeType, 'change', function() {
  if(this.value === 'choose') {
    model.innerHTML = '<option>Please choose a glaze first</option>'; 
    return;
  }
  var rollQuantity = getrollQuantity(this.value); 

  var options = '<option>Please choose a quantity</option>';
  for (var key in rollQuantity) {
    options += '<option value="' + key + '">' + rollQuantity[key] + '</option>'; 
  }
  model.innerHTML = options;
});

*/
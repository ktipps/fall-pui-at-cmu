
//Product Details Page Dropbox Selections
//Citation: Javascript & JQuery Interactive Front End Development, Jon Duckett, pgs 584 - 587

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
});*/

// Updating the page with the new cart information, the function called when the body of the page loads
//Gets the value of the cart count
function pageLoad() {
	if (!localStorage.getItem("cartIconCount")) { //check if this does not exist in local storage
		localStorage.setItem("cartIconCount", "0"); //If it doesn't exist, create a local storage item with a starting value of 0
	}
	document.getElementById("cartItemCount").innerHTML=localStorage.getItem("cartIconCount"); //Target this ID, change the HTML to be the local storage item
}

// Changing the Cart Value
//Ciitation: https://stackoverflow.com/questions/22402777/html-javascript-button-click-counter;
//Citation: Clara Cook, Sidra, and Sohail Bagheri talked through pseudo code with me for this.

function detailsButtonClick() {
  increaseCartItemCount(); 
  capturingUserSelections(); 
}

function increaseCartItemCount() {
	let cartIconCount = Number(localStorage.getItem("cartIconCount"));  //initializing a variable for cartIconCount to store //retrieve local storage item and have variable take on that value
	cartIconCount += 1; // add one number when clicked
	localStorage.setItem("cartIconCount", cartIconCount); //then set that back into local storage
}

/*function capturingUserSelections() {
    let glazeInput = document.getElementById("glazeType").value; // intializing a variable for glaze input, setting that variable to the value of the selection for glaze
    localStorage.setItem("glazeType", glazeInput.value); //Creating new local storage object - key is glaze type and value is the value of variable meant to capture the user's selection
    let bunCountInput = document.getElementById("rollQuantity").value; 
    Number(bunCountInput);
    localStorage.setItem("rollQuantity", glazeInput.value);
}
*/ 

function CartItem(glazeInput, bunCountInput, flavorInput) {
  this.glazeInput = glazeInput; 
  this.bunCountInput = bunCountInput; 
  this. flavorInput = flavorInput; 
}

/* on click of the button 
1.) creating new cart item 
/* 
1.) Select a glaze -> that selection value is added to the cartItem object
2.) Select a quantity -> that selection value is added to the cartItem object
3.) Store that object in local storage 


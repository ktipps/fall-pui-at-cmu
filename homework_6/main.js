
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

function capturingUserSelections() {
    let glazeInput = document.getElementById("glazeType").value; // intializing a variable for glaze input, setting that variable to the value of the selection for glaze
    localStorage.setItem("glazeType", glazeInput); //Creating new local storage object - key is glaze type and value is the value of variable meant to capture the user's selection
    let bunCountInput = document.getElementById("rollQuantity").value; 
    Number(bunCountInput);
    localStorage.setItem("rollQuantity", bunCountInput);
}

/*function CartItem(glazeInput, bunCountInput, flavorInput) {
  this.glazeInput = glazeInput; 
  this.bunCountInput = bunCountInput; 
  this. flavorInput = flavorInput; 
}

/* on click of the button on the product-detail-copy page at the bottom of the form

/* 
1.) Select a glaze -> that selection value is added to the cartItem object
2.) Select a quantity -> that selection value is added to the cartItem object
on click of the button on the product-detail-copy page at the bottom of the form
3.) Store that object in local storage 
*/

/* 
let name = {"Key": "0", "Key2": "0"};


onclick -> Function () {
  Establish an array -> [] (bucket to put different cart items)

  if doesn't exist, then 
  establish - localStorage.setItem("array name", JSON.stringify([]));

  But if it exists, then                //You have to pull out the local storage item to add the new cart item to it
  pull it back down - localStorage.getItem("array name"); 
   JSON.parse(localStorage.getItem("array name")); //Make it workable with types 
  let newCart = {"glazeInput", document.getElementById("glazeType").value, do it the same for the next input};
  Append that new varitable to the array (which is the big bucket, it is the cart item)
  localStorage.setItem("array name", JSON.stringify(literal array variable name here));
}

--Cart page --
1.) There would have to be onload function triggered when the page loads 
2.) That onload function would have to 
  - localStorage.getItem("array name"); 
  -JSON.parse(localStorage.getItem("array name key"); 
  Loop through the length of the array (syntax -> arrayname.length) and display each array item (i.e. the cart item)
    *Google for / of loops -> might be a good approach 
    Displaying each item -> let itemDisplay = document.getElementById("parent div element");
    itemDisplay.insertAdjacentHTML("beforeend", `<div> <p id="test">${currentcartitem.Keyforthatarrayitemthatwepreviouslyestablished}<p> <p>${currentcartitem.glazeInput}</p> <p>${currentcartitem.bunCountInput</p>} //have all of the stuff that you want to appear in that div in here; puts all the id and classes in here that you target with CSS </div>`);
   -Pro tip: practice in html and then copy that format into the stuff on line 97, and that way your ids targetted in your CSS will correlate to input);

--Cart page removing item --
1.) on click function (correlating to the remove tag) deletes the actual div on the page (document.getElementById('').remove();)
  -In the same function, target the local storage array and remove 
  -Div that surrounds all of that item's info - have that have an ID, which is the same as the index value in the array 
  -Pull it down
  -parse it 
  -array.splice that index in that array (removing the value)
  -stringify it 
  -Pull it back up to local storage 


json.stringfy - translates into a string 
json.parse - get the original type back 

*/
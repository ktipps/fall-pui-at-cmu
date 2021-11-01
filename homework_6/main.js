
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
		localStorage.setItem("cartIconCount", "0");
	}
	document.getElementById("cartItemCount").innerHTML=localStorage.getItem("cartIconCount");
}

// Changing the Cart Value
//Ciitation: https://stackoverflow.com/questions/22402777/html-javascript-button-click-counter;
//Citation: Clara Cook, Sidra, and Sohail Bagheri talked through pseudo code with me for this.
function increaseCartItemCount() {
	let cartIconCount = Number(localStorage.getItem("cartIconCount")); 
	cartIconCount += 1; 
	localStorage.setItem("cartIconCount", cartIconCount);
}

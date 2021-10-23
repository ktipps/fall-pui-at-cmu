
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

// Changing the Cart Value

function upCounter() {
	document.getElementById("testing").innerHTML = "2";
}

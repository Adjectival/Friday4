function Pizza(toppings,cheeses,crusts,sizes) {
  this.Toppings
  this.Cheeses
  this.Crusts
  this.Sizes
}

Sizes
'Personal (8")'
'Two-for (12")'
'Regular (16")'
'Family (24")'

// Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.
Pizza.prototype.cost = function() {

}

// frontend logic
$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();

  });
});

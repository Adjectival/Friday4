// backend logic
function Pizza(sizes) {
  this.Toppings = [];
  this.Sizes = sizes;
}

function Toppings(bacon,pepperoni,chicken,pineapple,mushrooms,onions) {
  this.bacon = bacon;
  this.pepperoni = pepperoni;
  this.chicken = chicken;
  this.pineapple = pineapple;
  this.mushrooms = mushrooms;
  this.onions = onions;
}

Toppings.prototype.addToppings = function() {
  return
  this.bacon + ", " + this.pepperoni + ", " + this.chicken + ", " + this.pineapple + ", " +   this.mushrooms + ", " + this.onions;
}
// Sizes
// 'Personal (8")'
// 'Two-for (12")'
// 'Regular (16")'
// 'Family (24")'

Pizza.prototype.cost = function() {

}

// frontend logic
$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();

    if(document.getElementById('bacon').checked) {
      console.log("bacon");
    }
    if(document.getElementById('pepperoni').checked) {
      console.log("pepperoni");
    }
    if(document.getElementById('chicken').checked) {
      console.log("chicken");
    }
    if(document.getElementById('pineapple').checked) {
      console.log("pineapple");
    }
    if(document.getElementById('mushrooms').checked) {
      console.log("mushrooms");
    }
    if(document.getElementById('onions').checked) {
      console.log("onions");
    }


  });
});

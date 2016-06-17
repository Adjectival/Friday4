// backend logic
function Pizza(sizes,toppings) {
  this.sizes = sizes;
  this.toppings = toppings;
}
function Topping(bacon,pepperoni,chicken,pineapple,mushrooms,onions) {
  this.bacon = bacon;
  this.pepperoni = pepperoni;
  this.chicken = chicken;
  this.pineapple = pineapple;
  this.mushrooms = mushrooms;
  this.onions = onions;
}

Pizza.prototype.makePizza = function() {
  return "you ordered a " + this.sizes + " pizza with " + this.toppings;
}
Topping.prototype.addTopping = function() {
  return
  this.bacon + ", " + this.pepperoni + ", " + this.chicken + ", " + this.pineapple + ", " +   this.mushrooms + ", " + this.onions;
}
Pizza.prototype.cost = function() {

}

function resetForm() {
    $('input:checkbox').removeAttr('checked');
}

// frontend logic
$(document).ready(function() {

  $('#no-topping').click(function() {
    resetForm();
  });

  $('form').submit(function(event) {
    event.preventDefault();

    var chooseSize = $('#sizes').val();

    var allToppings = [];
    $.each($('input[name="topping"]:checked'),function() {
        allToppings.push($(this).val());
    });
    allToppings.join(', ');

    var newPizza = new Pizza(chooseSize, allToppings);

    $('ol#pizzaList').html('<li><span class="orderUp">' + newPizza.makePizza() + '</span></li>');
  });
});

// backend logic
function Pizza(sizes,toppings) {
  this.sizes = sizes;
  this.toppings = [];
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
  return "you ordered a " + this.sizes + " " + this.toppings + " pizza";
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
    console.log("Choices: " + allToppings.join(", "));

    var newPizza = new Pizza(chooseSize, allToppings);
// --refactored with above--
    // $('#toppings').each(function() {
    //   var chooseBacon = $(this).find('input#bacon:checked').val();
    //   var choosePepperoni = $(this).find('input#pepperoni:checked').val();
    //   var chooseChicken = $(this).find('input#chicken:checked').val();
    //   var choosePineapple = $(this).find('input#pineapple:checked').val();
    //   var chooseMushrooms = $(this).find('input#mushrooms:checked').val();
    //   var chooseOnions = $(this).find('input#onions:checked').val();
    //   var newTopping = new Toppings(chooseBacon,choosePepperoni,chooseChicken,choosePineapple,chooseMushrooms,chooseOnions);
    //   newPizza.toppings.push(newTopping);
    // });
    debugger;

    $('ol#pizzaList').html('<li><span class="orderUp">' + newPizza.makePizza() + '</span></li>');
  });
});

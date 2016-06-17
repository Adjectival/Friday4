// backend logic
function Pizza(sizes) {
  this.toppings = [];
  this.sizes = sizes;
}
Pizza.prototype.makePizza = function() {
  return "So you want a " + this.sizes + " " + this.toppings + " pizza?";
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

  $('form').submit(function(event){
    event.preventDefault();
    var newPizza = new Pizza(sizes);
    $('#toppings').each(function() {
      var chooseBacon = $(this).find('input#bacon').val();
      var choosePepperoni = $(this).find('input#pepperoni').val();
      var chooseChicken = $(this).find('input#chicken').val();
      var choosePineapple = $(this).find('input#pineapple').val();
      var chooseMushrooms = $(this).find('input#mushrooms').val();
      var chooseOnions = $(this).find('input#onions').val();
      var newToppings = new Toppings(chooseBacon,choosePepperoni,chooseChicken,choosePineapple,chooseMushrooms,chooseOnions);
      newPizza.toppings.push(newToppings);
    });

    var chooseSize = $('#sizes option:selected').val();

    $("ol#pizzaList").html("<li><span class='orderUp'>" + newPizza.makePizza() + "</span></li>");
  });
});

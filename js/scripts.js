// backend logic
function Pizza(sizes,toppings, price) {
  this.sizes = sizes;
  this.toppings = toppings;
}

Pizza.prototype.makePizza = function() {
  if (this.sizes==="Family-size"){
    price = 16;
  } else if (this.sizes==="Large") {
    price = 12;
  } else if (this.sizes==="Regular") {
    price = 10;
  } else {
    price = 7;
  }
  if (this.toppings.includes("bacon")) {
    price = price+2;
  } else if (this.toppings.includes("pepperoni")) {
    price = price+1.5;
  } else if (this.toppings.includes("chicken")) {
    price = price+1.5;
  } else if (this.toppings.includes("pineapple")) {
    price = price+2;
  } else if (this.toppings.includes("mushrooms")) {
    price = price+1;
  } else if (this.toppings.includes("onions")) {
    price = price+1;
  }
  return price;
}

function resetForm() {
  document.getElementById("buypizza").reset();
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
    allToppings.join(' , ');

    var newPizza = new Pizza(chooseSize, allToppings);
    $('ul#pizzaList').html('<li><span class="orderUp">Your total comes to $' + newPizza.makePizza() + ' for the ' + newPizza.sizes + ' pizza with ' + newPizza.toppings + '</span></li>');
  });
});

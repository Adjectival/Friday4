// backend logic
function Pizza(sizes,toppings) {
  this.sizes = sizes;
  this.toppings = toppings;
}

Pizza.prototype.makePizza = function() {
  return "you ordered a " + this.sizes + " pizza with " + this.toppings;
}

var cost = 0;
Pizza.prototype.price = function() {
    if (this.sizes==="Family-size"){
    cost=16;
    } else if (this.sizes==="Large") {
    cost=12;
    } else if (this.sizes==="Regular") {
    cost=10;
    } else {
    cost=7;
    }
  return cost;
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
    $('ol#pizzaList').html('<li><span class="orderUp">' + newPizza.makePizza() + '</span></li>');
    $('#total').html('$' + newPizza.price());
  });
});

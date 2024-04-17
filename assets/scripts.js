    var call = document.getElementById("modal-call");
    var cart = document.getElementById("modal-cart");
    var btn = document.getElementById("button-footer");
    var btn2 = document.getElementById("button-header");
    var btn3 = document.getElementById("button-cart");
    var div = document.getElementsByClassName("call-close")[0];
    var closecart = document.getElementsByClassName("cart-close")[0];

    btn.onclick = function() {
        call.style.display = "block";
    };

    btn2.onclick = function() {
     call.style.display = "block";
    };

    btn3.onclick = function() {
        cart.style.display = "block";
    };
    div.onclick = function() {
        call.style.display = "none";
    };
    closecart.onclick = function() {
        cart.style.display = "none";
    };
    window.onclick = function(event) {
        if (event.target == call) {
            call.style.display = "none";
        }
        if (event.target == cart) {
            cart.style.display = "none";
        }
    };



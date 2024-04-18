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

    var c = document.querySelectorAll(".menu-horizont__open");
    c && c.forEach((function(e) {
            e.addEventListener("click", (function() {

                    var t = e.closest(".menu-horizont__item").querySelector(".menu-horizont__child");

                    t &&  (t.classList.toggle("dropdown-menu_active")
                        )
                }
            ))
        }
    ));
    var c2 = document.querySelectorAll(".menu-horizont__open-level2");
    c2 && c2.forEach((function(e) {
            e.addEventListener("click", (function() {
                   var t = e.closest(".menu-horizont__item").querySelector(".child-level2");
                    var p=e.closest(".dropdown-menu_active");
                    t &&  p && (t.classList.toggle("dropdown-menu_active"), p.classList.toggle("menu-horizont__child-border")

                    )
                }
            ))
        }
    ));
    var c3 = document.querySelectorAll(".menu-horizont__open-level3");
    c3 && c3.forEach((function(e) {
            e.addEventListener("click", (function() {
                    var t = e.closest(".menu-horizont__item").querySelector(".child-level3");
                    var p=e.closest(".dropdown-menu_active");
                    t && p && (t.classList.toggle("dropdown-menu_active") , p.classList.toggle("border-round")
                    )
                }
            ))
        }
    ));

    var m = document.querySelectorAll(".menu-column__open-m");
    m && m.forEach((function(e) {
            e.addEventListener("click", (function() {

                    var t = e.closest(".menu-column__item").querySelector(".menu-column__child");
                    var p=e.closest(".menu-column__item");
                    t &&  p &&(t.classList.toggle("dropdown-menu_active"),p.classList.toggle("menu-column__item-open")
                    )
                }
            ))
        }
    ));
    var m2 = document.querySelectorAll(".menu-column__open-level2");
    m2 && m2.forEach((function(e) {
            e.addEventListener("click", (function() {
                    var t = e.closest(".menu-column__item").querySelector(".child-level2");
                    var p=e.closest(".dropdown-menu_active");
                    var l=e.closest(".dropdown-menu__item");
                    t &&  p && l &&(t.classList.toggle("dropdown-menu_active"), p.classList.toggle("menu-column__child-border"),l.classList.toggle("dropdown-menu__item-border")

                    )
                }
            ))
        }
    ));
    var m3 = document.querySelectorAll(".menu-column__open-level3");
    m3 && m3.forEach((function(e) {
            e.addEventListener("click", (function() {
                    var t = e.closest(".menu-column__item").querySelector(".child-level3");
                    var p=e.closest(".dropdown-menu_active");
                    var l=e.closest(".dropdown-menu__item");
                    t && p && l &&(t.classList.toggle("dropdown-menu_active") , p.classList.toggle("border-round"),l.classList.toggle("dropdown-menu__item-border")
                    )
                }
            ))
        }
    ));

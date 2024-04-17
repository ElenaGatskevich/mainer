 var modal = document.getElementById("madal-zvonok");


    var btn = document.getElementById("button-footer");
    var btn2 = document.getElementById("button-header");

    var div = document.getElementsByClassName("zvonok-close")[0];


    btn.onclick = function() {
        modal.style.display = "block";
    };

 btn2.onclick = function() {
     modal.style.display = "block";
 };
    div.onclick = function() {
        modal.style.display = "none";
    };


    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };



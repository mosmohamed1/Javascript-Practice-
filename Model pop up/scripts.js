var model = document.getElementById("the_model");

var modelImg= document.getElementById("img");

var modelCaption = document.getElementById("caption");

var img = document.getElementById("the_img");

img.onclick = function () {

    model.style.display = "block";
    modelImg.src=this.src;
    modelCaption.innerHTML = this.alt;
}


var close= document.getElementsByClassName("close")[0];

close.onclick = function () {

    model.style.display = "none";
}

document.onkeydown = function (ev) {
    if ( ev.keyCode == "27" ) {
        model.style.display = "none";

    }
}
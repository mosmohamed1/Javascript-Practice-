
var i = 0;
var slidImage = ["img/1.jpg","img/3.jpg","img/4.jpg"];

var slidShow = function() {


    document.slidshow.src = slidImage[i];

    if ( i < slidImage.length - 1 ) {

        i++;
    }
    else 
    {
        i=0;
    }

    setTimeout ("slidShow()",2000);
}

slidShow()
var index = 0;
var images = document.getElementsByClassName("image");
var dots = document.getElementsByClassName("dot");
var prevBtn = document.getElementById("prev");
var nextBtn = document.getElementById("next");

images[index].style.display = "block";
dots[index].className += " active";

// 
function show_image(i){
    index += i;

    for(i = 0; i < images.length; i++){
        images[i].style.display = "none";
    }
    
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    if(index > images.length-1){
        index = 0;
    }
    
    if(index < 0){
        index = images.length-1;
    }

    images[index].style.display = "block";
    dots[index].className += " active";
}

var showPreImg = () => show_image(-1);
var showNextImg = () => show_image(1);


for(var i = 0; i < dots.length; i++){
    dots[i].onclick = function(){
        for(i = 0; i < images.length; i++){
            images[i].style.display = "none";
        }
        
        for(i = 0; i < dots.length; i++){
            dots[i].className = dots[i].className.replace(" active", "");
        }

        var dotIndex = parseInt(this.id.slice(3));

        images[dotIndex].style.display = "block";
        dots[dotIndex].className += " active";
    }
}

prevBtn.addEventListener("click", showPreImg);

nextBtn.addEventListener("click", showNextImg);


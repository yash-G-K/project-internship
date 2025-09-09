let ver1 = true;
let ver2 = true;
let ver3 = true;
function changeImg(value) {

    if(value==1){
        const bulbElement = document.getElementById("img-like-1");
        ver1 ? (bulbElement.src = "./images/like.png") : (bulbElement.src = "./images/like-off.png");
        ver1 = !ver1
    }
    else if(value==2){
        const bulbElement = document.getElementById("img-like-2");
        ver2 ? (bulbElement.src = "./images/like.png") : (bulbElement.src = "./images/like-off.png");
        ver2 = !ver2
    }
    else if(value==3){
        const bulbElement = document.getElementById("img-like-3");
        ver3 ? (bulbElement.src = "./images/like.png") : (bulbElement.src = "./images/like-off.png");
        ver3 = !ver3
    }
}
let texts = document.getElementsByTagName('p');
for(let i = 0; i < texts.length; i++){
    
}

let images = document.getElementsByTagName('img');
for(let i = 0; i < images.length; i++){
    // Tint the image
    images[i].style.filter = 'hue-rotate(5deg)';
}

var scrollDirection = 1;
let timer = setInterval(function(){
    window.scrollBy(0, scrollDirection * 2);

    if(window.pageYOffset === 0){
        scrollDirection = 1;
    }
    else if(window.pageYOffset === window.innerHeight){
        scrollDirection = -1;
    }
} , 60000);

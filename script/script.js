
//query selectors for arrows
const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');
const imgCarousel = document.querySelector('.carousel-img-container img');
const carouselContainer = document.querySelector('.carousel-img-container')
console.log(imgCarousel);

//need to create CSS transitions class

//create counter
let i = 0;

//function increments of decreases counter based on left or right arrow click, returns altered counter
function cycleCarousel(i, direction) {
    if(direction === 'left') {
        return countCheck(--i);
    } else if(direction === 'right') {
        return countCheck(++i);
    }
}

//checks the counter, if above 4 returns 0 to start at beginning, if below 0 returns 4 to go to end of caroseul, otherwise returns counter as is.
function countCheck(i) {
    if(i < 0) {
        return i = 4;
    } else if(i > 4) {
        return i = 0;
    } else {
        return i;
    }
}

//on click of left arrow, change picture
arrowLeft.addEventListener('click', function() {
    i = cycleCarousel(i, 'left');
    imgCarousel.src = `https://picsum.photos/289/289?random=${i}`

    //apply slide class to fade the slides in and out
    imgCarousel.classList.toggle('slide');
    imgCarousel.classList.toggle('slide-2');
    
});


//on click of right arrow, change picture
arrowRight.addEventListener('click', function() {    
    i = cycleCarousel(i, 'right');
    imgCarousel.src = `https://picsum.photos/289/289?random=${i}`

    //apply slide class to fade the slides in and out
    imgCarousel.classList.toggle('slide');
    imgCarousel.classList.toggle('slide-2');

});
 
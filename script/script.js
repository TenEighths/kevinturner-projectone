//Not perfect, but I enjoyed the logic of it

//query selectors for arrows
const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');
const imgCarousel = document.querySelector('.carousel-img-container img');

//create counter
let i = 0;

//function increments or decreases counter based on left or right arrow click, returns altered counter
function cycleCarousel(count, direction) {
    if(direction === 'left') {
        return countCheck(--count);
    } else if(direction === 'right') {
        return countCheck(++count);
    }
}

//checks the counter, if above 4 returns 0 to start at beginning, if below 0 returns 4 to go to end of caroseul, otherwise returns counter as is.
function countCheck(count) {
    if(count < 0) {
        return count = 4;
    } else if(count > 4) {
        return count = 0;
    } else {
        return count;
    }
}

function changePic(count) {
    imgCarousel.src = `https://picsum.photos/289/289?random=${count}`
}

//on click of left arrow, change picture
arrowLeft.addEventListener('click', function() {    
    i = cycleCarousel(i, 'left');
    changePic(i);
    
    //apply slide class to fade the slides in and out
    imgCarousel.classList.toggle('slide');
    imgCarousel.classList.toggle('slide-2');
    
});


//on click of right arrow, change picture
arrowRight.addEventListener('click', function() {    
    i = cycleCarousel(i, 'right');
    changePic(i);

    //apply slide class to fade the slides in and out
    imgCarousel.classList.toggle('slide');
    imgCarousel.classList.toggle('slide-2');

});
 
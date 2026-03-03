let currentSlideIndex = 0;
let slides;
let cycleTimer;

function showRandomSlide(){
    let randomNum = Math.random();

    slides = document.getElementsByClassName("slide");
    let multiplied = randomNum * slides.length;
    currentSlideIndex = Math.floor(multiplied);
    
    slides[currentSlideIndex].classList.add("active");
    slides[currentSlideIndex].style.display = "flex";
}

function changeSlide(direction){

        slides[currentSlideIndex].classList.remove("active");
        slides[currentSlideIndex].style.display = "none";

        currentSlideIndex += direction;

        if(currentSlideIndex >= slides.length){
            currentSlideIndex = 0;
        }
        else if(currentSlideIndex < 0){
            currentSlideIndex = slides.length - 1;
        }

        slides[currentSlideIndex].classList.add("active");
        slides[currentSlideIndex].style.display = "flex";

        resetTimer();
}

function resetTimer(){
    clearInterval(cycleTimer);

    cycleTimer = setInterval(function(){
        changeSlide(1);
    }, 5000);
}

window.addEventListener("load", function(){
    showRandomSlide();
    resetTimer();

    document.querySelector(".next").addEventListener("click", function(){
        changeSlide(1);
    });

    document.querySelector(".prev").addEventListener("click", function(){
        changeSlide(-1);
    });
});
document.querySelectorAll(".carousel").forEach((carousel) => {

    const track = carousel.querySelector(".carousel-track");
    const slides = carousel.querySelectorAll(".carousel-track img");

    const prevBtn = carousel.querySelector(".prev");
    const nextBtn = carousel.querySelector(".next");

    const dots = carousel.querySelectorAll(".dot");

    let current = 0;

    function update() {

        track.style.transform = `translateX(-${current * 100}%)`;

        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === current);
        });

    }

    function nextSlide() {

        current++;

        if(current >= slides.length){

            current = 0;

        }

        update();

    }

    function prevSlide() {

        current--;

        if(current < 0){

            current = slides.length - 1;

        }

        update();

    }

    nextBtn.addEventListener("click", nextSlide);

    prevBtn.addEventListener("click", prevSlide);

    dots.forEach((dot,index)=>{

        dot.addEventListener("click",()=>{

            current = index;

            update();

        });

    });

    // --------------------
    // Swipe
    // --------------------

    let startX = 0;
let startY = 0;

track.addEventListener("touchstart", (e) => {

    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;

});

track.addEventListener("touchend", (e) => {

    const diffX = e.changedTouches[0].clientX - startX;
    const diffY = e.changedTouches[0].clientY - startY;

    // 縦移動の方が大きければ何もしない
    if (Math.abs(diffY) > Math.abs(diffX)) return;

    if (Math.abs(diffX) < 25) return;

    if (diffX < 0) {

        nextSlide();

    } else {

        prevSlide();

    }

});

    window.addEventListener("resize",update);

    update();

});

 <script>

document.querySelectorAll(".carousel").forEach(carousel => {

    const track = carousel.querySelector(".carousel-track");

    const prev = carousel.querySelector(".prev");

    const next = carousel.querySelector(".next");

    prev.addEventListener("click", () => {

        track.scrollBy({

            left: -260,

            behavior: "smooth"

        });

    });

    next.addEventListener("click", () => {

        track.scrollBy({

            left: 260,

            behavior: "smooth"

        });

    });

});

</script>

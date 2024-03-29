document.addEventListener("DOMContentLoaded", function () {
    const images = ["/res/img/macan1.jpg", "/res/img/macan2.jpg", "/res/img/macan3.jpg", "/res/img/macan4.jpg", "/res/img/macan5.jpg"];
    let currentIndex = 0;

    function changeImage(direction) {
        currentIndex += direction;

        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        } else if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        const currentImage = document.getElementById("current-image");
        currentImage.src = images[currentIndex];
    }

    window.addEventListener("load", function () {
        const currentImage = document.getElementById("current-image");
        currentImage.src = images[currentIndex];
    });

    document.querySelector(".left").addEventListener("click", function () {
        changeImage(-1);
    });

    document.querySelector(".right").addEventListener("click", function () {
        changeImage(1);
    });
});
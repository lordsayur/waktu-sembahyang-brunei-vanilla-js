$(document).ready(function () {
    let subuh = "05:00";
    let zuhur = "12:00";
    let asar = "03:00";
    let maghrib = "04:00";
    let isya = "07:00";

    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });
    $('#subuh').text("subuh : " + subuh + " am");
    $('#zuhur').text("zuhur : " + zuhur + " pm");
    $('#asar').text("asar : " + asar + " pm");
    $('#maghrib').text("maghrib : " + maghrib + " pm");
    $('#isya').text("isya : " + isya + " pm");
});

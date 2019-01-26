$(document).ready(function () {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = new Date();
    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();

    let subuh = waktu[day - 1].Subuh;
    let syuruk = waktu[day - 1].Syuruk;
    let zuhur = waktu[day - 1].Zuhur;
    let asar = waktu[day - 1].Asar;
    let maghrib = waktu[day - 1].Maghrib;
    let isya = waktu[day - 1].Isya;

    let subuh1 = waktu[day].Subuh;
    let zuhur1 = waktu[day].Zuhur;
    let asar1 = waktu[day].Asar;
    let maghrib1 = waktu[day].Maghrib;
    let isya1 = waktu[day].Isya;

    highlight();

    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });
    $('#date').text(waktu[day - 1].Tarikh);
    $('#subuh').text("subuh : " + subuh + " am");
    $('#zuhur').text("zuhur : " + zuhur + " pm");
    $('#asar').text("asar : " + asar + " pm");
    $('#maghrib').text("maghrib : " + maghrib + " pm");
    $('#isya').text("isya : " + isya + " pm");

    $('#date1').text(waktu[day].Tarikh);
    $('#subuh1').text("subuh : " + subuh1 + " am");
    $('#zuhur1').text("zuhur : " + zuhur1 + " pm");
    $('#asar1').text("asar : " + asar1 + " pm");
    $('#maghrib1').text("maghrib : " + maghrib1 + " pm");
    $('#isya1').text("isya : " + isya1 + " pm");

    function highlight() {
        let currentTime = date.getHours() + date.getMinutes() / 100;
        console.log(syuruk);
        console.log(currentTime);
        console.log
        if (subuh > currentTime) {
            $('#isya').addClass("active pulse green white-text");
            $('#maghrib').removeClass("active pulse green white-text");
            console.log("Isya!!!");
        }
        else if (syuruk >= currentTime) {
            $('#subuh').addClass("active pulse green white-text");
            $('#isya').removeClass("active pulse green white-text");
            console.log("Subuh!!!");
        }
        else if (zuhur >= currentTime) {
            $('#zuhur').addClass("active pulse orange white-text");
            $('#subuh').removeClass("active pulse green white-text");
            console.log("Kn Zuhur!!!");
        }
        else if (asar + 12.0 >= currentTime) {
            $('#zuhur').addClass("active pulse green white-text");
            $('#zuhur').removeClass("orange");
            console.log("Zuhur!!!");
        }
        else if (maghrib + 12.0 >= currentTime) {
            $('#asar').addClass("active pulse green white-text");
            $('#zuhur').removeClass("active pulse green white-text");
            console.log("Asar!!!");
        }
        else if (isya + 12.0 >= currentTime) {
            $('#maghrib').addClass("active pulse green white-text");
            $('#asar').removeClass("active pulse green white-text");
            console.log("Maghrib!!!");
        }
        else if (12.0 + 12.0 >= currentTime) {
            $('#isya').addClass("active pulse green white-text");
            $('#maghrib').removeClass("active pulse green white-text");
            console.log("Isya!!!");
        }
        else
        {
            console.log("hmmmm...");
        }
    }
});
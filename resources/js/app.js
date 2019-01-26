$(document).ready(function () {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let date = new Date();
    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();

    let subuh = waktu[day - 1].Subuh;
    let zuhur = waktu[day - 1].Zuhur;
    let asar = waktu[day - 1].Asar;
    let maghrib = waktu[day - 1].Maghrib;
    let isya = waktu[day - 1].Isya;

    let subuh1 = waktu[day].Subuh;
    let zuhur1 = waktu[day].Zuhur;
    let asar1 = waktu[day].Asar;
    let maghrib1 = waktu[day].Maghrib;
    let isya1 = waktu[day].Isya;

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
});

$(document).ready(function () {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = new Date();
    let day = date.getDate();
    let monthNum = date.getMonth();
    let month = months[monthNum];
    let year = date.getFullYear();

    let subuh = waktu[monthNum][day - 1].Subuh;
    let syuruk = waktu[monthNum][day - 1].Syuruk;
    let zuhur = waktu[monthNum][day - 1].Zuhur;
    let asar = waktu[monthNum][day - 1].Asar;
    let maghrib = waktu[monthNum][day - 1].Maghrib;
    let isya = waktu[monthNum][day - 1].Isya;

    let subuh1 = waktu[monthNum][day].Subuh;
    let zuhur1 = waktu[monthNum][day].Zuhur;
    let asar1 = waktu[monthNum][day].Asar;
    let maghrib1 = waktu[monthNum][day].Maghrib;
    let isya1 = waktu[monthNum][day].Isya;

    let subuh2 = waktu[monthNum][day + 1].Subuh;
    let zuhur2 = waktu[monthNum][day + 1].Zuhur;
    let asar2 = waktu[monthNum][day + 1].Asar;
    let maghrib2 = waktu[monthNum][day + 1].Maghrib;
    let isya2 = waktu[monthNum][day + 1].Isya;

    highlight();
    setInterval(function(){ highlight(); }, 1000);

    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });
    $('#date-m').text(day + " " + month + " " + year);
    $('#date-h').text(waktu[monthNum][day - 1].Tarikh);
    $('#subuh').text("subuh : " + subuh + " am");
    $('#zuhur').text("zuhur : " + zuhur + " pm");
    $('#asar').text("asar : " + asar + " pm");
    $('#maghrib').text("maghrib : " + maghrib + " pm");
    $('#isya').text("isya : " + isya + " pm");

    $('#date1-m').text(day + 1 + " " + month + " " + year);
    $('#date1-h').text(waktu[monthNum][day].Tarikh);
    $('#subuh1').text("subuh : " + subuh1 + " am");
    $('#zuhur1').text("zuhur : " + zuhur1 + " pm");
    $('#asar1').text("asar : " + asar1 + " pm");
    $('#maghrib1').text("maghrib : " + maghrib1 + " pm");
    $('#isya1').text("isya : " + isya1 + " pm");

    $('#date2-m').text(day + 2 + " " + month + " " + year);
    $('#date2-h').text(waktu[monthNum][day + 1].Tarikh);
    $('#subuh2').text("subuh : " + subuh2 + " am");
    $('#zuhur2').text("zuhur : " + zuhur2 + " pm");
    $('#asar2').text("asar : " + asar2 + " pm");
    $('#maghrib2').text("maghrib : " + maghrib2 + " pm");
    $('#isya2').text("isya : " + isya2 + " pm");

    function highlight() {
        let currentTime = date.getHours() + date.getMinutes() / 100;
        let activeClass = "active pulse green accent-4 white-text";

        if (parseFloat(subuh) > currentTime) {
            $('#isya').addClass(activeClass);
            $('#maghrib').removeClass(activeClass);
            console.log("Isya!!!");
        }
        else if (parseFloat(syuruk) > currentTime) {
            $('#subuh').addClass(activeClass);
            $('#isya').removeClass(activeClass);
            console.log("Subuh!!!");
        }
        else if (parseFloat(zuhur) > currentTime) {
            $('#zuhur').addClass("active pulse orange white-text");
            $('#subuh').removeClass(activeClass);
            console.log("Kn Zuhur!!!");
        }
        else if (parseFloat(asar) + 12.0 > currentTime) {
            $('#zuhur').addClass(activeClass);
            $('#zuhur').removeClass("orange");
            console.log("Zuhur!!!");
        }
        else if (parseFloat(maghrib) + 12.0 > currentTime) {
            $('#asar').addClass(activeClass);
            $('#zuhur').removeClass(activeClass);
            console.log("Asar!!!");
        }
        else if (parseFloat(isya) + 12.0 > currentTime) {
            $('#maghrib').addClass(activeClass);
            $('#asar').removeClass(activeClass);
            console.log("Maghrib!!!");
        }
        else if (12.0 + 12.0 > currentTime) {
            $('#isya').addClass(activeClass);
            $('#maghrib').removeClass(activeClass);
            console.log("Isya!!!");
        }
        else
        {
            console.log("hmmmm...");
        }
    }
});
$(document).ready(function () {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu", "Ahad"];
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

    let date1_m, date2_m;
    let date1_h, date2_h;
    let dayName1, dayName2;
    let subuh1, subuh2;
    let zuhur1, zuhur2;
    let asar1, asar2;
    let maghrib1, maghrib2;
    let isya1, isya2;
    
    if(typeof waktu[monthNum][day] === 'undefined') {
        date1_m = 1 + " " + months[monthNum + 1] + " " + year;
        date1_h = waktu[monthNum + 1][0].Tarikh;
        subuh1 = waktu[monthNum + 1][0].Subuh;
        zuhur1 = waktu[monthNum + 1][0].Zuhur;
        asar1 = waktu[monthNum + 1][0].Asar;
        maghrib1 = waktu[monthNum + 1][0].Maghrib;
        isya1 = waktu[monthNum + 1][0].Isya;

        date2_m = 2 + " " + months[monthNum + 1] + " " + year;
        date2_h = waktu[monthNum + 1][1].Tarikh;
        subuh2 = waktu[monthNum + 1][1].Subuh;
        zuhur2 = waktu[monthNum + 1][1].Zuhur;
        asar2 = waktu[monthNum + 1][1].Asar;
        maghrib2 = waktu[monthNum + 1][1].Maghrib;
        isya2 = waktu[monthNum + 1][1].Isya;
    }
    else {
        date1_m = day + 1 + " " + month + " " + year;
        date1_h = waktu[monthNum][day].Tarikh;
        subuh1 = waktu[monthNum][day].Subuh;
        zuhur1 = waktu[monthNum][day].Zuhur;
        asar1 = waktu[monthNum][day].Asar;
        maghrib1 = waktu[monthNum][day].Maghrib;
        isya1 = waktu[monthNum][day].Isya;

        if(typeof waktu[monthNum][day + 1] === 'undefined') {
            date2_m = 1 + " " + months[monthNum + 1] + " " + year;
            date2_h = waktu[monthNum + 1][0].Tarikh;
            subuh2 = waktu[monthNum + 1][0].Subuh;
            zuhur2 = waktu[monthNum + 1][0].Zuhur;
            asar2 = waktu[monthNum + 1][0].Asar;
            maghrib2 = waktu[monthNum + 1][0].Maghrib;
            isya2 = waktu[monthNum + 1][0].Isya;
        }
        else {
            date2_m = day + 2 + " " + month + " " + year;
            date2_h = waktu[monthNum][day + 1].Tarikh;
            subuh2 = waktu[monthNum][day + 1].Subuh;
            zuhur2 = waktu[monthNum][day + 1].Zuhur;
            asar2 = waktu[monthNum][day + 1].Asar;
            maghrib2 = waktu[monthNum][day + 1].Maghrib;
            isya2 = waktu[monthNum][day + 1].Isya;
        }
    }

    if (date.getDay() - 1 < 5 ) {
        dayName1 = days[date.getDay()];
        dayName2 = days[date.getDay() + 1];
    } else if (date.getDay() - 1 == 5) {
        dayName1 = days[date.getDay()];
        dayName2 = days[0];
    }
    else if (date.getDay() - 1 === 6) {
        dayName1 = days[0];
        dayName2 = days[1];
    }
    else {
        dayName1 = 'hmmmm';
        dayName2 = 'hmmmm';
    }

    highlight();
    setInterval(function(){ highlight(); }, 1000);

    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });
    $('#date-m').text(day + " " + month + " " + year);
    $('#date-h').text(waktu[monthNum][day - 1].Tarikh);
    $('#hari').text(days[date.getDay() - 1]);
    $('#subuh').text(subuh + " am");
    $('#zuhur').text(zuhur + " pm");
    $('#asar').text(asar + " pm");
    $('#maghrib').text(maghrib + " pm");
    $('#isya').text(isya + " pm");

    $('#date1-m').text(date1_m);
    $('#date1-h').text(date1_h);
    $('#hari1').text(dayName1);
    $('#subuh1').text(subuh1 + " am");
    $('#zuhur1').text(zuhur1 + " pm");
    $('#asar1').text(asar1 + " pm");
    $('#maghrib1').text(maghrib1 + " pm");
    $('#isya1').text(isya1 + " pm");

    $('#date2-m').text(date2_m);
    $('#date2-h').text(date2_h);
    $('#hari2').text(dayName2);
    $('#subuh2').text(subuh2 + " am");
    $('#zuhur2').text(zuhur2 + " pm");
    $('#asar2').text(asar2 + " pm");
    $('#maghrib2').text(maghrib2 + " pm");
    $('#isya2').text(isya2 + " pm");

    // $('.collapsible').collapsible();

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
            // $('#zuhur').closest("li").addClass("active");
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
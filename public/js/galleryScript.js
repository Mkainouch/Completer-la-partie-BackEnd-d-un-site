var path;
var pos;
var imgSrc;
var imgDest = document.getElementById('imgs');
var imgsLink = document.querySelectorAll('.carCart');
    // var imagedest = document.querySelector('#imgs');
    for(var i =0 ; i<imgsLink.length;i++){
        imgsLink[i].addEventListener("click",function(){
            var sources = this.children[1].children[0].src;
            imgDest.style.backgroundImage = 'url('+ sources + ')';
        });
    }

function SlideImg(imgPath) {
    document.getElementById('sildeShow').style.backgroundImage = "url('"+imgPath+1+".jpg')";
    path=imgPath;
    pos=1;
    document.getElementById('s-r-container').style.display = "block";
    // document.getElementById('gallery').style.display = "none";
    document.getElementById('header').style.display = "none";
    // document.getElementById('footer').style.display = "none";

}

function hideSlider(){
    document.getElementById('s-r-container').style.display = "none";
    document.getElementById('gallery').style.display = "block";
    document.getElementById('header').style.display = "block";
    document.getElementById('footer').style.display = "block";

}

function slidePass(i){
    pos+=i;
    if(pos==0)
    {
        pos=1;
    }
    if(pos==6)
    {
        pos=5;
    }
    document.getElementById('sildeShow').style.backgroundImage = "url('"+path+pos+".jpg')";
}


// ============================================= reservation =================

const 
    img = document.getElementById("imgs"),
    firstName = document.getElementById("firstName"),
    lastName = document.getElementById("lastName"),
    birthDay = document.getElementById("birthDay"),
    fromCity = document.getElementById("fromCity"),
    toCity = document.getElementById("toCity"),
    startDate = document.getElementById("startDate"),
    startHour = document.getElementById("startHour"),
    endDate = document.getElementById("endDate"),
    endHour = document.getElementById("endHour"),
    imgC = document.getElementById("imgC"),
    firstNameC = document.getElementById("firstNameC"),
    lastNameC = document.getElementById("lastNameC"),
    ageC = document.getElementById("ageC"),
    birthDayC = document.getElementById("birthDayC"),
    fromCityC = document.getElementById("fromCityC"),
    toCityC = document.getElementById("toCityC"),
    startDateC = document.getElementById("startDateC"),
    startHourC = document.getElementById("startHourC"),
    endDateC = document.getElementById("endDateC"),
    endHourC = document.getElementById("endHourC"),
    daysC = document.getElementById("daysC");

function reservationForm(){
    document.getElementById('reservationContainer').style.display = "block";
    document.getElementById('slideContainer').style.display = "none";
    document.getElementById('gallery').style.display = "none";
    document.getElementById('header').style.display = "none";
    document.getElementById('footer').style.display = "none";

}

function reservationClose(){
    document.getElementById('reservationContainer').style.display = "none";
    document.getElementById('slideContainer').style.display = "block";
}

function reservationConf(){
    if(firstName.value === "" || lastName.value === "" ||  birthDay === "" || fromCity === "" || toCity ==="" || startDate === "" || startHour === "" || endDate === "" || endHour === "" ){
        alert(" Tous les champs sont requis ")
    }else{ 
    document.getElementById('reservationConfirmationContainer').style.display = "block";
    document.getElementById('reservationContainer').style.display = "none";
    document.getElementById('gallery').style.display = "none";
    document.getElementById('header').style.display = "none";
    document.getElementById('footer').style.display = "none";

    const imgBackground = img.style.backgroundImage;
    imgC.style.backgroundImage = imgBackground;

    
    var age = calculatAge(new Date(birthDay.value).getFullYear());
    var numberOfDays = calculDayDiff(startDate.value.toString(), endDate.value.toString());

    firstNameC.value = firstName.value;
    lastNameC.value = lastName.value;
    ageC.value = age;
    birthDayC.value = birthDay.value;
    fromCityC.value = fromCity.value;
    toCityC.value = toCity.value;
    startDateC.value = startDate.value;
    startHourC.value = startHour.value;
    endDateC.value = endDate.value;
    endHourC.value = endHour.value;
    daysC.value = numberOfDays;

    console.log(firstNameC.value)

    }

}

function calculatAge(birth){
    ageMs = Date.parse(Date()) - Date.parse(birth);
    age = new Date();
    age.setTime(ageMs);
    ageYear = age.getFullYear() - 1970;
    return ageYear;
}

function calculDayDiff(date1, date2)
{
    date1 = new Date(date1).getTime() / 86400000;
    date2 = new Date(date2).getTime() / 86400000;
    return new Number(date2 - date1).toFixed(0);
}
function reservationConfimationBtn(){
    alert("merci " + firstName.value + " votre réservation est bien enregistré");
}
function reservationModifyBtn(){
    document.getElementById('reservationConfirmationContainer').style.display = "none";
    document.getElementById('reservationContainer').style.display = "block";
    document.getElementById('gallery').style.display = "none";
    document.getElementById('header').style.display = "none";
    document.getElementById('footer').style.display = "none";
}

// ====================================================
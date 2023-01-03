alert("Welcome to my website!\n\nDiscover the history of India between years 1857 & 1947.");
function clock() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var miliseconds = date.getMilliseconds();
    var midday;

    hours = updateTime(hours);
    minutes = updateTime(minutes);
    seconds = updateTime(seconds);
    miliseconds = updateTime(miliseconds);

    // If else conditions
    midday = (hours >= 12) ? "PM" : "AM";

    document.getElementById("clock").innerHTML = "<span>" + hours + "</span>" + ":" + "<span>" + minutes + "</span>" + ":" + "<span>" + seconds + "</span>" + ":" + "<span>" + miliseconds + "</span>" + "<span>" + midday + "</span>";

    var time = setTimeout(function(){
        clock();
    }, 1000);
    // Greetings conditions
    if(hours < 12){
        var greetings = "Good Morning!";
    }
    if(hours >= 12 && hours <= 18){
        var greetings = "Good Afternoon!";
    }
    if(hours >= 18 && hours <= 24){
        var greetings = "Good Evening!";
    }
    document.getElementById("greetings").innerHTML = greetings;
}

function updateTime(k){
    if(k < 10){
        return "0" + k
    } else {
        return k;
    }
}
// Clling clock function
clock();

function googleTranslateElementInit(){
    new google.translate.TranslateElement(
        {pageLanguage: "en"},
        "google_translate_element"
    )
}
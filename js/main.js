
// Countdown Clock

// Set the date we're counting down to
let countDownDate = new Date("March 1, 2022 00:00:00").getTime();

// Update the count down every 1 second  2022 is Tuesday, March 1
let x = setInterval(function () {

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (days < 10) {
        days = "0" + days;
    };
    if (hours < 10) {
        hours = "0" + hours;
    };
    if (minutes < 10) {
        minutes = "0" + minutes;
    };
    if (seconds < 10) {
        seconds = "0" + seconds;
    };


    $(".days").html(days)
    $(".hours").html(hours)
    $(".minutes").html(minutes)
    $(".seconds").html(seconds)
}, 1000);
// end Countdown Clock
// tsert form
const form = document.querySelector("form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const number = document.querySelector("#number");


function showError(input, message) {
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-yosef error';
    const small = formcontrol.querySelector('small');
    small.innerText = message;
}
function showSuccess(input) {
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-yosef success';
}
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('submit was clicked');

    if (username.value === "") {
        showError(username, "Please enter a username");
    }
    else {
        showSuccess(username);
    }
    if (email.value === "") {
        showError(email, "Please enter a Email");
    }
    else {
        showSuccess(email);
    }
    if (password.value === "") {
        showError(password, "Please enter a password");
    }
    else {
        showSuccess(password);
    }
    if (password2.value === password.value) {
        showSuccess(password2);
    }
    else {

        showError(password2, "Please enter your password again");
    }
    if (number.value === "") {
        showError(number, "Please enter your phone number");
    }
    else {
        showSuccess(number);
    }

});
// end form
// stert quiz
let scor = 0
let yorScor = document.querySelector(".yorScor")
let anser1 = document.getElementById("New_Orleans")
let anser2 = document.getElementById("blue")
let anser3 = document.getElementById("feasting")
let anser4 = document.getElementById("Cowbellion")
let anser5 = document.getElementById("New")
let anser6 = document.getElementById("holding")
let anser7 = document.getElementById("Comos")
let anser8 = document.getElementById("Joseph")
let anser9 = document.getElementById("Order")
let anser10 = document.getElementById("Doves")






document.querySelector("#submit").addEventListener("click", function () {
    if (anser1.checked == true) {
        scor++
    }
    if (anser2.checked == true) {
        scor++
    }
    if (anser3.checked == true) {
        scor++
    }
    if (anser4.checked == true) {
        scor++
    }
    if (anser5.checked == true) {
        scor++
    }
    if (anser6.checked == true) {
        scor++
    }
    if (anser7.checked == true) {
        scor++
    }
    if (anser8.checked == true) {
        scor++
    }
    if (anser9.checked == true) {
        scor++
    }
    if (anser10.checked == true) {
        scor++
    }
    console.log(scor)
    if (scor == 10) {
        yorScor.innerHTML = `<h3 class="h1 m-2 p-3"> You got ${scor} correct answers out of 10 Good job!</h3>`
        scor = 0
    }
    else {
        yorScor.innerHTML = `<h3 class="h1 m-2 p-3"> You got ${scor} correct answers out of 10</h3>`
    }
    scor = 0
});
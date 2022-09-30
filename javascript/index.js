
 (function () {
   'use strict'

   document.querySelector('[data-bs-toggle="offcanvas"]').addEventListener('click', function () {
     document.querySelector('.offcanvas-collapse').classList.toggle('open')
   })
 })()



 const testimonials = [
   {
     name: "Cherise G",
     photoUrl:
       "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
     text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.",
   },
   {
     name: "Rosetta Q",
     photoUrl:
       "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
     text: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.",
   },
   {
     name: "Constantine V",
     photoUrl:
       "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
     text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
   },
 ];

 const imgEl = document.querySelector(".img");
 const textEl = document.querySelector(".text");
 const usernameEl = document.querySelector(".username");

 let idx = 0;

 updateTestimonial();

 function updateTestimonial() {
   const { name, photoUrl, text } = testimonials[idx];
   imgEl.src = photoUrl;
   textEl.innerText = text;
   usernameEl.innerText = name;
   idx++;
   if (idx === testimonials.length) {
     idx = 0;
   }
   setTimeout(() => {
     updateTestimonial();
   }, 10000);
 }



 function myFunction() {
   var time = new Date().getHours();
   var greeting;
   if (time < 12) {
       greeting = "HELLO! GOOD MORNING,";
   } else if (time < 15) {
     greeting = "HELLO! GOOD AFTERNOON,";
   } else {
     greeting ="HELLO! GOOD EVENING,";
   }
 document.getElementById("demo1").innerHTML = greeting;
 }





 /* ---- Countdown timer ---- */

 // Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "D " + hours + "H "
  + minutes + "M " + seconds + "S ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

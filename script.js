"use strict";

const about = document.querySelector(".about");
const overlay = document.querySelector(".overlay");
const btnCloseabout = document.querySelector(".close-about");
const btnsOpenabout = document.querySelectorAll(".show-about");
//

const toggleabout = function () {
  about.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

/*
for (let i = 0; i < btnsOpenabout.length; i++) {
  /*
btnsOpenabout[i].addEventListener("click", function () {
    // console.log("clicked");
    about.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  });
}
 /* 
btnCloseabout.addEventListener("click", function () {
  about.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});

btnCloseabout.addEventListener("keypress", function (event) {
  console.log(keyPressed);
});

overlay.addEventListener("click", function () {
  about.classList.toggle("hidden");
  overlay.classList.add("hidden");
});
*/

for (let j = 0; j < btnsOpenabout.length; j++) {
  btnsOpenabout[j].addEventListener("click", toggleabout);
}

//dont use bracket in function here cuz it will immidiately execute the functoon toggleabout.

btnCloseabout.addEventListener("click", toggleabout);

overlay.addEventListener("click", toggleabout);

////////moder

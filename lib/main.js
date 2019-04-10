"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_toConsumableArray(document.querySelectorAll('.tabs li')).map(function (li) {
  li.onclick = function () {
    //1. Find active li, remove active
    //2. Add active to clicked li
    //3. Find active tab_div, remove active
    //4. Find matching tab_div to clicked li with the of data-index
    //5. Add active class to clicked tab_div
    document.querySelector('.tabs li.active').classList.remove("active");
    this.classList.add("active");
    TabContentChanger();
  };
});

document.querySelector('.prev').onclick = function () {
  //1. find current active li
  //2. check whether previous element exists
  //3. if exists add active to prev
  //4. else add active to last child
  var activeLi = document.querySelector('.tabs li.active');
  activeLi.classList.remove("active");

  if (activeLi.previousElementSibling) {
    activeLi.previousElementSibling.classList.add('active');
  } else {
    document.querySelector('.tabs li:last-of-type').classList.add('active');
  }

  TabContentChanger();
};

document.querySelector('.next').onclick = function () {
  //1. find current active li
  //2. check whether previous element exists
  //3. if exists add active to prev
  //4. else add active to last child
  var activeLi = document.querySelector('.tabs li.active');
  activeLi.classList.remove("active");

  if (activeLi.nextElementSibling && !activeLi.nextElementSibling.classList.contains("runner")) {
    activeLi.nextElementSibling.classList.add('active');
  } else {
    document.querySelector('.tabs').firstElementChild.classList.add('active');
  }

  TabContentChanger();
};

function TabContentChanger() {
  document.querySelector('.tab_content.active').classList.remove("active");
  var index = document.querySelector('.tabs li.active').getAttribute("data-index");
  var connectedTab = document.querySelector(".tab_content[data-index=\"".concat(index, "\"]"));
  connectedTab.classList.add("active");
  UpdateRunner();
}

window.onload = function () {
  preloader.classList.add("hide");
  setTimeout(function () {
    preloader.style.display = "none";
  }, 3000);
  var tabs = document.querySelectorAll('.tabs li');
  var randomIndex = Math.round(Math.random() * (tabs.length - 1));
  tabs[randomIndex].classList.add("active");
  document.querySelectorAll('.tab_content')[randomIndex].classList.add("active");
  UpdateRunner();
};

function UpdateRunner() {
  var runner = document.querySelector('.runner');
  var activeLi = document.querySelector('.tabs li.active');
  var tabs = document.querySelectorAll(".tabs li");
  var left = 0;

  for (var i = 0; i < tabs.length; i++) {
    var li = tabs[i];
    if (li != activeLi) left += parseFloat(getComputedStyle(li).width);else break;
  }

  runner.style.left = left + "px";
  runner.style.width = getComputedStyle(activeLi).width;
}

console.log("samir");
console.log(12);
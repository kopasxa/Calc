/* ---- Обьявление переменных ---- */

let input = document.getElementById("input");
let button = document.querySelectorAll("#number");
let result = document.querySelector(".result");
let c = document.getElementById("c");
let del = document.getElementById("del");
let mainInput = document.querySelector(".main__input");
let animate = "headShake";
let animateC = "fadeOut";
let animateDel = "pulse";
let animateRes = "fadeIn";
let wh = document.getElementById("w");
let bl = document.getElementById("b");
let hr = document.querySelectorAll(".herz");
let calc = document.querySelector(".all");
let body = document.querySelector("body");
let burgerLine = document.querySelectorAll(".burger-line");
let burgerBody = document.querySelector("#body");
let color, calcBg, colorText, allColors, colorButton;

let itemsArray = localStorage.getItem("colors") ? JSON.parse(localStorage.getItem("colors")) : [];

if (itemsArray == []) 
  defaultTheme();

/* ---- Хрен пойми шо тут написано ---- */

localStorage.setItem("colors", JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem("colors"));

/* ---- Иницилизация анимаций ---- */

new WOW().init();

/* ---- Вспоминает тему которая была активирована ---- */

calc.style.cssText = itemsArray[1];
input.style.cssText = itemsArray[2];
burgerBody.style.cssText = itemsArray[3];
del.style.cssText = c.style.cssText = itemsArray[3];

[].forEach.call(button, function (el) {
  el.style.cssText = itemsArray[3];
});

[].forEach.call(burgerLine, function (e) {
  e.style.cssText = itemsArray[0];
});

/* ---- Ищет все кнопки калькулятора ---- */

[].forEach.call(button, function (el) {
  
  /* ---- Отслеживает клик на кнопку калькулятора ---- */

  el.onclick = function (e) {
    setTimeout(() => {
      mainInput.classList.remove(animate);
    }, 500);
    input.value += el.value;
    mainInput.classList.add(animate);
  };
});

/* ---- Отслеживает нажатие на = ---- */

result.onclick = function (e) {
  setTimeout(() => {
    mainInput.classList.remove(animateRes);
  }, 500);

  /* ---- Фичи ---- */

  if (
    input.value == "0/0" ||
    input.value == "2+2" ||
    input.value == "1+1" ||
    input.value == "0+0"
  ) {
    result = "Какой ты умный....)";
    input.value = result;
  } else {
    result = eval(input.value);

    if (result == "Infinity") {
      result = "На ноль делить нельзя, учи математику (";
    }
    if (input.value == "2+2") {
      result = "Ещё не вырос, иди учись )";
    }
    if (result == "NaN" || result == "undefined") {
      result == "Мммм... Что-то сдесь не так)";
    }

    input.value = result;
  }
  mainInput.classList.add(animateRes);
};

/* ---- Отслеживание нажатия на кнопку С ---- */

c.onclick = function (e) {
  setTimeout(() => {
    mainInput.classList.remove(animateC);
  }, 700);
  mainInput.classList.add(animateC);
  c = "";
  setTimeout(() => {
    input.value = c;
  }, 600);
};

/* ---- Отслеживание нажатия на кнопку Delete ---- */

del.onclick = function (e) {
  setTimeout(() => {
    mainInput.classList.remove(animateDel);
  }, 700);
  mainInput.classList.add(animateDel);
  input.value = input.value.slice(0, -1);
};

/* ---- Стандартная тема ---- */

function defaultTheme () {
  clearStorage();
  color = "background-color: #d2dae2;";
  calcBg = "background-color: #ffffff;";
  colorText = "color: #0b1016;";
  colorButton = "background-color: #0b1016;";
  allColors = "background-color: #d2dae2; color: #0b1016;";
  changeColorAll();
}

/* ---- Отслеживание нажатия на белую тему ---- */

wh.onchange = function (e) {
  defaultTheme();
};

/* ---- Отслеживание нажатия на темную тему ---- */

bl.onchange = function (e) {
  clearStorage();
  color = "background-color: #293238;";
  calcBg = "background-color: #38444c;";
  colorText = "color: #f0f2f3;";
  colorButton = "background-color: #f0f2f3;";
  allColors = "background-color: #293238; color: #f0f2f3;";
  changeColorAll();
};

/* ---- Очистка хранилища ---- */

function clearStorage() {
  localStorage.clear();
  itemsArray = [];
}

/* ---- Изменение цвета темы ---- */

function changeColorAll() {
  itemsArray[0] = colorButton;
  itemsArray[1] = calcBg;
  itemsArray[2] = colorText;
  itemsArray[3] = allColors;
  localStorage.setItem("colors", JSON.stringify(itemsArray));
  changeColor();
}

function changeColor() {
  calc.style.cssText = body.style.cssText = itemsArray[1] = calcBg;
  input.style.cssText = itemsArray[2] = colorText;
  burgerBody.style.cssText = itemsArray[3] = allColors;
  del.style.cssText = c.style.cssText = itemsArray[3] = allColors;

  [].forEach.call(button, function (el) {
    el.style.cssText = itemsArray[3] = allColors;
  });

  [].forEach.call(burgerLine, function (e) {
    e.style.cssText = itemsArray[0] = colorButton;
  });
}

/* ---- Отслеживание нажатия на Бургер кнопку ---- */

[].forEach.call(hr, function (el) {
  el.onclick = function (e) {
    burgerBody.classList.toggle("visible");
    calc.classList.toggle("hidden");
  };
});

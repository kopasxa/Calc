/* ---- Обьявление переменных ---- */

let input      = document.getElementById("input"),
    button     = document.querySelectorAll("#number"),
    result     = document.querySelector(".result"),
    c          = document.getElementById("c"),
    del        = document.getElementById("del"),
    mainInput  = document.querySelector(".main__input"),
    animate    = "headShake",
    animateC   = "fadeOut",
    animateDel = "pulse",
    animateRes = "fadeIn",
    wh         = document.getElementById("w"),
    bl         = document.getElementById("b"),
    hr         = document.querySelectorAll(".herz"),
    calc       = document.querySelector(".all"),
    body       = document.querySelector("body"),
    burgerLine = document.querySelectorAll(".burger-line"),
    burgerBody = document.querySelector("#body"),
    textTheme  = document.querySelector(".header__text"),
    color, calcBg, colorText, allColors, colorButton, colorTextTheme,
    itemsArray = localStorage.getItem("colors") ? JSON.parse(localStorage.getItem("colors")) : [];

/* ---- Хрен пойми шо тут написано ---- */

localStorage.setItem("colors", JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem("colors"));

if (itemsArray == []) 
  defaultTheme();

/* ---- Иницилизация анимаций ---- */

new WOW().init();

/* ---- Вспоминает тему которая была активирована ---- */

calc.style.cssText = itemsArray[1];
input.style.cssText = textTheme.style.cssText = itemsArray[2];
burgerBody.style.cssText = itemsArray[3];
del.style.cssText = c.style.cssText = itemsArray[3];
body.style.cssText = itemsArray[1];

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
    result = "Ещё не вырос, иди учись )";;
    input.value = result;
  } else {
    result = eval(input.value);

    if (result == "Infinity") {
      result = "На ноль делить нельзя, учи математику (";
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
  calcBg = "background-color: #ffffff !important;";
  colorText = "color: #0b1016;";
  colorButton = "background-color: #0b1016;";
  allColors = "background-color: #d2dae2; color: #0b1016;";
  colorTextTheme = colorText;
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
  calcBg = "background-color: #38444c !important;";
  colorText = "color: #f0f2f3;";
  colorButton = "background-color: #f0f2f3;";
  allColors = "background-color: #293238; color: #f0f2f3;";
  colorTextTheme = "color: #b2bec3;";
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
  itemsArray[4] = colorTextTheme;
  localStorage.setItem("colors", JSON.stringify(itemsArray));
  changeColor();
}

function changeColor() {
  calc.style.cssText = itemsArray[1] = calcBg;
  body.style.cssText = itemsArray[1] = calcBg;
  input.style.cssText = textTheme.style.cssText = itemsArray[2] = colorText;
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

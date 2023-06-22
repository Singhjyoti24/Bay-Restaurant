const textEle = [
  "Unexpected guests?",
  "Movie marathon?",
  "Hungry?",
  "Game night?",
  "Cooking gone wrong?",
  "Late night at office?",
];

const textChange = document.querySelector(".text-change");

window.addEventListener("DOMContentLoaded", function () {
  setInterval(function () {
    let ran = changeText(textEle);
    textChange.textContent = textEle[ran];
  }, 2000);
});

function changeText(textEle) {
  let ran = Math.floor(Math.random() * textEle.length);
  return ran;
}

const btn = document.querySelector(".btn");
const mainImg = document.querySelector(".main-img");
const mainContent = document.querySelector(".main-content");
btn.addEventListener("mousemove", function () {
  mainContent.classList.toggle("blur");
});

const line = document.querySelector(".line");
window.addEventListener("DOMContentLoaded", function () {
  setInterval(function () {
    line.classList.toggle("line-change");
  }, 2000);
});

const breakfast = document.querySelector(".breakfast");
const lunch = document.querySelector(".lunch");
const dinner = document.querySelector(".dinner");
// breakfast.addEventListener("click", function () {

// });

const breakfastArray = [
  { b1: "300", b1b: "Masala Dosa" },
  { b2: "199", b2b: "Ham Burger" },
  { b3: "150", b3b: "Aloo Paratha" },
  { b4: "100", b4b: "Egg Omlette" },
  { b5: "120", b5b: "Sandwich" },
  { b6: "200", b6b: "Idli Sambhar" },
  { b7: "250", b7b: "Paneer Tikka" },
  { b8: "80", b8b: "Salad" },
  { b9: "120", b9b: "Spring Roll" },
];

const lunchArray = [
  { b1: "300", b1b: "Masala Dosa" },
  { b2: "199", b2b: "Ham Burger" },
  { b3: "150", b3b: "Aloo Paratha" },
  { b4: "100", b4b: "Egg Omlette" },
  { b5: "120", b5b: "Sandwich" },
  { b6: "200", b6b: "Idli Sambhar" },
  { b7: "250", b7b: "Paneer Tikka" },
  { b8: "80", b8b: "Salad" },
  { b9: "120", b9b: "Spring Roll" },
];

const dinnerArray = [
  { b1: "300", b1b: "Masala Dosa" },
  { b2: "199", b2b: "Ham Burger" },
  { b3: "150", b3b: "Aloo Paratha" },
  { b4: "100", b4b: "Egg Omlette" },
  { b5: "120", b5b: "Sandwich" },
  { b6: "200", b6b: "Idli Sambhar" },
  { b7: "250", b7b: "Paneer Tikka" },
  { b8: "80", b8b: "Salad" },
  { b9: "120", b9b: "Spring Roll" },
];
const foodItems = document.querySelectorAll(".food-items");
console.log(foodItems);

foodItems.forEach(function (item) {
  item.addEventListener("mouseenter", function (e) {
    mouseOver(item);
  });
  item.addEventListener("mouseleave", function (e) {
    mouseOut(item);
  });
});

function mouseOver(item) {
  if (item.classList.contains("b1")) {
    item.textContent = breakfastArray[0].b1;
  } else if (item.classList.contains("b2")) {
    item.textContent = breakfastArray[1].b2;
  } else if (item.classList.contains("b3")) {
    item.textContent = breakfastArray[2].b3;
  } else if (item.classList.contains("b4")) {
    item.textContent = breakfastArray[3].b4;
  } else if (item.classList.contains("b5")) {
    item.textContent = breakfastArray[4].b5;
  } else if (item.classList.contains("b6")) {
    item.textContent = breakfastArray[5].b6;
  } else if (item.classList.contains("b7")) {
    item.textContent = breakfastArray[6].b7;
  } else if (item.classList.contains("b8")) {
    item.textContent = breakfastArray[7].b8;
  } else {
    item.textContent = breakfastArray[8].b9;
  }
}

function mouseOut(item) {
  if (item.classList.contains("b1")) {
    item.textContent = breakfastArray[0].b1b;
  } else if (item.classList.contains("b2")) {
    item.textContent = breakfastArray[1].b2b;
  } else if (item.classList.contains("b3")) {
    item.textContent = breakfastArray[2].b3b;
  } else if (item.classList.contains("b4")) {
    item.textContent = breakfastArray[3].b4b;
  } else if (item.classList.contains("b5")) {
    item.textContent = breakfastArray[4].b5b;
  } else if (item.classList.contains("b6")) {
    item.textContent = breakfastArray[5].b6b;
  } else if (item.classList.contains("b7")) {
    item.textContent = breakfastArray[6].b7b;
  } else if (item.classList.contains("b8")) {
    item.textContent = breakfastArray[7].b8b;
  } else {
    item.textContent = breakfastArray[8].b9b;
  }
}

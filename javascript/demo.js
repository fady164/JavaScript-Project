var imgsArr = document.querySelectorAll(".slider-container img");

counter = 0;

function next() {
  if (counter == imgsArr.length - 1) {
    counter = 0;
    slide(counter);
  } else {
    counter++;
    slide(counter);
  }
}
function perv() {
  if (counter == imgsArr.length - imgsArr.length) {
    counter = 2;
    slide(counter);
  } else {
    counter--;
    slide(counter);
  }
}

function slide(indexx) {
  for (var i = 0; i < imgsArr.length; i++) {
    imgsArr[i].className = "disactive";
  }
  imgsArr[indexx].className = "active";
}
//slider end

// filter startv
var cartCounter = 1;
var cart = document.getElementsByClassName("badge")[0];
var xhr = new XMLHttpRequest();
var tabs = document.querySelectorAll(".tabs li");
var tabsArray = Array.from(tabs);
var divs;
var divsArray;
var filter = document.getElementById("filtercontent");
var holder;

// console.log(divsArray);
var arr = [];

function increase() {
  cart.setAttribute("value", `${cartCounter++}`);
}

xhr.open("GET", "https://fakestoreapi.com/products");
xhr.send("");

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    if (xhr.status == 200) {
      var data = JSON.parse(xhr.response);
      for (var i = 0; i < data.length; i++) {
        filter.insertAdjacentHTML(
          "afterbegin",
          `
        <div class="card ${
          data[i].category.split(" ").length > 1
            ? data[i].category.split(" ")[1]
            : data[i].category.split(" ")[0]
        }" category="${
            data[i].category.split(" ").length > 1
              ? data[i].category.split(" ")[1]
              : data[i].category.split(" ")[0]
          }">
        <img src="${data[i].image}">
        <h4> ${data[i].title}</h4>
        <p class="price">$${data[i].price}</p>
        <p>Rate : ${data[i].rating.rate}</p>
        <p><button class="btn" onclick="increase()">Add to Cart  <i class="fa-solid fa-circle-plus"></i></button></p>
      </div>
        `
        );
      }
      divs = document.getElementsByClassName("card");
      divsArray = Array.from(divs);
      console.log(divsArray[0]);

      tabsArray.forEach(function (ele) {
        ele.addEventListener("click", function (e) {
          tabsArray.forEach(function (elee) {
            elee.classList.remove("active");
          });
          e.target.classList.add("active");

          divsArray.forEach(function (div) {
            div.style.display = "none";
          });
          console.log(document.querySelectorAll(e.target.dataset.cont));

          document
            .querySelectorAll(e.target.dataset.cont)
            .forEach(function (el) {
              el.style.display = "inline-block";
            });
        });
      });
    }
  }
};

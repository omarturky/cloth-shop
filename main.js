let bar = document.querySelector("#bar");
let links = document.querySelector("header .links");
let closeBtn = document.querySelector("header .close i");

bar.addEventListener("click", () => {
  links.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  links.classList.remove("active");
});

let products = document.querySelectorAll(".product");

for (i = 0; i < products.length; i++) {
  products[i].addEventListener("click", function () {
    document.location.href = "sproduct.html";
  });
}



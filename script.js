let btn = document.querySelectorAll(".btn");
let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let reset = document.querySelector(".reset");
btn.forEach((i) => {
  i.addEventListener("click", function () {
    body.style.backgroundColor = i.id;
    if (i.id === "yellow" || i.id === "pink") {
      h1.style.color = "black";
    } else {
      h1.style.color = "white";
    }

    if (i.id === "orange") {
      reset.style.backgroundColor = "green";
    } else {
      reset.style.backgroundColor = "orange";
    }
  });
});

reset.addEventListener("click", function () {
  body.style.backgroundColor = "black";
});

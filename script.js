const icons = document.querySelectorAll(".section-1-icons i");

let i = 1;

setInterval(() => {
  i++;

  const icon = document.querySelector(".change");

  icon.classList.remove("change");

  if (i > icons.length) {
    i = 1;
    icons[0].classList.add("change");
  } else {
    icon.nextElementSibling.classList.add("change");
  }
}, 4000);

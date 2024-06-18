const counterText = document.querySelector(".count-text");
const btns = document.querySelectorAll(".btn");

let count = 1;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const currentBtn = e.currentTarget.classList;

    if (currentBtn.contains("dec-btn")) {
      count--;
    } else if (currentBtn.contains("inc-btn")) {
      count++;
    } else {
      count = 0;
    }

    counterText.textContent = count;
  });
});

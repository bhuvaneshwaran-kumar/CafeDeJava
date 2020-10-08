const goTopBtn = document.getElementById("go-top-btn");
const feedback = document.getElementById("FeedBack");

// EventListner
feedback.addEventListener("click", (e) => {
  feedback.classList.toggle("active");
});

goTopBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 350) {
    goTopBtn.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
  }
});

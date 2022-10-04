const mainContainer = document.querySelector(".container")
const thanksContainer = document.querySelector(".thank-you")
const submitButton = document.getElementById("submit-rating")
const ratings = document.querySelectorAll(".btn")
const actualRating = document.getElementById("rating")

submitButton.addEventListener("click", () => {
  mainContainer.style.display = "none"
  thanksContainer.classList.remove("hidden")

  ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
      let rateId = e.target.id;
      const numberBtn = document.getElementById(rateId);
      numberBtn.classList.add(".btn-selected");
      actualRating.innerHTML = numberBtn.innerHTML
    })
  })
})

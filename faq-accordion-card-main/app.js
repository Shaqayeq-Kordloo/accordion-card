const questionBox = document.getElementsByClassName("question-box");
const mainCard = document.querySelector(".main-card");

for (i = 0; i < questionBox.length; i++) {
  questionBox[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

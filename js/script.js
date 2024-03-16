//start modal
function openModal() {
  document.getElementById("myModal").style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
  document.body.style.overflow = "auto";
}

const inputs = Array.from(document.querySelectorAll(".input"));

console.log(inputs);

inputs.forEach(function (i) {
  i.addEventListener("input", function (e) {
    if (this.nextElementSibling) {
      this.nextElementSibling.focus();
    }
  });
});

function moveToNextInput(event, nextInputId) {
  document.getElementById(nextInputId).addEventListener("keyup", function () {
    this.focus();
  });
  if (event.key === "Enter") {
    event.preventDefault();
  }
}

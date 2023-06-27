// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let _btn = document.getElementById("myBtn");
let btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
_btn.onclick = function () {
  modal.style.display = "block";
};

btn2.addEventListener("click", btnClick);

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function btnClick() {
  modal.style.display = "block";
}

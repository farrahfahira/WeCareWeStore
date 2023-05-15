// modal pop up login
const loginBtn = document.getElementById("login-btn");
const modal = document.getElementById("login-modal");
const closeBtn = document.getElementsByClassName("close")[0];

loginBtn.onclick = function () {
  modal.style.display = "block";
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
// end of modal pop up login

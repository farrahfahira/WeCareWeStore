function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("show");
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  document.getElementById(tabName).classList.add("show");
  evt.currentTarget.classList.add("active");
}

// membuat kelas active pada opsi yg dipilih di kotak metode bayar dan kotak nominal
var buttonsBayar = document.querySelectorAll(".bayar");
var buttonsNominal = document.querySelectorAll(".nominal");

function ubahStyleButton(buttons, buttonDipilih) {
  for (var i = 0; i < buttons.length; i++) {
    if (
      buttons[i] !== buttonDipilih &&
      buttons[i].classList.contains("active")
    ) {
      buttons[i].classList.remove("active");
    } else if (buttons[i] === buttonDipilih) {
      buttons[i].classList.add("active");
    }
  }
}

buttonsBayar.forEach(function (button) {
  button.addEventListener("click", function () {
    ubahStyleButton(buttonsBayar, button);
  });
});

buttonsNominal.forEach(function (button) {
  button.addEventListener("click", function () {
    ubahStyleButton(buttonsNominal, button);
  });
});

// validasi Donasikan
var donasikanButton = document.querySelector(".donasikan-button");
var inputNominal = document.getElementById("jumlah-sumbangan");

donasikanButton.addEventListener("click", function () {
  var bayarTerpilih = false;
  buttonsBayar.forEach(function (button) {
    if (button.classList.contains("active")) {
      bayarTerpilih = true;
    }
  });

  // Validasi tombol nominal
  var nominalTerpilih = false;
  buttonsNominal.forEach(function (button) {
    if (button.classList.contains("active")) {
      nominalTerpilih = true;
    }
  });

  if (bayarTerpilih && (nominalTerpilih || inputNominal.value)) {
    console.log("Donasi berhasil!");
  } else {
    buttonsBayar.forEach(function (button) {
      if (!button.classList.contains("active") && !bayarTerpilih) {
        button.classList.add("bergetar");
        setTimeout(function () {
          button.classList.remove("bergetar");
        }, 500);
      }
    });

    if (!inputNominal.value) {
      buttonsNominal.forEach(function (button) {
        if (!button.classList.contains("active") && !nominalTerpilih) {
          button.classList.add("bergetar");
          setTimeout(function () {
            button.classList.remove("bergetar");
          }, 500);
        }
      });
    }
  }
});

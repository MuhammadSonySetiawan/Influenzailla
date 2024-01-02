// google analytic dan google tag
// Tombol About-Us
function handleClickBtnAboutUs() {
  // Kirim data ke Google Tag Manager
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "Tombol About Us Diklik",
    element: "Tombol AboutUs",
  });
}

var BtnAboutUs = document.getElementById("BtnAboutUs");
BtnAboutUs.addEventListener("click", handleClickBtnAboutUs);

// Tombol BtnExpertise
function handleClickBtnExpertise() {
  // Kirim data ke Google Tag Manager
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "Tombol Expertise Diklik",
    element: "Tombol Expertise",
  });
}

var BtnExpertise = document.getElementById("BtnExpertise");
BtnExpertise.addEventListener("click", handleClickBtnExpertise);

// Tombol BtnGetStarted
function handleClickBtnGetStarted() {
  // Kirim data ke Google Tag Manager
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "Tombol Get Started Diklik",
    element: "Tombol Get Started",
  });
}

var BtnGetStarted = document.getElementById("BtnGetStarted");
BtnGetStarted.addEventListener("click", handleClickBtnGetStarted);

// Tombol BtnWhatWeDo
function handleClickBtnWhatWeDo() {
  // Kirim data ke Google Tag Manager
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "Tombol What We Do Diklik",
    element: "Tombol What We Do",
  });
}

var BtnWhatWeDo = document.getElementById("BtnWhatWeDo");
BtnWhatWeDo.addEventListener("click", handleClickBtnWhatWeDo);

// Content 4
let activeButton = null;

// Memastikan tombol aktif secara default
document.addEventListener("DOMContentLoaded", function () {
  showResult(1);
});

function showResult(count) {
  // Mengatur warna latar belakang tombol yang sedang aktif
  if (activeButton) {
    activeButton.classList.remove("active");
  }

  // Menggunakan loop untuk membuat string berulang sebanyak count
  let resultString = "";
  for (let i = 0; i < count; i++) {
    resultString += '<img src="./images/ico_content3.png" alt="ico_content3">';
  }

  // Mengganti konten dari elemen span dengan id "result"
  document.getElementById("result").innerHTML = resultString;

  // Menandai tombol yang sedang aktif
  activeButton = document.getElementById("button" + count);
  activeButton.classList.add("active");
}

// Carousel
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

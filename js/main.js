

document.querySelector("#headCircle").addEventListener("mouseover", headHighlight);
document.querySelector("#headCircle").addEventListener("mouseout", headUnHighlight);
document.querySelector("#headCircle").addEventListener("click", headInfo);

document.querySelector("#shoulderCircle").addEventListener("mouseover", headHighlight2);
document.querySelector("#shoulderCircle").addEventListener("mouseout", headUnHighlight2);
document.querySelector("#shoulderCircle").addEventListener("click", shoulderInfo);

document.querySelector("#kneeCircle").addEventListener("mouseover", headHighlight3);
document.querySelector("#kneeCircle").addEventListener("mouseout", headUnHighlight3);
document.querySelector("#kneeCircle").addEventListener("click", kneeInfo);

function headHighlight() {
  console.log("headHighlight");
  console.log(this);
  this.style.fill = "#fff";
}

function headUnHighlight() {
  console.log("headUnHighlight"); 
  this.style.fill = "#d989b5";
}

function headHighlight2() {
   console.log("headHighlight2");
   document.querySelector("#shoulderCircle").style.fill = "#fff";
 }
 function headUnHighlight2() {
   console.log("shoulderUnHighlight2");
   document.querySelector("#shoulderCircle").style.fill = "#ae8fd9";
 }
 function headHighlight3() {
   console.log("headHighlight3");
   document.querySelector("#kneeCircle").style.fill = "#fff";
 }
 function headUnHighlight3() {
   console.log("headUnHighlight3");
   document.querySelector("#kneeCircle").style.fill = "#acd7f2";
}

function headInfo() {
  console.log("headInfo");
  document.querySelector(".info-text > h2").textContent = "Hovedet!";
   document.querySelector(".info-text > article > p").textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  document.querySelector("#efficiency").innerHTML = "<h3>Effektivitet</h3>";
  document.querySelector("#efficiency").innerHTML += "<p>Hovedet er en vigtig del af kroppen, og det er vigtigt at holde det sundt og stærkt. Det er vigtigt at træne hovedet for at forbedre hukommelsen og koncentrationen.</p>";
  document.querySelector("#requirement").innerHTML = "<h3>Styrke</h3>";
  document.querySelector("#requirement").innerHTML += "<p>Det kræver en del styrke at hugge hovedet at en zombie, så det er bedst at gå i gang med at træne nu.</p>";
  // Fade in the text
  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#efficiency").classList.add("fadeIn");
  document.querySelector("#efficiency").addEventListener("animationend", clear);
}
function shoulderInfo() {
  console.log("shoulderInfo");
  document.querySelector(".info-text > h2").textContent = "Skulder!";
  document.querySelector(".info-text > article > p").textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  document.querySelector("#efficiency").innerHTML = "<h3>Effektivitet</h3>";
  document.querySelector("#efficiency").innerHTML += "<p>Det er meget hjælpsomt, hvis man kan få armen af zombien.</p>";
  document.querySelector("#requirement").innerHTML = "<h3>Styrke</h3>";
  document.querySelector("#requirement").innerHTML += "<p>Det er ikke så svært at få armen af en gammel zombie, da leddene bliver svagere med tiden.</p>";
}
function kneeInfo() {
  console.log("kneeInfo");
  document.querySelector(".info-text > h2").textContent = "Knæ!";
  document.querySelector(".info-text > article > p").textContent = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  document.querySelector("#efficiency").innerHTML = "<h3>Effektivitet</h3>";
  document.querySelector("#efficiency").innerHTML += "<p>Ar beskadige knæet kan gøre zombien lidt langsommere, men da den allerede er ret langsom, er det ikke så væsentligt.</p>";
  document.querySelector("#requirement").innerHTML = "<h3>Styrke</h3>";
  document.querySelector("#requirement").innerHTML += "<p>Det kræver ikke så meget at få en zombie ud af balance. Bare sørg for ikke at blive bidt ;)</p>";
}

function clear() {
  console.log("clear");
  document.querySelector("#efficiency").classList.remove("fadeIn");
  document.querySelector("#requirement").classList.remove("fadeIn");
}

function headInfo() {
  console.log("headInfo");

  animateBoxes();

  document.querySelector(".info-text > h2").textContent = "Hovedet!";
  document.querySelector(".info-text > article > p").textContent = "Lorem ipsum dolor sit amet, velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  document.querySelector("#efficiency").innerHTML = "<h3>Effektivitet</h3><p>Afhukning er supereffektivt og et af de bedste passificeringsaktiviteter man kan bruge. Også for zombier!</p>";
  document.querySelector("#requirement").innerHTML = "<h3>Styrke</h3><p>Det kræver en del styrke og træning at hugge hovedet af en zombie.</p>";
}
function shoulderInfo() {
  console.log("shoulderInfo");

  animateBoxes();

  document.querySelector(".info-text > h2").textContent = "Skulderen!";
  document.querySelector(".info-text > article > p").textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
  document.querySelector("#efficiency").innerHTML = "<h3>Effektivitet</h3><p>Det er rimelig nyttigt at hugge en arm af en zombie, og skal man gøre det, er skulderen et godt sted at hugge på.";
  document.querySelector("#requirement").innerHTML = "<h3>Styrke</h3><p>Hvis du kan svinge et scærd (helst en katana), så er det rimelig let.</p>";
}
function kneeInfo() {
  console.log("kneeInfo");

  animateBoxes();

  document.querySelector(".info-text > h2").textContent = "Knæet!";
  document.querySelector(".info-text > article > p").textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.";
  document.querySelector("#efficiency").innerHTML = "<h3>Effektivitet</h3><p>Ikke super effektivt, da en zombie allerede er langsom, så man får ikke så meget ud af at forstyrre dens balance.";
  document.querySelector("#requirement").innerHTML = "<h3>Styrke</h3><p>Det kræver ikke så meget. Det kan gøres med en træpind.</p>";
}

function animateBoxes() {
  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#efficiency").classList.add("fadeIn");
  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#requirement").classList.add("fadeIn");
  document.querySelector("#requirement").addEventListener("animationend", cleanup);
}

function cleanup() {
  console.log("cleanup");
  document.querySelector("#requirement").removeEventListener("animationend", cleanup);
  document.querySelector("#efficiency").classList.remove("fadeIn");
  document.querySelector("#requirement").classList.remove("fadeIn");
}


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


//taget fra animated-info-boxes branch

function headInfo() {
  console.log("headInfo");

  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#requirement").classList.remove("hide");

  animateBoxes();

  document.querySelector(".info-text > h2").textContent = " Træk vejret!";
  document.querySelector(".info-text > article > p").textContent = "Du er ikke DØD (selvom det føles sådan) Den fysiske smerte? Ja, den er ægte. Dit hjerte tror, det er blevet ramt af en bus (spoiler: det er bare følelser). Første skridt er at overleve de første 24 timer uden at gøre noget dumt.";
  document.querySelector("#efficiency").innerHTML = "<h3>STOP – ingen impulsive handlinger!</h3><p>Afhukning er supereffektivt og et af de bedste passificeringsaktiviteter man kan bruge. Også for zombier!</p>";
  document.querySelector("#requirement").innerHTML = "<h3>Hurtig følelsesmæssig førstehjælp</h3><p>Kan du ikke trække vejret? Panik? Vi har en akut nødplan med øjeblikkelig lindring – fra isbad til den perfekte skrig-i-puden teknik™.</p>";
}

function shoulderInfo() {
  console.log("shoulderInfo");

  animateBoxes();

  document.querySelector(".info-text > h2").textContent = "Stalkeri er en sygdom – og du er smittet";
  document.querySelector(".info-text > article > p").textContent = "Hver gang du tjekker deres Instagram, taber du et liv i spillet 'Kom over dem ASAP'. Algoritmen er DIN FJENDE, og vi viser dig, hvordan du slipper fri fra den digitale tortur.";
  document.querySelector("#efficiency").innerHTML = "<h3>Sådan overlever du uden at stalk</h3><p>Du har 100 spørgsmål, men svarene bor ikke i deres seneste like-historik. Vi lærer dig, hvordan du stopper din FBI-adfærd – og finder ro.";
  document.querySelector("#requirement").innerHTML = "<h3>Blokér eller ej? Her er dommen</h3><p>At blokere eller ikke blokere – dét er spørgsmålet! Vi giver dig en kold, hård sandhed: Hvad hjælper dig, og hvad skubber dig længere ned i kaninhullet?</p>";
}

function kneeInfo() {
  console.log("kneeInfo");

  animateBoxes();

  document.querySelector(".info-text > h2").textContent = "Fra sønderknust til superstjerne";
  document.querySelector(".info-text > article > p").textContent = "På et tidspunkt bliver du that girl igen – men lige nu er du en burrito af tristhed i din dyne. Det er okay! Vi guider dig fra knust larve til sommerfugle-glød.";
  document.querySelector("#efficiency").innerHTML = "<h3>Giv dig selv en deadline</h3><p>Ja, du må græde. Nej, du må ikke blive der for evigt. Vi hjælper dig med at sætte en deadline på din græde-i-pyjamas-fase og planlægge dit comeback.";
  document.querySelector("#requirement").innerHTML = "<h3>Sådan bliver du uimodståelig post-breakup</h3><p>Intet føles bedre end en revenge glow-up. Vi har listen over små (og store) ting, der får dig til at føle dig som hovedpersonen igen.</p>";
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

function clear() {
  console.log("clear");
  document.querySelector("#efficiency").classList.remove("fadeIn");
  document.querySelector("#requirement").classList.remove("fadeIn");
}
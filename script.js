//KOMMER FRA W3 SCHOOLS - KNAPPEN I TOPPEN// 
// KNAPPEN
let mybutton = document.getElementById("myBtn");

// NÅR BRUGEREN TRYKKER PÅ KNAPPEN, SÅ SCROLLER DEN TIL TOPPEN AF DOKUMENTET 
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Oper
}

//FACST OM WINDSURFING - DUTTER// 
const round2 = document.querySelector(`.text2`)
const round3 = document.querySelector(`.text3`)
const round4 = document.querySelector(`.text4`)
const round5 = document.querySelector(`.text5`)
const round6 = document.querySelector(`.text6`)

function visTekst (tekst){
  console.log("Del 1 virker")
  if(tekst.classList.contains(`vis_tekst`)){
    tekst.classList.remove(`vis_tekst`)
    console.log("Del 2 virker")
  }
  else {
    tekst.classList.add(`vis_tekst`)
    console.log("Del 3 virker")
  }
}



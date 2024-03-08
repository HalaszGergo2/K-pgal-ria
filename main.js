import { KEPEK } from "./adatok.js";
import { htmlOsszeAllit } from "./fuggvenyek.js";

/*1. feladat:  galéria kisképeinek elhelyezése */
/* fogd meg a .galeria elemet */
const galeriaELEM = document.getElementsByClassName("galeria")[0]

/* írd bele az összeálíltott html képsorozatot */
galeriaELEM.innerHTML += htmlOsszeAllit(KEPEK)

/*2. feladat  A .nagykep divben lévő img elem megfogása */
const nagykepimgELEM = document.querySelectorAll(".nagykep img")[0]
/* A .nagykep div megfogása */
const nagykepELEM = document.querySelectorAll(".nagykep div")[0]


/*3. feladat-  eseménykezelő hozzáadása a kisképekhez  */
/* Az előzőekben létrehozott kisképek megfogása (querySelectorAll) - ez egy lista lesz */
const kiskepELEM = document.querySelectorAll(".kep img")
/* eseménykezelő hozzáadása a kisképekhez, ciklussal */
for (let i = 0; i < kiskepELEM.length; i++) {
    kiskepELEM[i].addEventListener("click", function (event){
        nagykepimgELEM.src = event.target.src
        console.log(event.target)
    })
    
}



/* Az eseménykezelő függvényében: ha a kisképre kattintunk, akkor a nagykép src attribútumát le kell cserélni a kiskép src attribútumában megadott elérési útvonalra  */




/* 4. feladat .bal és a .jobb gombokra kattintva léptessük a galériát */
const balGOMB = document.querySelector(".bal")
const jobbGOMB = document.querySelector(".jobb") 
console.log(jobbGOMB)
let indexvaltozo = 0;

balGOMB.addEventListener("click", balra)
jobbGOMB.addEventListener("click", jobbra)

function balra(){
    indexvaltozo--;
    nagykepimgELEM.src = KEPEK[indexvaltozo].kep;
}


function jobbra(){
    indexvaltozo++;
    console.log[indexvaltozo]
    indexvaltozo = indexvaltozo % KEPEK.length;
    nagykepimgELEM.src = KEPEK[indexvaltozo].kep;
    
}
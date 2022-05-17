       /*pour reagir les articles*/
const elm = document.querySelector(".love");
elm.addEventListener("click",()=>{    elm.classList.toggle("lovee");});

const elmdeux = document.querySelector(".love1");
elmdeux.addEventListener("click",()=>elmdeux.classList.toggle("lovee"));


const elmtrois = document.querySelector('.love2');
elmtrois.addEventListener("click",()=>elmtrois.classList.toggle("lovee"));

       /*pour supprimer les articles */ 
const elmsuppun = document.querySelector('.supp1');
const elmDi = document.getElementById('art1');
elmsuppun.addEventListener("click",()=>elmDi.remove());

const elmsuppdeux = document.querySelector('.supp2');
const elmDii = document.getElementById('art2');
elmsuppdeux.addEventListener("click",()=>elmDii.remove());

const elmsupptrois = document.querySelector('.supp3');
const elmDiii = document.getElementById('art3');
elmsupptrois.addEventListener("click",()=>elmDiii.remove());




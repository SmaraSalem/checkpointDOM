       /*pour reagir les articles*/


       var love=document.querySelectorAll('.love')

love.forEach(el=>{el.addEventListener('click',()=>{el.classList.toggle("lovee"); })
})
// const elm = document.querySelector(".love");
// elm.addEventListener("click",()=>{    elm.classList.toggle("lovee");});

// const elmdeux = document.querySelector(".love1");
// elmdeux.addEventListener("click",()=>elmdeux.classList.toggle("lovee"));


// const elmtrois = document.querySelector('.love2');
// elmtrois.addEventListener("click",()=>elmtrois.classList.toggle("lovee"));

       /*pour supprimer les articles */ 


       var supp=document.querySelectorAll('.supp')
supp.forEach(el=>{el.addEventListener('click',()=>{el.parentNode.remove(); })
})
//const current = document.querySelector('#main');
//const parent = current.parentNode;
// const elmsuppun = document.querySelector('.supp1');
// const elmDi = document.getElementById('art1');
// elmsuppun.addEventListener("click",()=>elmDi.remove());

// const elmsuppdeux = document.querySelector('.supp2');
// const elmDii = document.getElementById('art2');
// elmsuppdeux.addEventListener("click",()=>elmDii.remove());

// const elmsupptrois = document.querySelector('.supp3');
// const elmDiii = document.getElementById('art3');
// elmsupptrois.addEventListener("click",()=>elmDiii.remove());




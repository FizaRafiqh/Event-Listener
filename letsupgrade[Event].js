const bdy = document.querySelector('#bdy');
const cont = document.querySelector('.cont');
const head = document.querySelector('.head');
const btn = document.querySelector('#btn');

btn.addEventListener('click', function(){
    bdy.style.backgroundColor = "#000";
    head.innerHTML = "WELCOME!!!"
    
})

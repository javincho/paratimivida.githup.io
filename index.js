
const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Sabia que ibas que no me ibas a decir peloncito JSJSJSJ ay, y con esta palabras mi amorcito yo quiero dejarte muy en claro que yo no pienso dejarte, no pienso reemplazarte, no pienso soltarte sin antes haberlo dado todo y si aun tienes miedo que te deje, creeme que no lo hare, yo quiero estar contigo, lo quiero todo contigo y no me importa si tengo que esperar mucho, yo espero, espero para poder estar a tu lado porque te amo, te quiero inmensamente, y siempre te lo voy a recordar todas la veces para que puedas ver como yo realmente te miro y yo te miro como el amor de mi vida, mi unico amor♡')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})

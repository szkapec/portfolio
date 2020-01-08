document.addEventListener('DOMContentLoaded', function() {


const jeden = document.querySelector('#jeden')

let ktory = 0;

document.addEventListener('mousewheel', function(event){

    const kierunek = event.wheelDelta < 0 ? 1 : -1;

    if(kierunek === 1) {
       if(ktory===6) return;
    }


    else if(kierunek === -1) {
        if(ktory===0) return;
    }

    ktory = ktory + kierunek; //czyli albo + -1 albo + +1
    // console.log(kierunek)
    // console.log(event.wheelDelta) //-120 albo 120
    // console.log(ktory)

    jeden.scrollIntoView({
        behavior: "smooth",
        block: "start",
    })


})

})

const elem1 = document.querySelector('.head')
const elem2 = document.querySelector('.sectionPage')
const elem3 = document.querySelector('.umiejetnosci')
const elem4 = document.querySelector('.oferta')
const elem5 = document.querySelector('.project')
const elem6 = document.querySelector('.formularz')


window.addEventListener('scroll', () => {
    let pozycja = window.scrollY;
    const jeden = document.getElementById('jeden')
    const jeden1 = document.getElementById('jeden1')
    
    const dwa = document.getElementById('dwa2')
    const trzy = document.getElementById('trzy3')
    const cztery = document.getElementById('cztery4')
    const piec = document.getElementById('piec5')
    const szesc = document.getElementById('szesc6')

    const jeden2 = document.getElementById('jeden2')
    const dwa3 = document.getElementById('dwa3')
    const trzy4 = document.getElementById('trzy4')
    const cztery5 = document.getElementById('cztery5')
    const piec6 = document.getElementById('piec6')
    const szesc7 = document.getElementById('szesc7')

    if(pozycja <= elem1.clientHeight*0.75) {
        jeden1.style.opacity = "1"
        jeden1.classList.add('activ')
        jeden2.classList.add('activ-color')
    }
    else {
        jeden1.style.opacity = "0"
        dwa.style.opacity = "1"
        jeden1.classList.remove('activ')
        jeden2.classList.remove('activ-color')
    }
    if(pozycja > elem2.clientHeight*0.5)
    {
        dwa.style.opacity = "1"
        jeden1.style.opacity ="0"
        dwa.classList.add('activ');
        dwa3.classList.add('activ-color')
        jeden2.classList.remove('activ-color')

    }
    else {
        dwa.style.opacity = "0"
        dwa.classList.remove('activ')
        dwa3.classList.remove('activ-color')
    }

    if(pozycja > elem1.clientHeight+elem2.clientHeight)
    {
        trzy.style.opacity = "1"
        dwa.style.opacity = "0"
        piec.style.opacity = "0"
        piec.style.opacity ="0"
        trzy.classList.add('activ')
        trzy4.classList.add('activ-color')
        dwa3.classList.remove('activ-color')
    }
    else {
        trzy.style.opacity = "0";
        trzy.classList.remove('activ')
        trzy4.classList.remove('activ-color')
    }
    if(pozycja > elem1.clientHeight+elem2.clientHeight+elem3.clientHeight) {
        cztery.style.opacity = "1"
        trzy.style.opacity = "0"
        piec.style.opacity ="0"
        cztery.classList.add('activ')
        cztery5.classList.add('activ-color')
        trzy4.classList.remove('activ-color')
    }
    else {
        cztery.style.opacity = "0"
        cztery.classList.remove('activ')
        cztery5.classList.remove('activ-color')
    }


    if(pozycja>elem1.clientHeight+elem2.clientHeight+elem3.clientHeight+elem4.clientHeight) {
        piec.style.opacity = "1";
        cztery.style.opacity = "0"
        piec.classList.add('activ')
        piec6.classList.add('activ-color')
        cztery5.classList.remove('activ-color')
    }
    else {
        piec.style.opacity = "0";
        piec.classList.remove('activ')
        piec6.classList.remove('activ-color')
    }

    if(pozycja>elem6.clientHeight*7) {
        szesc.style.opacity = "1";
        piec.style.opacity = "0"
        szesc.classList.add('activ')
        szesc7.classList.add('activ-color')
        piec6.classList.remove('activ-color')
    }
    else {
        szesc.style.opacity = "0"
        szesc.classList.remove('activ')
        szesc7.classList.remove('activ-color')
    }
})
document.addEventListener('DOMContentLoaded', function() {

console.log("Dziala")

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
    console.log(kierunek)
    console.log(event.wheelDelta) //-120 albo 120
    console.log(ktory)

    jeden.scrollIntoView({
        behavior: "smooth",
        block: "start",
    })


})

})
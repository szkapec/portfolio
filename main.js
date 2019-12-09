const element = document.querySelector('.gmail')
const gmail = document.createElement('div')
const odpowiedz = document.querySelector('.odpowiedz')
gmail.classList.add("gmailDymek")

const telefon = document.querySelector('.telefon')

const najechanieMysza = () => {

    gmail.innerText = "szkapec@gmail.com";
    odpowiedz.appendChild(gmail)
    console.log(gmail)
}
const opuszczenie = () => {
    gmail.innerHTML = "";
}
element.addEventListener('mouseover', najechanieMysza)
element.addEventListener('mouseout' , opuszczenie)


const najechanieTel = () => {
    gmail.innerText = "661 360 889"
    odpowiedz.appendChild(gmail)
    console.log(gmail)
}
const opuszczenieTel = () => {
    gmail.innerHTML = "";
}
telefon.addEventListener('mouseover', najechanieTel) 
telefon.addEventListener('mouseout', opuszczenieTel) 
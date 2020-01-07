const english = document.querySelector('.english');
const polish = document.querySelector('.polish')






const enn = () => {


    english.className = "active"
    polish.className = "polish"


    document.querySelector('.polishDwa').innerHTML = "About me"
    document.querySelector('.umiejetnosciA2').innerHTML="Skills"
    document.querySelector('.cechyA2').innerHTML="Features";
    document.querySelector('.projektyA2').innerHTML="Projects"
    document.querySelector('.kontaktA2').innerHTML="Contact"

    document.querySelector('.opish1A2').innerHTML="Welcome to my portfolio!"
    document.querySelector('.opish2A2').innerHTML="My name is Mateusz Kaproń, I come from Lublin and I am a Front-End Developer."
    document.querySelector('.opish3A2').innerHTML="I have a university degree in IT and over 2 years of experience working as a JavaScript programmer."
    document.querySelector('.opish4A2').innerHTML="My goal is to constantly broaden my knowledge about the most effective technologies and methods of creating applications online. I am currently focusing on learning React hooks."
    document.querySelector('.opish5A2').innerHTML="I invite you to look at my projects and on Github :)"

    document.querySelector('.center').innerHTML="Skills"

    document.querySelector('.oferta__h1').innerHTML="What can I offer?"
    document.querySelector('#oferta2').innerHTML="Strony RWD"
    document.querySelector('#oferta3').innerHTML="Flexible design"
    document.querySelector('#oferta4').innerHTML="A modern layout"
    document.querySelector('#oferta5').innerHTML="Animations"
    document.querySelector('#oferta3').innerHTML="Precision";

    document.querySelector('.stos__tech').innerHTML="Technological stack"
    document.querySelector('.zaawansowane').innerHTML="advanced"
    document.querySelector('.stos__reg').innerHTML="Regular"

    // document.querySelector('.project__h1').innerHTML="I invite you to view my projects"
    // document.querySelector('.project__p').innerHTML="Or welcome to my Github! "
    // document.querySelector('.opist__one').innerHTML="Portfolio"
}




const pll = () => {

    polish.className = "active"
    english.className = "english"


    document.querySelector('.polishDwa').innerHTML = "O mnie"
    document.querySelector('.umiejetnosciA2').innerHTML="Umiejętności"
    document.querySelector('.cechyA2').innerHTML="Cechy";
    document.querySelector('.projektyA2').innerHTML="Projekty";
    document.querySelector('.kontaktA2').innerHTML="Kontakt"

    document.querySelector('.opish1A2').innerHTML="Witam na moim portfolio! "
    document.querySelector('.opish2A2').innerHTML="Nazywam się Mateusz Kaproń, pochodzę z okolic Lublina i jestem Front-End Developerem."
    document.querySelector('.opish3A2').innerHTML="Posiadam wyższe wykształcenie informatyczne i ponad 2-letnie doświadczenie w pracy jako programista JavaScript."
    document.querySelector('.opish4A2').innerHTML="Moim celem jest stałe poszerzanie wiedzy dotyczącej najbardziej efektywnych technologii i metod tworzenia aplikacji internetowych. Aktualnie skupiam się na nauce React hooks."
    document.querySelector('.opish5A2').innerHTML="Zapraszam do obejrzenia moich projektów oraz na Github :)"

    document.querySelector('.center').innerHTML="Umiejętości"

    document.querySelector('.oferta__h1').innerHTML="Co mogę zaoferować?"
    document.querySelector('#oferta2').innerHTML="Strony RWD";
    document.querySelector('#oferta3').innerHTML="Elastyczny projekt"
    document.querySelector('#oferta4').innerHTML="Nowoczesny układ"
    document.querySelector('#oferta5').innerHTML="Animacje"
    document.querySelector('#oferta3').innerHTML="Precyzja";

    document.querySelector('.stos__tech').innerHTML="Stos technologiczny"
    document.querySelector('.zaawansowane').innerHTML="Zaawansowane"
    document.querySelector('.stos__reg').innerHTML="Regularny"

    // document.querySelector('.project__h1').innerHTML="Zapraszam do oglądania moich projektów "
    // document.querySelector('.project__p').innerHTML="Lub zapraszam na mojego Githuba! "
    // document.querySelector('.opist__one').innerHTML="Portfolio"
}






english.addEventListener('click', enn)
polish.addEventListener('click',  pll)






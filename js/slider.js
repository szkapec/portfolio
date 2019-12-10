
document.addEventListener('DOMContentLoaded', () => {

    const imagesContainerEl = document.querySelector('.slider__images-container');
    const img1El = document.querySelector('.slider__image-container--first img');
    const img2El = document.querySelector('.slider__image-container--second img');
    let dragging = false;
    const img1ContainerEl = document.querySelector('.slider__image-container--first');
    const img2ContainerEl = document.querySelector('.slider__image-container--second');
    const handleEl = document.querySelector('.slider__handle');
    const dividerEl = document.querySelector('.slider__divider');
    let imagesContainerWidth;
    let imagesContainerLeftOffset;



    function move(clientX) {
        const offset = clientX - imagesContainerLeftOffset; //450 -- 100
        const percent = offset / imagesContainerWidth * 100; //images 800 reaguje na zmniejszenie przegladarki 800 w dol 
        
        if (offset < 0) {
            return 0;
        } else if (offset > imagesContainerWidth) {
            return imagesContainerWidth;
        } else {
            dividerEl.style.left = `${percent}%`  //zapisuje 49.6791% od 0 do 100% przesuwa pasek
            
            img2ContainerEl.style.width = `${percent}%`; // zapusuje od 0 do 100%  przesuwa zdjecie
            
        }
    }


    function initEvents() {
        handleEl.addEventListener('mousedown', () => {
            dragging = true;
        });

        handleEl.addEventListener('mouseup', () => {
            dragging = false;
        });

        handleEl.addEventListener('touchstart', () => {
            dragging = true;
        });

        handleEl.addEventListener('touchend', () => {
            dragging = false;
        });

        window.addEventListener('mousemove', event => {
            if (dragging) {
                move(event.clientX);
            }
        });

        window.addEventListener('touchmove', event => {
            if (dragging) {
                move(event.touches[0].clientX);
            }
        });
    }

    function adjustImagesSize() { // to sie wykona tylko wtedy gdy zmienimy wielkosc przegladarki max 800 min 150
        imagesContainerWidth = imagesContainerEl.offsetWidth; //wielkosc okna
        imagesContainerLeftOffset = imagesContainerEl.offsetLeft;  //ile pixeli zdjecie jest odsuniete od lewej
        img1El.style.width = imagesContainerWidth + 'px'; 
        img2El.style.width = imagesContainerWidth + 'px';

        
    }

    window.addEventListener('resize', adjustImagesSize);

    adjustImagesSize();
    initEvents();
});
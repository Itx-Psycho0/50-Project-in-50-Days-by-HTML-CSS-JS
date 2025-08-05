const cards = document.querySelectorAll('.card');
const backgroundVideo = document.querySelector('.background-video');
const mainBackgroundVideo = document.querySelector('.main-background-video');
const hideButton = document.querySelector('.hide-button');
const showButton = document.querySelector('.Showcard');
const cardvideo = document.querySelector('.card video source');
const mainVideoSource = mainBackgroundVideo.querySelector('source');
showButton.style.display = 'none'; // Hide "Show card" button on page load

cards.forEach(card => {
    card.addEventListener('click', () => {
        removeActiveClasses();
        card.classList.add('active');
        const h1active = document.querySelector('.h1active');
        
        h1active.style.color = 'transparent';
        // Pause all card videos
        cards.forEach(c => {
            const vid = c.querySelector('video');
            vid.pause();
            vid.currentTime = 0;
        });

        // Play the clicked card's video
        const clickedVideo = card.querySelector('video');
        clickedVideo.play();

        const cardVideoSrc = card.querySelector('video source').getAttribute('src');
        mainBackgroundVideo.querySelector('source').setAttribute('src', cardVideoSrc);
       
        mainBackgroundVideo.load();
        mainBackgroundVideo.play();

    });
})

function removeActiveClasses() {
    cards.forEach(c => c.classList.remove('active'));
}


function hideCard() {
    const activeCard = document.querySelector('.container');

    if (activeCard && hideButton || showButton.style.display === 'none') {
        activeCard.style.opacity = '0';
       
        hideButton.style.display = 'none';
        showButton.style.display = 'block';
        
    }
   
}
function showCard() {
    const activeCard = document.querySelector('.container');

    if (activeCard.style.opacity === '0' && hideButton.style.display === 'none' && showButton) {
        activeCard.style.opacity = '1';
        
        hideButton.style.display = 'block';
        showButton.style.display = 'none';
        
    }
}


const progressBar = document.getElementById('progress');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
const parallaxBg = document.getElementById('parallax-bg');
const modelContainer = document.getElementById('modelContainer');
const models = [
    'model-1.png',
    'model-2.png',
    'model-3.png',
    'model-4.png'
];

let currentActive = 1;

nextButton.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();
});

prevButton.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }
    update();
});

function update() {
    progressBar.style.width = (currentActive - 1) / (circles.length - 1) * 100 + '%';
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    if (currentActive === 1) {
        prevButton.disabled = true;
    } else if (currentActive === circles.length) {
        nextButton.disabled = true;
    } else {
        prevButton.disabled = false;
        nextButton.disabled = false;
    }
    updateModel();
    // updateParallax();
    parallaxEffect();
}
function updateModel() {
        modelContainer.innerHTML = '';
        const img = document.createElement('img');
        img.src = models[currentActive - 1];
        img.classList.add('model');
        modelContainer.appendChild(img);
}

// function updateParallax() {
//       const xOffset = (currentActive - 1) * 10;
//       const yOffset = (currentActive - 1) * 5;
//       parallaxBg.style.transform = `translate(${-xOffset}px, ${-yOffset}px)`;
// }
function parallaxEffect() {
    const shift = (currentActive - 1) * 2; // Background shift amount
    const modelShift = (currentActive - 1) * 1; // Model shift amount (smaller for depth)

    // Parallax background moves more
    parallaxBg.style.transform = `translate(-${shift}px, -${shift}px)`;

    // Model moves slightly but retains central position with shift
    modelContainer.style.transform = `translate(calc(-50% + ${modelShift}px), calc(-50% + ${modelShift}px))`;
}


window.onload = update;
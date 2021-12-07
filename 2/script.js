const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const progressBar = document.getElementById('progress');
const circles = document.querySelectorAll(".circle");
let activeCircles = document.querySelectorAll('.active');
let currentActive = activeCircles.length;
let widthPercentage;

const there = document.getElementById('there');
const Notthere = document.getElementById('Notthere');
// ===============================
nextBtn.addEventListener('click', () => {
    if (currentActive < circles.length) {
        currentActive++;
    }
    update();
});

prevBtn.addEventListener('click', () => {
    if (currentActive > 0) {
        currentActive--;
    }
    update();
})

const update = () => {
    circles.forEach((c, index) => {
        if (index < currentActive) {
            c.classList.add('active');
        } else {
            c.classList.remove('active');
        }
    });

    activeCircles = document.querySelectorAll('.active');

    currentActive = activeCircles.length;

    widthPercentage = ((currentActive - 1) / (circles.length - 1)) * 100;

    if (widthPercentage < 100) {
        widthPercentage += 10;
    };

    widthPercentage += '%';

    progressBar.style.width = widthPercentage;
    there.hidden = true;
    Notthere.hidden = false;

    if (currentActive == 0) {
        prevBtn.disabled = true;

    } else if (currentActive == circles.length) {
        nextBtn.disabled = true;
        there.hidden = false;
        Notthere.hidden = true;
    } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;

    }
}

// ================================
// Light and Dark mode:
const moon = document.querySelector('#moon');
const shine = document.querySelector('#shine');
const body = document.body;

document.addEventListener('DOMContentLoaded', function() {
    const mode = localStorage.getItem('theme');
    if (mode === 'dark') {
        body.classList.add('dark-mode');
        moon.style.display = 'none';
        shine.style.display = 'block';
    } else {
        body.classList.remove('dark-mode');
        moon.style.display = 'block';
        shine.style.display = 'none';
    }
});

moon && moon.addEventListener('click', function(event) {
    event.preventDefault();
    moon.style.display = 'none';
    shine.style.display = 'block';
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
});

shine && shine.addEventListener('click', function(event) {
    event.preventDefault();
    shine.style.display = 'none';
    moon.style.display = 'block';
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
});

// cardResult:
const cards = document.querySelectorAll('.result_card');
const imgs = document.querySelectorAll('#clear');

imgs.forEach((img, index) => {
    img.addEventListener('click', function() {
        if (cards[index]) {
            cards[index].style.display = 'none';
        }
    });
});

// chekbox:
function toggleCheckbox(card) {
    const checkbox = card.querySelector('input[type="checkbox"]');
    if (checkbox) {
        checkbox.checked = !checkbox.checked;
    }
}
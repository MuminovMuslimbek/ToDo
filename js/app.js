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

//  Homework:
const form = document.querySelector('#form')
const input = document.querySelector('#input')
const result = document.querySelector('.result')
const btn = document.querySelector('#btn')

const resultCard = JSON.parse(localStorage.getItem("value")) || []

function CardResult(data) {
    return `
    <div class="result_card">
          <div class="textResult" onclick="toggleCheckbox(this)">
              <input id="checkbox" type="checkbox">
              <p id="text">${data.list}</p>
          </div>
          <img id="clear" src="images/icon/clearIcon.svg" alt="clearIcon">
    </div>`
}

btn && btn.addEventListener('click', function(event) {
    event.preventDefault()

    let object = {
        list: input.value
    }

    if (input.value !== '') {
        resultCard.unshift(object)
        const card = CardResult(object);
        result.innerHTML += card;
    }
    localStorage.setItem('value', JSON.stringify(resultCard))
    form.reset()
});

resultCard.forEach((arg) => {
    const card = CardResult(arg);
    result.innerHTML += card;
});

// Clear:
const clear = document.getElementById('clear');
clear && clear.addEventListener('click', function() {
    result.innerHTML = '';
    resultCard.length = 0;
    localStorage.clear();
});

function toggleCheckbox(card) {
    const checkbox = card.querySelector('input[type="checkbox"]');
    if (checkbox) {
        checkbox.checked = !checkbox.checked;
    }
}
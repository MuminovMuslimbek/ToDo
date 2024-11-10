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

// Homework:
const form = document.querySelector('#form');
const input = document.querySelector('#input');
const result = document.querySelector('.result');
const btn = document.querySelector('#btn');
const clear = document.querySelector('#clear');

function validate(input) {
    if (input.value.length < 3) {
        alert('Iltimos qiymat 4ta dan kam bo\'lmasin');
        input.focus();
        input.style.borderColor = 'red';
        return false;
    }
    return true;
}

function createCard(data) {
    return `
    <div class="result_card" data-id="${data.id}">
          <div class="textResult" onclick="toggleCheckbox(this)">
              <input id="checkbox" type="checkbox">
              <p id="text">${data.name}</p>
          </div>
          <img class="delete" src="images/icon/clearIcon.svg" alt="clearIcon" data-id="${data.id}">
    </div>`;
}

function getDataFromLocalStorage() {
    let data = [];
    if (localStorage.getItem('todos')) {
        data = JSON.parse(localStorage.getItem('todos'));
    }
    return data;
}

btn && btn.addEventListener('click', function(event) {
    event.preventDefault();
    const isValid = validate(input);
    if (!isValid) {
        return;
    }
    const todo = {
        id: Date.now(),
        name: input.value
    };
    const card = createCard(todo);
    result.innerHTML = card + result.innerHTML;
    input.value = '';

    let todos = getDataFromLocalStorage();
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    attachDeleteEvents();
});

document.addEventListener('DOMContentLoaded', function() {
    let todos = getDataFromLocalStorage().reverse();
    todos.forEach(todo => {
        let card = createCard(todo);
        result.innerHTML += card;
    });
    attachDeleteEvents();
});

function attachDeleteEvents() {
    let buttons = document.querySelectorAll('.delete');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            let isDelete = confirm('Rostdan ham o`chirmoqchimisiz??');
            if (isDelete) {
                let id = this.getAttribute('data-id');
                this.parentNode.remove();
                if (id) {
                    let todos = getDataFromLocalStorage();
                    todos = todos.filter(value => value.id != id);
                    localStorage.setItem('todos', JSON.stringify(todos));
                }
            }
        });
    });
}

clear && clear.addEventListener('click', function(event) {
    event.preventDefault();
    let isClear = confirm('Rostdan ham hammasini o\'chirmoqchimisiz??');
    if (isClear) {
        result.innerHTML = '';
        localStorage.removeItem('todos');
    }
});
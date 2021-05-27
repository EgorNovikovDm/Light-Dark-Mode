const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box')

// Dark or Light images
function imageMode (color) {
    image1.src = `img/undraw_feeling_proud_qne1_${color}.svg`;
    image2.src = `img/undraw_react_y7wq_${color}.svg`;
    image3.src = `img/undraw_Secure_server_re_8wsq_${color}.svg`;
}

// Dark Mode
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 /50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList = 'fas fa-moon';
    imageMode('dark');

}
// Light Mode
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 /50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList = 'fas fa-sun';
    image1.src = 'img/undraw_feeling_proud_qne1_light.svg'
    image2.src = 'img/undraw_react_y7wq_light.svg'
    image3.src = 'img/undraw_Secure_server_re_8wsq_light.svg'
    imageMode('light');
}

// Switch Theme Dynamically
function switchTheme(event) {
    if(event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode()
    }
}

// Event Listner
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage
const currentThem = localStorage.getItem('theme');
if (currentThem) {
    document.documentElement.setAttribute('data-theme', currentThem);
    if (currentThem === 'dark') {
        toggleSwitch.checked = true;
        darkMode();
    }
}
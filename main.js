const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i'); // Corrected selector
const mobileVersion = document.querySelector('.mobile-version');
const header = document.querySelector('.header-section');
const borderNone = document.querySelector('.left-site-wrapper');
const body = document.body;

toggleBtn.onclick = function () {
    mobileVersion.classList.toggle('active');
    header.classList.toggle('transparent-black-1');
    borderNone.classList.toggle('border-none');
    body.classList.toggle('transparent-black');

    const isActive = mobileVersion.classList.contains('active');
    toggleBtnIcon.classList = isActive
        ? 'fa-solid fa-xmark text-3xl cursor-pointer'
        : 'fa-solid fa-bars text-3xl cursor-pointer';
}

// middle section Js
const spans = document.querySelectorAll('.heading-p h2 span');
let index = 0;
let fadingOut = false;

function revealSpans() {
    if (!fadingOut) {
        if (index < spans.length) {
            spans[index].style.opacity = '1';
            index++;
        } else {
            fadingOut = true; // Start fading out
            index = spans.length - 1;
        }
    } else {
        if (index >= 0) {
            spans[index].style.opacity = '0';
            index--;
        } else {
            fadingOut = false; // Start fading in again
            index = 0;
        }
    }
}

function startRevealLoop() {
     revealSpans(); // Initial reveal
    setInterval(revealSpans, 200); // Repeatedly call revealSpans every 200 milliseconds
}

    startRevealLoop();
    // weekend mode hide and display

    const checkbox = document.getElementById('check-5');
    const mainContainer = document.getElementById('middile-container');
    const weekendMode = document.getElementById('weekend-mode');
    const imageOne = document.getElementById('image-1');
    const imageTwo = document.getElementById('image-2');

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            // Checkbox is checked, hide main-container and show weekend-mode
            mainContainer.style.display = 'none';
            weekendMode.style.display = 'block';
            imageOne.style.display = 'none';
            imageTwo.style.display = 'block'
        } else {
            // Checkbox is not checked, show main-container and hide weekend-mode
            mainContainer.style.display = 'block';
            weekendMode.style.display = 'none';
            imageOne.style.display = 'block';
            imageTwo.style.display = 'none';
        }
    });



// Add event listener to each button

let btnDark = document.querySelector('.input__btn--dark');
let btnLight = document.querySelector('.input__btn--light');

btnDark.addEventListener('click', btnDarkSelect);
btnLight.addEventListener('click', btnLightSelect);


function btnDarkSelect() {
    document.body.style.backgroundColor = '#333';
    document.body.style.color = '#fff';
}

function btnLightSelect() {
    document.body.style.backgroundColor = '#fff';
    document.body.style.color = '#333';
}


// On click, change styling for various onpage elements
let colorInput = document.querySelector('.inputField');
let main = document.querySelector('.main');
console.log(colorInput.value);
document.querySelector('.inputField').addEventListener('submit', (e) =>{
    e.preventDefault();
    main.style.backgroundColor = document.querySelector('#background').value;
    let color = tinycolor(document.querySelector('#background').value);
    checkColor(color);
});
//reset button

document.querySelector('#reset').addEventListener('click', () => {
    main.style.backgroundColor = "#fff";
    let color = tinycolor(main.style.backgroundColor);
    checkColor(color);
});

//check Color for font Color Change

let label = document.querySelector('#backgroundLabel');
let color = tinycolor(document.querySelector('#background').value);

function checkColor(color) {
    if (color.isDark()) {
        label.style.color = "#fff";
    } 
    if (color.isLight()) {
        label.style.color = "#000";
    }
}
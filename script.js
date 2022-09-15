const hexColorInput = document.getElementById('hexColor');
const redInput = document.getElementById('red');
const greenInput = document.getElementById('green');
const blueInput = document.getElementById('blue');

const rgbError = document.getElementById('rgbError');
const hexColorError = document.getElementById('hexColorError');
//const hexInputError = document.getElementById('hexInputError');

const randomGenerateColor = document.getElementById('randomGenerateColor');
const coloredDiv = document.getElementById('coloredDiv');

const setHexBtn = document.getElementById('setHexBtn');
const setRGBBtn = document.getElementById('setRGBBtn');
const resetBtn = document.getElementById('resetBtn');

let myInterval;


setHexBtn.addEventListener('click', () => {
    let input = hexColorInput.value;
    checkHex(input);

});

setRGBBtn.addEventListener('click', () => {
    let red = redInput.value;
    let green = greenInput.value;
    let blue = blueInput.value;

    if(!red || !green || !blue){
        rgbError.classList.remove('hide');
    } else{
        rgbError.classList.add('hide');
    }

    coloredDiv.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});

resetBtn.addEventListener('click', () => {
    hexColorInput.value = '';
    redInput.value = '';
    greenInput.value = '';
    blueInput.value = '';
    coloredDiv.style.backgroundColor = '';
});

randomGenerateColor.addEventListener('change', e => {
    if(e.target.checked){
        //console.log('checked');
        myInterval = setInterval(setRandomDiv, 3000);
    } else{
        clearInterval(myInterval);
        //console.log('not checked');
    }
});

function setRandomDiv(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    //console.log(`rgb(${red}, ${green}, ${blue})`);
    coloredDiv.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function isHexValid(input){
    const regex = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;
    if(!input.match(regex)){
       // hexInputError.classList.remove('hide');
        return 0;
    } else{
       // hexInputError.classList.add('hide');
        return 1;
    }

}

function checkHex(input){

    if(!input){
        hexColorError.classList.remove('hide');
    } else{
        hexColorError.classList.add('hide');
    }

    if(input[0] !== '#'){
        input = '#' + input;
    }

    if(isHexValid(input)){
        coloredDiv.style.backgroundColor = input;
    } else{
        hexColorInput.value = '';
    }
}


const passwordPlacement = document.querySelector('.password-placement');
const passwordCondition = document.querySelector('.password-condition');
const copyButton = document.querySelector('.button');
const passwordLength = document.querySelector('#pass-length');
const characters = "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#%&";
const number = "123456789" // next version for customizing options
const symbols = "!@#%&" // next version for customizing numbers
const body = document.querySelector('section');

let slider = document.querySelector('.slider');
slider.value = 4 // minimum by default 
passwordLength.innerHTML = slider.value

slider.oninput = (e) => {
    passwordLength.innerHTML = slider.value
    // console.log(slider.value)
    generator(slider.value);
    if (slider.value <= 6){
        body.style.background = "#d1364e"
        passwordCondition.innerHTML = "Weak Password"
    } else if (slider.value <= 10){
        body.style.background = "#be4e3a"
        passwordCondition.innerHTML = "Fairly Strong Password"
    } else {
        body.style.background = "#1c805a"
        passwordCondition.innerHTML = "Strong Password"
    }
}

copyButton.addEventListener('click', (e)=>{
    copyToClipboard();
    alert("Password Copied to clipboard!")
})


function generator(length) {
    let result = '';
    for ( let i = 0; i < length; i++ ) {
        result = result + characters.charAt(Math.floor(Math.random() * characters.length));
        passwordPlacement.innerHTML = result
    }
    return result;
}

// console.log(characters[Math.floor(Math.random() * characters.length)])   **** Simple Logic


function copyToClipboard(){
    let range = document.createRange();
    range.selectNode(document.querySelector('.password-placement'));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}



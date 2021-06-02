
const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    //grab content from feet input
let feet = document.querySelector('#feet');
let inches = document.querySelector('#inches');
let inche= document.querySelector('#meters')

const results = document.querySelector('#results');
    e.preventDefault();

    feet = parseInt(feet.value);
    inches = parseInt(inches.value);
    meters = parseInt(meters.value);

    if (isNaN(feet) || isNaN(inches) || isNaN(meters)){
        results.textContent = "Please enter a valid number!";
    } else if (feet < 0 ) {
        results.textContent = "Please enter a feet value > 0";
    } else if (inches < 0 || inches >= 12) {
        results.textContent = "Please enter an inch value between 0 and 12";
    }else if(meters<0){
        results.textContent= "Please enter a meter value>0 ";
    }
     else {
        //make conversion to centimers
        //cm = inches * 2.54
        let totalInches = (feet*12) + inches;
        let totalMeter =(meters*100)+ meters;
        results.textContent = `${totalMeter} cm`;
        results.textContent = `${totalInches} cm`;
        document.querySelector('#feet').value = '';
        document.querySelector('#inches').value = '';
        document.querySelector('#meters').value = '';
    }
})
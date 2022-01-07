const input = document.querySelector('#celcius');
const K = 273.15;

input.addEventListener('input', c2k);

function c2k(e) {
    if(!e.target.value || e.target.value === '') {
        document.getElementById("kelvin").innerHTML = '';
        return;
    }

    let celcius = parseInt(e.target.value);
    let kelvin = celcius + K;
    document.getElementById("kelvin").innerHTML = `${kelvin}K`;
}
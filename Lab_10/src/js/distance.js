const input = document.querySelector('#kilometers');
const coeficient = 0.62137

input.addEventListener('input', k2m);

function k2m(e) {
    if(!e.target.value || e.target.value === '') {
        document.getElementById("miles").innerHTML = '';
        return;
    }

    let kilometers = parseInt(e.target.value);
    let miles = kilometers * coeficient;
    document.getElementById("miles").innerHTML = `${miles} miles`;
}
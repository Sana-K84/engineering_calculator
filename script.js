let input = document.querySelector('.input');
console.log(input.textContent)
let power = "";

function insert(num) {
    if (input.textContent == 0) {
        input.textContent = "";
        input.textContent += num;
    } else
        input.textContent += num;
}
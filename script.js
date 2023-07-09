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



//Синусы и косинусы
function f(name) {
    if (name == 'sin') {
        if (document.querySelector('.type').textContent == "deg") {
            //В градусах
            input.textContent = parseFloat(Math.sin(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {
            //В радианах
            input.textContent = parseFloat(Math.sin(eval(input.textContent)).toFixed(8).toString());
        }
    }
    if (name == 'cos') {
        if (document.querySelector('.type').textContent == "deg") {
            //В градусах
            input.textContent = parseFloat(Math.cos(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {
            //В радианах
            input.textContent = parseFloat(Math.cos(eval(input.textContent)).toFixed(8).toString());
        }
    }
    if (name == 'tan') {
        if (document.querySelector('.type').textContent == "deg") {
            //В градусах
            input.textContent = parseFloat(Math.tan(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {
            //В радианах
            input.textContent = parseFloat(Math.tan(eval(input.textContent)).toFixed(8).toString());
        }
    }
    if (name == 'ctg') {
        if (document.querySelector('.type').textContent == "deg") {
            //В градусах
            input.textContent = parseFloat(1 / Math.tan(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {
            //В радианах
            input.textContent = parseFloat(1 / Math.tan(eval(input.textContent)).toFixed(8).toString());
        }
    }
}
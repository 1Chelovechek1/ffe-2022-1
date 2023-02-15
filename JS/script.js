const button = document.querySelector('.button')
const mon = document.querySelector('.money')
const input1 = document.querySelector('.input1')
const input2 = document.querySelector('.input2')
const input3 = document.querySelector('.input3')

button.addEventListener('click', function(){
    mon.innerText = 'Hello, where is my money?';
    const val1 = Number(input1.value);
    const val2 = Number(input2.value);
    const val3 = Number(input3.value);
    let val4 = Math.pow(val1, 2);
    let val5 = Math.pow(val2, 2);
    let val6 = Math.pow(val3, 2);

    if (isNaN(val1) || isNaN(val2) || isNaN(val3)) {
        console.log('Некоректно написаны размеры, треугольник не возможно создать')
    } else if (val1 === val2 && val2 === val3) {
        console.log('Равносторонний');
    } else if (val1 + val2 < val3 || val3 + val2 < val1 || val1 + val3 < val2) {
        console.log('Треугольник не возможно создать');
    } else if (val1 === val2 || val2 === val3 || val1 === val3) {
        console.log('Равнобедренный');
    } else if (val4 + val5 == val6 || val6 + val5 == val4 || val4 + val6 == val5) {
        console.log('Египетский');
    } else {
        console.log('Обычный треугольник');
    }
})
const els = document.querySelectorAll('.test');

for(let el of els){
    el.addEventListener('click', function() {
        this.style.backgroundColor = 'yellow';
        this.innerText = 'GO';
        this.style.color = 'blue';
        if(1<0){
            console.log(el)
        }else{
            console.log(els)
        }

    })
}
//     el.addEventListener('click', (ev) => {
        
//         const val = 'yellow';

//         el.style.backgroundColor = val;
// })
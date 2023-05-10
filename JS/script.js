let but = document.querySelector('.showName');
let p = document.querySelector('.result');

but.addEventListener('click', function() {
  let a = document.querySelector('.firstName').value;
  let b = document.querySelector('.lastName').value;
  let c = document.querySelector('.middleName').value;
  p.innerText = `${a} ${b.toUpperCase().substring(0, 1)}. ${c.toUpperCase().substring(0, 1)}.`;
  
});

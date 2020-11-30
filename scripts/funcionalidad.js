document.querySelector('#button_pizza').addEventListener('click', function() {openTab('pizzas')});
document.querySelector('#button_hamb').addEventListener('click', function() {openTab('hamburguesas')});
document.querySelector('#button_drinks').addEventListener('click', function() {openTab('bebidas')});

function openTab (cad) {
  let x = document.getElementsByClassName('tabs');
  for (let i = 0; i < x.length; i++) {
      x[i].style.display = 'none'; 
  }
  document.querySelector(`#${cad}`).style.display = 'block';
  clean();
}

document.querySelector('.close').addEventListener('click', () => {
  document.querySelector('#modal').style.display = 'none';
  document.querySelector('.modal__text').innerHTML = '';
  document.querySelector('.modal__titulo').innerHTML = '';
});

document.querySelector('#modal').addEventListener('click', (e) => {
  if (e.target.id == 'modal') {
    modal.style.display = 'none';
    document.querySelector('.modal__text').innerHTML = '';
    document.querySelector('.modal__titulo').innerHTML = '';
  }
}); 

export function clean () {
  let tamaño = document.getElementsByClassName('form__input');
  for (let j = 0; j < tamaño.length; j++) {
    tamaño[j].checked = false;
  } 
}
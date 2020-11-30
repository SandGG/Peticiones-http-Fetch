import {clean} from './funcionalidad';
import {Orden} from './orden';
import {Cliente} from './cliente';

var tipo = document.getElementsByClassName('form__input');
const pedirOrden = new Orden ();

document.querySelector('#agregarMenu').addEventListener('click', () => {
  document.querySelector('.modal__text').innerHTML += pedirOrden.getDatos(tipo);
  clean();
});

document.querySelector('#terminarMenu').addEventListener('click', () => {
  document.querySelector('#modal').style.display = 'flex';

  let nombre = document.querySelector('#nombre').value;
  if (nombre != '') {
    let pago = document.querySelector('#opc').value;
    const addCliente = new Cliente(nombre, pago);
    document.querySelector('.modal__titulo').innerHTML += addCliente.imprimir();

    document.querySelector('#nombre').value = '';
    document.querySelector('#opc').selectedIndex = 0;
    clean();
  } else {
    document.querySelector('.modal__titulo').innerHTML = 'No se almaceno, faltó nombre';
    document.querySelector('.modal__text').innerHTML = '';
  }
}); 
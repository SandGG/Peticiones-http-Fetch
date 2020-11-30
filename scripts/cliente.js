export class Cliente {
    constructor (nombre, pago) {
      this.nombre = nombre;
      this.pago = pago;
    }
  
    imprimir () {
      return `El cliente ${this.nombre}, uso el metodo de pago: ${this.pago}`;
    }
}
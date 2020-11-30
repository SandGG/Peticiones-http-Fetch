export class Orden {

  getDatos (tipo) {
    let tipoList = []
    
    for (let i = 0; i < tipo.length; i++) {
      if (tipo[i].checked) {
        tipoList.push(tipo[i].value);
      }
    }
    let str = `<p class="modal__text"> Compro ${tipoList[0]} de: `;
    for (let i = 1; i < tipoList.length; i++) {
      if (i == (tipoList.length-1)) {
        str += `${tipoList[i]}.</p>`;
      } else {
        str += `${tipoList[i]}, `;
      }
    }
    return str;
  }

}
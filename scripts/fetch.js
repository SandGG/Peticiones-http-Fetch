const search = document.querySelector('#search');
const res = document.querySelector('#res');

search.addEventListener('click', () => {   
    const isResponseOk = (response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json()
    }
      
    fetch('/static/users.json')
        .then(response => isResponseOk(response))
        .then(data => searchUser(data))
        .catch(err => res.innerHTML = `ERROR: ${err.message}`);
});

function searchUser (dataParse) {
    let nameUser = document.querySelector('#nameUser').value;
    let passUser = document.querySelector('#passUser').value;
    
    for (let item of dataParse) {
        if (nameUser == item.user && passUser == item.pass) {
            return writeData(item)
        } else {
            res.innerHTML = '<p> Data not found </p>';
        }
    } 
}

const writeData = (datos) => {
    cleanInputs();

    let text = `<table class="table">
                    <tr class="table__tr">
                        <td class="table__td">ID</td>
                        <td class="table__td">User</td>
                        <td class="table__td">Password</td>
                        <td class="table__td">Name</td>
                        <td class="table__td">Description</td>
                    </tr>
                    <tr class="table__tr">
                        <td class="table__td">${datos.id}</td>
                        <td class="table__td">${datos.user}</td>
                        <td class="table__td">${datos.pass}</td>
                        <td class="table__td">${datos.name}</td>
                        <td class="table__td">${datos.descrip}</td>
                    </tr>
                </table>`;   
    return res.innerHTML = text;
}

function cleanInputs () {
    let input = document.getElementsByClassName('form__input');
    for (let i = 0; i < input.length; i++) {
        input[i].value = '';
    }
}
const search = document.querySelector('#search');
const res = document.querySelector('#res');

const isResponseOk = (response) => {
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
}

search.addEventListener('click', () => {         
    fetch('/static/users.json')
        .then(function (response) {
            return isResponseOk(response);
        })
        .then(function (data) {
            searchUser(data);
        })
        .catch(function (err) {
            res.innerHTML = `ERROR: ${err.message}`;
        });
});

function searchUser (dataParse) {
    let nameUser = document.querySelector('#nameUser').value;
    let passUser = document.querySelector('#passUser').value;
    
    for (let item of dataParse) {
        if (nameUser == item.user && passUser == item.pass) {
            writeData(item);
            return;
        } 
    } 
    res.innerHTML = '<p> Data not found </p>';
}

function writeData (datos) {
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
    res.innerHTML = text;
}

function cleanInputs () {
    let input = document.getElementsByClassName('form__input');
    for (let i = 0; i < input.length; i++) {
        input[i].value = '';
    }
}
function loadData() {
    let request = sendRequest('sessions/list', 'GET', '')
    let table = document.getElementById('session-table');
    table.innerHTML = "";
    request.onload = function(){
        
        let data = request.response;
        console.log(data);
        data.forEach((element, index) => {
            table.innerHTML += `
                <tr>
                    <th>${element.id}</th>
                    <td>${element.textId}</td>
                    <td>${element.name}</td>
                    <td>${element.time}</td>
                    <td>${element.words}</td>
                    <td>
                        <button type="button" class="btn btn-primary" onclick='window.location = 
                        "sessions-form.html?idsession=${element.id}"'>Edit</button>
                    </td>
                </tr>
                `
        });
    }
    request.onerror = function(){
        table.innerHTML = `
            <tr>
                <td colspan="5">Error getting data.</td>
            </tr>
        `;
    }
}


function saveSession() {
    let time = document.getElementById('session-time').value
    let id = document.getElementById('session-id').value
    let textId = document.getElementById('session-textId').value
    let name = document.getElementById('session-name').value
    let words = document.getElementById('session-words').value
    let data = {'id': id,'time':time,'name': name, 
        'words': words, 'textId': textId}
    console.log(data);
    let request = sendRequest('sessions/', id ? 'PUT' : 'POST', data)
    request.onload = function(){
        alert('Session created or updated successfully')
        window.location = 'sessions.html';
    }
    request.onerror = function(){
        alert('An error has occurred saving changes.')
    }
}

function loadSession(idsession) {
    let request = sendRequest('sessions/list/'+idsession, 'GET', '')
    let time = document.getElementById('session-time')
    let id = document.getElementById('session-id')
    let textId = document.getElementById('session-textId')
    let name = document.getElementById('session-name')
    let words = document.getElementById('session-words')
    request.onload = function(){
        let data = request.response;
        //Se actualiza el valor de las variables según el JSON
        console.log(data);
        id.value = data.id
        time.value = data.time
        textId.value = data.textId
        name.value = data.name
        words.value = data.words
    }
    request.onerror = function(){
        alert("Error al recuperar los datos.");
    }
}

function deleteSession() {
    let id = document.getElementById('session-id').value
    let request = sendRequest('sessions/'+ id , 'DELETE', '')
    request.onload = function(){
        alert('Successfully deleted session')
        window.location = 'sessions.html';
    }
    request.onerror = function(){
        alert('Error saving changes')
    }
}
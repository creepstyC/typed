function loadData() {
    let request = sendRequest('texts/list', 'GET', '')
    let table = document.getElementById('text-table');
    table.innerHTML = "";
    request.onload = function(){
        
        let data = request.response;
        console.log(data);
        data.forEach((element, index) => {
            table.innerHTML += `
                <tr>
                    <th>${element.id}</th>
                    <td>${element.content}</td>
                    <td>
                        <button type="button" class="btn btn-primary" onclick='window.location = 
                        "texts-form.html?idtext=${element.id}"'>Edit</button>
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

function saveText() {
    let id = document.getElementById('text-id').value
    let content = document.getElementById('text-content').value
    let data = {'id': id,'content':content}
    console.log(data);
    let request = sendRequest('texts/', id ? 'PUT' : 'POST', data)
    request.onload = function(){
        alert('Text created or updated successfully')
        window.location = 'texts.html';
    }
    request.onerror = function(){
        alert('An error has occurred saving changes.')
    }
}

function loadText(idtext) {
    let request = sendRequest('texts/list/'+idtext, 'GET', '')
    let id = document.getElementById('text-id')
    let content = document.getElementById('text-content')
    request.onload = function(){
        let data = request.response;
        console.log(data);
        id.value = data.id
        content.value = data.content
    }
    request.onerror = function(){
        alert("Error getting data.");
    }
}

function deleteText() {
    let id = document.getElementById('text-id').value
    let request = sendRequest('texts/'+ id , 'DELETE', '')
    request.onload = function(){
        alert('Successfully deleted text')
        window.location = 'texts.html';
    }
    request.onerror = function(){
        alert('Error saving changes')
    }
}
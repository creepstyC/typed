const url = "http://localhost:8090/"

function sendRequest(endPoint, method, data) {
    let request = new XMLHttpRequest();
    request.open(method, url + endPoint);
    request.responseType = 'json';
    request.setRequestHeader('Content-Type', 'application/json');

    if (method === 'POST' || method === 'PUT') {
        request.send(JSON.stringify(data));
    } else {
        request.send();
    }
    
    request.onerror = function() {
        console.error("An error occurred with the request.");
        alert("Error: Unable to complete the request.");
    };

    return request;
}
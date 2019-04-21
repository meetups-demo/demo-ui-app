import config from './config';
/* eslint-disable no-undef */
function markets(cb) {
    return fetch(`${config.marketsURL}/markets`, {
        accept: "application/json"
    })
        .then(checkStatus)
        .then(parseJSON)
        .then(cb);
}

function products(cb) {
    return fetch(`${config.productsURL}/products`, {
        accept: "application/json"
    })
        .then(checkStatus)
        .then(parseJSON)
        .then(cb);
}

function user(cb) {
    return fetch(`${config.userURL}/user`, {
        accept: "application/json"
    })
        .then(checkStatus)
        .then(parseJSON)
        .then(cb);
}
function checkStatus(response) {
    console.log(response)
    if (response.status >= 200 && response.status < 300 && response.ok) {
        return response;
    }
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
}

function parseJSON(response) {
    return response.json();
}

const Client = { markets , products, user };
export default Client;

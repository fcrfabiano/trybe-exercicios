// const fetch = require('node-fetch');

const url = `https://api.coincap.io/v2/assets?limit=10`;
const method = {
    method: 'GET',
    headers: {
        'Accept-Encoding': 'deflate',
        'Content-Type': 'application/json'
    },
};

async function load() {
    const cryptos = await fetch(url, method)
    .then(response => response.json())
    .then(crypto => crypto.data);

    const ul = document.getElementById('list');

    cryptos.forEach(crypto => {
        const { symbol, name, priceUsd } = crypto;
        const price = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(priceUsd);
        const li = document.createElement('li');
        li.innerText = `${name} (${symbol}): ${price}`;

        ul.appendChild(li);
    });
}

document.onload = load();
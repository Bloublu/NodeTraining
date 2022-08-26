const axios = require('axios');

console.log('ca a marché, trop cool');

async function main (){
    
    const currency = process.argv[2] ? process.argv[2].toUpperCase() : 'USD';
    try {

        const { data } = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');

        if ( !data.bpi[currency]) {
            throw new Error('Devise Inconnue'); 
        }
        const rate = data.bpi[currency].rate;
        const updateDate = data.time.updated;
        console.log(`> 1 BTC = ${rate} ${currency} (${updateDate})`);
        console.log(currency);
    } catch (err) {
        console.log(err.toString());
    }
}

main();
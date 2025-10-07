// convert bgn to eur. 1.9558
function bgnToEur(amountBGN, currency){
    const currencyRate = {
        usd: 1.76,
        eur: 1.9558,
        gbp: 2.03,
        chf: 1.69
    };
    if(!currencyRate[currency]){
        currency='eur';
    }
    return amountBGN*currencyRate[currency];
}

console.log(bgnToEur(20, "AUD"));
// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(dollars) {
    let dollarsToEuros = dollars / oneEuroIs.USD;
    return dollarsToEuros * oneEuroIs.JPY;
}

function fromEuroToDollar(euros) {
    return euros * oneEuroIs.USD;
}

function fromYenToPound(yen) {
    let yenToEuros = yen / oneEuroIs.JPY;
    return yenToEuros * oneEuroIs.GBP;
}

// En tu app.js
module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };

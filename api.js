//console.log("Hello World")

//import { get } from "axios"

const API_KEY = '32541a4d11964b23bb022805290371b2'
const EXCHANGE_URL = `https://openexchangerates.org/api/latest.json?app_id=${API_KEY}`
const currencies = `https://openexchangerates.org/api/currencies.json?prettyprint=true&show_alternative=false&show_inactive=true&app_id=${API_KEY}`

//console.log(currencies); // works
// Zoom - 5*bNkT^x
//console.log(EXCHANGE_URL);// works
const getRates = async() => {
    try {
    let response = await axios.get(EXCHANGE_URL)
    buildDropdown(response.data.rates)
    console.log(response.data.rates)
    }catch(error){
        console.log(error)
    }
}

const buildDropdown = async (data) => {
    let response = await axios.get(EXCHANGE_URL)
    const dropdownDiv = document.querySelector('.dropdown')
    const dropdown = document.createElement('select')
    const rates = response.data.rates
    for (const value in rates) {
        console.log (`${value}: ${rates[value]}`);
        let optionElement = document.createElement('option')
        optionElement.innerText = `${rates}` 
        optionElement.setAttribute('value', data.rates)
        dropdown.appendChild(optionElement)
        };

    dropdownDiv.appendChild(dropdown)
}

window.onload = getRates 

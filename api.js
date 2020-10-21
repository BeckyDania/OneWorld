//console.log("Hello World")

//import { get } from "axios"

const API_KEY = '32541a4d11964b23bb022805290371b2'
const EXCHANGE_URL = `https://openexchangerates.org/api/latest.json?app_id=${API_KEY}`
const CURRENCY_URL = `https://openexchangerates.org/api/currencies.json?app_id=${API_KEY}${API_KEY}`

//console.log(CURRENCY_URL); // works
// Zoom - 5*bNkT^x
//console.log(EXCHANGE_URL);// works
const getRates = async() => {
    try {
    let response = await axios.get(CURRENCY_URL)
    buildDropdown(response.data)
    console.log(response.data)
    }catch(error){
        console.log(error)
    }
}

const buildDropdown = async (data) => {
    let response = await axios.get(CURRENCY_URL)
    const dropdownDiv = document.querySelector('.dropdown')
    const dropdown = document.createElement('select')
    dropdown.addEventListener('change', getExchRate)
    const rates = response.data
    for (const value in rates) {
        console.log (`${value}: ${rates[value]}`);
        let optionElement = document.createElement('option')
        optionElement.innerText = `${value}: ${rates[value]}` 
        optionElement.setAttribute('value', data.rates)
        dropdown.appendChild(optionElement)
        };

    dropdownDiv.appendChild(dropdown)
}
const getExchRate = async (event) => {
    console.log(event)
    try {
    const response = await axios.get(EXCHANGE_URL)
    console.log(response)
    }catch(error){
          console.log(error)
    }
}

window.onload = getRates 



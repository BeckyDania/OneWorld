//console.log("Hello World")

const API_KEY = "32541a4d11964b23bb022805290371b2"
const EXCHANGE_URL = 'https://openexchangerates.org/api/latest.json?app_id=${API_KEY}'

//check API quote
const getQuote = async() => {
//       console.log("first")
       try{
           const response = await axios.get(EXCHANGE_URL)
           console.log(response)
       } catch(error) {
           console.log(error)
       }
    }
    console.log(getQuote)
    
    document.querySelector(".quote").addEventListener("click", getQuote)




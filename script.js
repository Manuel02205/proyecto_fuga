
/** const valorCadena = "Instituto Alfa Carabobo"
const valorNumerico = 2024
const valorBooleano = true

const valorIndefinido = undefined
const valorNulo = null

const valorLista = [
    "Oscar",
    "Genesys",
    "Manuel",
    "Alexandra"
]

const Usuario = {
    name: "Oscar",
    age: 70,
    email: "oscarde@gmail.com",
    address: {
        country: "USA",
        state: "Texas",
        city: "San Antonio",
        street: "calle13"
    }
}

if (Usuario.age >= 18) {
    console.log("Se cumple")
} else {
    console.log("No se cumple")
} 

const validateNumber = (num) => {

    if (num % 2 == 0) {
        return "par"
} else {
    return "impar"
}
}

console.log(validateNumber(10)) **/

console.log( axios )

axios.get("https://leonardoapi.onrender.com/songs")
    .then( (res) => {

        res.data.songs.map((song) => {
            
            document.write(song.title)
        })
    })
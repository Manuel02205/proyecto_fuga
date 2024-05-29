
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

console.log(validateNumber(10)) 

console.log( axios )

axios.get("https://leonardoapi.onrender.com/songs")
    .then( (res) => {

        res.data.songs.map((song) => {
            
            document.write(song.title)
        })
    })

    **/

const container = document.getElementById("track-list")

axios.get("https://leonardoapi.onrender.com/songs")
    .then(  (res)  => {


        // No era "res.date", era "res.data"
        res.data.songs.map( (song) => {

            const div = document.createElement("div")
            div.classList.add("song")
            div.innerHTML = `
                <img src="${song.path.front}" alt="">
                <div>
                <p>${song.title}</p>
                <p class="p__author">${song.author}</p>
                </div>
            `

            div.addEventListener("click", () => {

                document.getElementById("current-song-title").innerHTML = song.title
                document.getElementById("current-song-author").innerHTML = song.author

                document.getElementById("current-song-img").setAttribute("src", song.path.front)
                document.getElementById("current-song-audio").setAttribute("src", song.path.audio)

            })

            container.appendChild(div)
        }   )

                

            document.getElementById("play-button").addEventListener("click", () => {

                const audio = document.getElementById("current-song-audio")
                    if (audio.paused) {
                        audio.play()
                    } else {
                        audio.pause()
                    }
            })
            
    }   )




    

const express = require('express')
const PORT = 3000

const app = express();

app.use(express.json())

const pokemones = [
    {
        id: "pikachu",
        nombre: "Pikachu",
        tipo: "electrico",
        ataque: 10,
        velicidad: 10,
        region: "Ate"
    },
    {
        id: "charmander",
        nombre: "Charmander",
        tipo: "Fuego",
        ataque: 14,
        velocidad: 20,
        region: "SJL"
    }
]

// ruta
app.get('/listar-pokemones', (req, res) => {
    res.send(pokemones)
})

// ruta para crear
app.post('/crear-pokemones', (req, res) => {
    const { body } = req
    const { id, nombre, tipo, ataque, velocidad, region} = body

    pokemones.push({
        id, nombre, tipo, ataque, velocidad, region
    })

    res.send("El pokemon a sido registrado correctamente")
})

// ruta para actualizar
app.put('/actulizar-pokemones/:id', (req, res) => {
    const { body, params} = req
    const { id } = params
    const { nombre, tipo, ataque, velocidad, region} = body

    const pokemon = pokemones.find((p) => p.id == id)

    pokemon.nombre = nombre
    pokemon.tipo = tipo
    pokemon.ataque = ataque
    pokemon.velocidad = velocidad
    pokemon.region = region

    res.send("pokemon actulizado correctamente")
})

app.delete('/eliminar-pokemon/:id', (req, res) =>{
    const { id } = params

    const pokemonIndex = pokemones.findIndex((p) => p.id = id)

    pokemones.splice(pokemonIndex, 1);
    
    res.req("pokemon a sido eliminado correctamente")
})

app.listen(PORT, ()=>{
    console.log("mi servidor esta corriendo en el puerto:", PORT)
})


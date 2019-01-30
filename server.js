const express = require('express')
const app = express()

const pokemon_trainers = [
        {
    "id": "04265",
    "name": "Gary",
    "pokemon": ["Bob"],
},
    {
    "id": "07832",
    "name": "Susan",
    "pokemon": ["Nacy", "Drew", "TJ", "Gym", "Tonya"],
    },

]

app.get('/', (req, res) => {
  res.json({pokemon_trainers : pokemon_trainers})
})

app.get('/id', (req, res) => {
  res.json({pokemon_trainers : pokemon_trainers})
})

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})

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
    "pokemon": ["Nacy", "Drew", "TJ", "Gym", "Tonya","Bob"],
    },

]

app.get('/', (req, res) => {
  res.json({pokemon_trainers : pokemon_trainers})
})

app.get('/:id', (req, res) => {
  for(let i = 0; i < pokemon_trainers.length; i++){ //loop through trainers
    const trainer = pokemon_trainers[i] 
    if(trainer.id == req.params.id){ //if id is same as trainers
      return(res.json(trainer)) //return trainer json
    }
  }
  res.json({}) //if no return, return nothing
})

//get all trainers who have a certin pokemon
app.get('/pokemans/:name', (req, res) => {
  let trainers = [] //list of trainers who have the pokemon

  for(let i = 0; i < pokemon_trainers.length; i++){ //loop through trainers

    const trainer = pokemon_trainers[i]

    if(trainer.pokemon.includes(req.params.name)){ //if the trainer has the pokemon
      trainers.push(trainer) //add it to trainers list
    }
  }
  res.json({trainers: trainers}) //return trainers list
})

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})

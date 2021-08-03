const express = require('express')

const app = express()

app.use(express.json())

const users = [
    {id: 1, name: 'aldemar'},
    {id: 2, name: 'felipe'},
    {id: 3, name: 'andrea'}
]


//peticion
app.get('/hola-mundo/', (req, res) => {
    res.send('Hola mundo')
})

app.get('/api/users/', (req, res) => {
    res.send(users)
})

app.get('/api/users/:id/:name/:year/', (req, res) => {
    res.send(req.params)
})

app.get('/api/users/:id/', (req, res) => {
    let user = users.find(u => u.id === parseInt(req.params.id));
    if(!user) res.status(404).send('usuario no existe...');
    res.send(user);
})

app.post('/api/users/', (req, res) => {
    const user = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(user);
    res.send(user);
})


const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`escuchando en el puero ${port}...`)
})



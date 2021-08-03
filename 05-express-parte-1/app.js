const express = require('express')
const app = express()

const Joi = require('joi')

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
    let user = userExists(req.params.id)
    if(!user) res.status(404).send('usuario no existe...');
    res.send(user);
})

app.post('/api/users/', (req, res) => {
    let {error, value} = userNameValidate(req.body.name)
    if(!error){
        const user = {
            id: users.length + 1,
            name: req.body.name
        };
        users.push(user);
        res.send(user);
    }else{
        const messageError = error.details[0].message
        res.status(400).send(messageError)
    }
})

app.put('/api/users/:id', (req, res) => {
    let user = userExists(req.params.id)
    if(!user){
        res.status(404).send('usuario no existe')
    } 
    else{
        let {error, value} = userNameValidate(req.body.name)
        
        if(!error){
            console.log(value)
            user.name = value.name
            res.send(user);
        }
        else{
            console.log(value)
            const messageError = error.details[0].message
            res.status(400).send(messageError)
        }
    }
    
})

app.delete('/api/users/:id',(req, res) => {
    let user = userExists(req.params.id)
    if(user){
        const index = users.indexOf(user)
        users.splice(index, 1)
        afirmacionUserDelete = (`user "${user.name}" successfully removed`)
        res.send({user, afirmacionUserDelete})
        return
    }else{
        res.status(400).send('dont exists user')
    }
})

//metodo para hacer validacion
function userExists(id) {
    return user = users.find(u => u.id === parseInt(id));
}

function userNameValidate(nameValidate){
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required()
    })
    return schema.validate({name: nameValidate})
}

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`escuchando en el puero ${port}...`)
})



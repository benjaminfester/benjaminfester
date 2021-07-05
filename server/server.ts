import express from 'express';
import cors from 'cors'

const app = express()

if(process.env.NODE_ENV !== 'production') {
    app.use(cors())
}

app.get('/', (req, res) => {
    res.send('ok')
})

app.post('/api/register', (req, res) => {
    console.log(req.body)

    res.json({status: 'ok'})
})

app.post('/api/login', (req, res) => {
    
})

app.listen(1337)
const express = require('express')
const path = require('path')


const app = express()
app.use(express.static('public'))

app.listen(3000)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/questions', function(req, res) {
    if (!req.xhr) {
        res.status(401).send({ message: 'Access Denied!' })
        return;
    }
    res.status(200).sendFile(path.join(__dirname, 'resources', 'questions.json'))
})

app.get('/test', (req, res) => {
    res.json({ message: 'test' })
})
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const morgan = require("morgan")
const mongodb = require('mongodb')
const app = express()
const config = require("../conf/config.js") 
app.use(morgan("combined"))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors())

async function loadPost() {
    const client = await mongodb.MongoClient.connect
    (config.URI, {
        useNewUrlParser: true
    });
    return client.db('wizard').collection('posts')
}

app.get('/posts', async (req, res) => {
    const posts = await loadPost()
    res.send(await posts.find({}).toArray())
})

app.post('/posts', async (req, res) => {
    var client = await loadPost()
    var title = req.body.title
    var desc = req.body.description
    if (title && desc) {
        await client.insertOne({
            title: title,
            description: desc,
            createdAt: new Date()
        })
        res.status(201).send()
    }
    res.status(204).send()
})

app.get('posts/:id', async (req, res) => {
    var client = await loadPost()
    client.findById(req.params.id, 'title description', function (error, post) {
        console.log(post)
    })
})
// app.put('post/:id', (req, res) => {
//     var client = await loadPost()
//     var id = req.params.id

// })
app.listen(process.env.PORT || 8081)
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const morgan = require("morgan")
const mongodb = require('mongodb')
const app = express()

app.use(morgan("combined"))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors())

async function loadPost() {
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://mhalit:uorT7X8QIKAcyAL4@mhalit-gzjpa.mongodb.net/posts', {
        useNewUrlParser: true
    });
    return client.db('wizard').collection('posts')
}

app.get('/posts', async (req, res) => {
    const posts = await loadPost()
    res.send(await posts.find({}).toArray())
})

app.post('/post', async (req, res) => {
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

app.listen(process.env.PORT || 8081)
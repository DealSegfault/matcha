const mongo = require("mongoose")
const Schema = mongo.Schema

var PostSchema = new Schema({
    title: String,
    description: String
})

var Post = mongo.model("Post", PostSchema)
module.exports = Post
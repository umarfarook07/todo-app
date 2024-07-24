const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://umarkhaji456:umaryas123@cluster0.mv6byn5.mongodb.net/todo')
    .then(() => {
    console.log('Connected to database sucuessfully')
})
const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    isCompleted: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}

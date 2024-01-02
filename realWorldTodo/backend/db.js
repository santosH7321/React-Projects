const mongoose = require("mongoose");
const { string } = require("zod");
mongoose.connect("");
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}
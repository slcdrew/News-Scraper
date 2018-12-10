var mongoose = require("mongoose");

//Create schema
var Schema = mongoose.Schema;


// /Create notes schema
var NoteSchema = new Schema({
    title: String,
    body: String
});

var Note = mongoose.model("Note", NoteSchema);

module.exports = Note;
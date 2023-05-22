const mongoose = require("../db");

const notesSchema = new mongoose.Schema({
  noteId: String,
  title: String,
  desc: String,
});

module.exports = mongoose.model("notes", notesSchema);

// ----------------------------------------------------------------------
// File: notesSchema.js (inside the "models" folder)
// 1. `const mongoose = require("../db");` - Imports the Mongoose object from the "../db" file.

// 3. `const notesSchema = new mongoose.Schema({` - Defines a Mongoose schema for the "notes" collection in the database.

// 5. `noteId: String,` - Specifies a field named "noteId" of type String.
// 6. `title: String,` - Specifies a field named "title" of type String.
// 7. `desc: String,` - Specifies a field named "desc" of type String.

// 9. `});` - Closes the schema definition.
// 10. `module.exports = mongoose.model("notes", notesSchema);` - Creates a Mongoose model named "notes" based on the schema and

//  exports it for use in other files.

// This code represents a basic server setup using Express and Mongoose. It defines routes for CRUD operations on a "notes" collection in a MongoDB database. The server listens on a specified port, and the routes interact with the database using the Mongoose library.

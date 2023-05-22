const mongoose = require("mongoose");
const config = require("./config");

mongoose.connect(config.databaseURL);

module.exports = mongoose;

// ---------------
// File: db.js
// 1. `const mongoose = require("mongoose");` - Imports the Mongoose module, which is an object data modeling (ODM) library for MongoDB.
// 2. `const config = require("./confige");` - Imports the configuration settings from the "./confige" file.

// 4. `mongoose.connect(config.databaseURL);` - Establishes a connection to the MongoDB database using the database URL from the configuration settings.

// 6. `module.exports = mongoose;` - Exports the Mongoose object to be used in other files.

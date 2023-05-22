const express = require("express");
const notesRoutes = require("./routes/notes");
const db = require("./db");
const config = require("./config");

const app = express();
app.use(express.json());

app.use("/notes", notesRoutes);

const port = config.port;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// -------------------------------------------------------
// File: service.js
// 1. `const express = require("express");` - Imports the Express module, which is a web framework for Node.js.
// 2. `const notesRoutes = require("./routes/notes");` - Imports the notes routes from the "./routes/notes" file.
// 3. `const db = require("./db");` - Imports the database connection from the "./db" file.
// 4. `const config = require("./config");` - Imports the configuration settings from the "./config" file.

// 6. `const app = express();` - Creates an instance of the Express application.
// 7. `app.use(express.json());` - Middleware that parses incoming requests with JSON payloads.

// 9. `app.use("/notes", notesRoutes);` - Mounts the notes routes on the "/notes" path.

// 11. `const port = config.port;` - Retrieves the port number from the configuration settings.

// 13. `app.listen(port, () => {` - Starts the server and listens for incoming requests on the specified port.
// 14. `console.log("Server is running on port ${port}");` - Logs a message to the console indicating that the server is running.

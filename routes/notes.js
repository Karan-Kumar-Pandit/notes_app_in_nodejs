const express = require("express");
const notesData = require("../models/notesSchema");

const router = express.Router();

// Get all notes
router.get("/", async (req, res) => {
  try {
    let data = await notesData.find();
    res.send(data);
  } catch (err) {
    res.status(500).send({ error: "An error occurred while fetching notes" });
  }
});

// Get a specific note by ID
router.get("/:id", async (req, res) => {
  try {
    let noteId = req.params.id;
    let data = await notesData.findById(noteId);
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({ error: "Note not found" });
    }
  } catch (err) {
    res
      .status(500)
      .send({ error: "An error occurred while fetching the note" });
  }
});

// Create a new note
router.post("/", async (req, res) => {
  try {
    let data = new notesData(req.body);
    const result = await data.save();
    res.status(201).send(result);
  } catch (err) {
    res
      .status(500)
      .send({ error: "An error occurred while creating the note" });
  }
});

// Update a note by ID
router.put("/:id", async (req, res) => {
  try {
    let noteId = req.params.id;
    let data = await notesData.findByIdAndUpdate(noteId, req.body, {
      new: true,
    });
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({ error: "Note not found" });
    }
  } catch (err) {
    res
      .status(500)
      .send({ error: "An error occurred while updating the note" });
  }
});

// Delete a note by ID
router.delete("/:id", async (req, res) => {
  try {
    let noteId = req.params.id;
    let data = await notesData.findByIdAndDelete(noteId);
    if (data) {
      res.send({ message: "Note deleted successfully" });
    } else {
      res.status(404).send({ error: "Note not found" });
    }
  } catch (err) {
    res
      .status(500)
      .send({ error: "An error occurred while deleting the note" });
  }
});

module.exports = router;

// --------------------------------------------------------------
// File: notes.js (inside the "routes" folder)
// 1. `const express = require("express");` - Imports the Express module.
// 2. `const notesData = require("../models/notesSchema");` - Imports the notes data model from the "../models/notesSchema" file.

// 4. `const router = express.Router();` - Creates an instance of an Express router.

// 6. `router.get("/", async (req, res) => {` - Defines a route handler for the GET request on the "/" path.
// 7. `let data = await notesData.find();` - Retrieves all notes data from the database using the notes data model.
// 8. `res.send(data);` - Sends the retrieved data as the response.

// 10. `router.get("/:id", async (req, res) => {` - Defines a route handler for the GET request on the "/:id" path, where ":id" represents a dynamic parameter.
// 11. `let noteId = req.params.id;` - Retrieves the value of the "id" parameter from the request.
// 12. `let data = await notesData.findById(note

// Id);` - Retrieves a specific note data from the database based on the provided note ID.
// 13. `if (data) {` - Checks if the note data exists.
// 14. `res.send(data);` - Sends the retrieved data as the response.
// 15. `} else {` - Executes if the note data is not found.
// 16. `res.status(404).send({ error: "Note not found" });` - Sends a response with a 404 status code and an error message.

// 18. `router.post("/", async (req, res) => {` - Defines a route handler for the POST request on the "/" path.
// 19. `let data = new notesData(req.body);` - Creates a new note data object based on the request body.
// 20. `const result = await data.save();` - Saves the new note data to the database.
// 21. `res.status(201).send(result);` - Sends a response with a 201 status code and the saved note data.

// 23. `router.put("/:id", async (req, res) => {` - Defines a route handler for the PUT request on the "/:id" path.
// 24. `let noteId = req.params.id;` - Retrieves the value of the "id" parameter from the request.
// 25. `let data = await notesData.findByIdAndUpdate(noteId, req.body, { new: true });` - Updates a specific note data in the database based on the provided note ID and request body.
// 26. `if (data) {` - Checks if the note data exists.
// 27. `res.send(data);` - Sends the updated data as the response.
// 28. `} else {` - Executes if the note data is not found.
// 29. `res.status(404).send({ error: "Note not found" });` - Sends a response with a 404 status code and an error message.

// 31. `router.delete("/:id", async (req, res) => {` - Defines a route handler for the DELETE request on the "/:id" path.
// 32. `let noteId = req.params.id;` - Retrieves the value of the "id" parameter from the request.
// 33. `let data = await notesData.findByIdAndDelete(noteId);` - Deletes a specific note data from the database based on the provided note ID.
// 34. `if (data) {` - Checks if the note data exists.
// 35. `res.send({ message: "Note deleted successfully" });` - Sends a response with a success message.
// 36. `} else {` - Executes if the note data is not found.
// 37. `res.status(404).send({ error: "Note not found" });` - Sends a response with a 404 status code and an error message.

// 39. `module.exports = router;` - Exports the router to be used in other files.

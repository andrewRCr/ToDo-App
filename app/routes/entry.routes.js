module.exports = app => {
    const entries = require("../controllers/entry.controller.js");

  // Create a new Entry
  app.post("/entries", entries.create);

  // Retrieve all Entries
  app.get("/entries", entries.findAll);

  // Retrieve a single Entry with entryId
  app.get("/entries/:entryId", entries.findOneByID);

    // Retrieve all Entries with app
    app.get("/entries/:app", entries.findAllApp);

  // Update an Entry with entryId
  app.put("/entries/:entryId", entries.update);

  // Delete an Entry with entryId
  app.delete("/entries/:entryId", entries.delete);

  // Delete all Entries
  app.delete("/entries", entries.deleteAll);
};
module.exports = app => {
    const entries = require("../controllers/entry.controller.js");

  // Create a new Entry
  app.post("/entries", entries.create);

  // Retrieve all Entries
  app.get("/entries", entries.findAll);

  app.get("/entries-apps", entries.findAll);

  // Retrieve any Entries with entryId (search_id)
  app.get("/entries/:entryId", entries.findOneByID);

  // Update an Entry with entryId
  app.put("/entries/:entryId", entries.update);

  // Delete an Entry with entryId
  app.delete("/entries/:entryId", entries.delete);

  // Delete all Entries
  app.delete("/entries", entries.deleteAll);
};
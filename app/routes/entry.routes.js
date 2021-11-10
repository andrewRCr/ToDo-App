module.exports = app => {
    const entries = require("../controllers/entry.controller.js");

  // Create a new Entry
  app.post("/new-entry", entries.create);

  // Retrieve all Entries
  app.post("/entries", entries.findAll);

  // Retrieve all Entries - "App" field only
  app.post("/entries-apps", entries.findAllApps);

  // Retrieve any Entries with entryId (search_id)
  app.post("/entries/:entryId", entries.findOneByID);

  // Update an Entry with entryId
  app.put("/entries/:entryId", entries.update);

  // Delete an Entry with entryId
  app.delete("/entries/:entryId", entries.delete);

  // Delete all Entries
  app.delete("/entries", entries.deleteAll);
};
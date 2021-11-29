module.exports = app => {
    const entries = require("../controllers/entry.controller.js");

  // create a new entry
  app.post("/new-entry", entries.create);

  // retrieve all entries
  app.post("/entries", entries.findAll);

  // retrieve all entries - "App" field only
  app.post("/entries-apps", entries.findAllApps);

  // retrieve any entries with entryId (search_id)
  app.post("/entries/:entryId", entries.findOneByID);

  // update an entry with entryId
  app.put("/entries/:entryId", entries.update);

  // delete an entry with entryId
  app.delete("/entries/:entryId", entries.delete);

  // delete all Entries
  app.delete("/entries", entries.deleteAll);
};
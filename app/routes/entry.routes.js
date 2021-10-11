module.exports = app => {
    const entries = require("../controllers/entry.controller.js");

  // Create a new Entry
  app.post("/entries", entries.create);

  // Retrieve all Entrys
  app.get("/entries", entries.findAll);

  // Retrieve a single Entry with customerId
  app.get("/entries/:customerId", entries.findOne);

  // Update a Entry with customerId
  app.put("/entries/:customerId", entries.update);

  // Delete a Entry with customerId
  app.delete("/entries/:customerId", entries.delete);

  // Create a new Entry
  app.delete("/entries", entries.deleteAll);
};
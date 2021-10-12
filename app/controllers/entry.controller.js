const Entry = require("../models/entry.model.js");
require('dotenv').config();



// Create and Save a new Entry
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }

    if (req.body.keyword != process.env.magicword) {
      res.status(400).send({
        message: "Keyword doesn't match!"
      });
      return;
    }
    

    // Create an Entry
    const entry = new Entry({
      app: req.body.app,
      username: req.body.username,
      password: req.body.password
    });

  
    // Save Entry in the database
    Entry.create(entry, (err, data) => {
      if (err) {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Entry."
        });
      }
      else res.send(data);
    });

  

  };

// Retrieve all Entries from the database
exports.findAll = (req, res) => {
  // authenticate
  if (req.body.keyword != process.env.magicword) {
    res.status(400).send({
      message: "Keyword doesn't match!"
    });
    return;
  }

    Entry.getAll((err, data) => {
      if (err) {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving entries."
        });
        return;
      }

      else res.send(data);
    });
  };



// Find a single Entry with an entryId
exports.findOneByID = (req, res) => {
  // authenticate
  if (req.body.keyword != process.env.magicword) {
    res.status(400).send({
      message: "Keyword doesn't match!"
    });
    return;
  }
    Entry.findById(req.params.entryId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found: Entry with id ${req.params.entryId}.`
          });
          return;
        } else {
          res.status(500).send({
            message: "Error retrieving Entry with id " + req.params.entryId
          });
          return;
        }
      } else res.send(data);
    });
  };



// Update an Entry identified by the entryId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content cannot be empty!"
      });
      return;
    }

    if (req.body.keyword != process.env.magicword) {
      res.status(400).send({
        message: "Keyword doesn't match!"
      });
      return;
    }
  
    Entry.updateById(
      req.params.entryId,
      new Entry(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found: Entry with id ${req.params.entryId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Entry with id " + req.params.entryId
            });
          }
        } else res.send(data);
      }
    );
  };

// Delete an Entry with the specified entryId in the request
exports.delete = (req, res) => {

  // authenticate
  if (req.body.keyword != process.env.magicword) {
    res.status(400).send({
      message: "Keyword doesn't match!"
    });
    return;
  }

    Entry.remove(req.params.entryId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found: Entry with id ${req.params.entryId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Entry with id " + req.params.entryId
          });
        }
      } else res.send({ message: "Entry with id " + req.params.entryId + " was deleted successfully!" });
    });
  };

// Delete all Entries from the database.
exports.deleteAll = (req, res) => {

  // authenticate
  if (req.body.keyword != process.env.magicword) {
    res.status(400).send({
      message: "Keyword doesn't match!"
    });
    return;
  }

    Entry.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all entries."
        });
      else res.send({ message: `All Entries were deleted successfully!` });
    });
  };
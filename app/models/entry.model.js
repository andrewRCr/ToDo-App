const sql = require("./db.js");

// constructor
const Entry = function(entry) {
  this.app = entry.app;
  this.username = entry.username;
  this.password = entry.password;
};

Entry.create = (newEntry, result) => {
  sql.query("INSERT INTO entries SET ?", newEntry, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created entry: ", { id: res.insertId, ...newEntry });
    result(null, { id: res.insertId, ...newEntry });
  });
};

Entry.findById = (entryId, result) => {
  sql.query(`SELECT * FROM entries WHERE search_id = '${entryId}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found entry: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Entry with the id
    result({ kind: "not_found" }, null);
  });
};

Entry.getAll = result => {
  sql.query("SELECT * FROM entries", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("entries: ", res);
    result(null, res);
  });
};



Entry.updateById = (id, entry, result) => {
  sql.query(
    "UPDATE entries SET app = ?, username = ?, password = ? WHERE id = ?",
    [entry.app, entry.username, entry.password, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Entry with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated entry: ", { id: id, ...entry });
      result(null, { id: id, ...entry });
    }
  );
};

Entry.remove = (id, result) => {
  sql.query("DELETE FROM entries WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Entry with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted entry with id: ", id);
    result(null, res);
  });
};

Entry.removeAll = result => {
  sql.query("DELETE FROM entries", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} entries`);
    result(null, res);
  });
};

module.exports = Entry;

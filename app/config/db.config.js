// module.exports = {
//     HOST: "us-cdbr-east-04.cleardb.com",
//     USER: "ba1ff23f712881",
//     PASSWORD: "6b703281",
//     DB: "heroku_c117fdf5a23974d"
//   };

module.exports = {
  HOST: "rnr56s6e2uk326pj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  USER: "ieg27raebx26jwaj",
  PASSWORD: "z5aium2tfirmhq8w",
  DB: "fi909p144didejns"
};

// JAWS DB:
//  host:	rnr56s6e2uk326pj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com
// username: ieg27raebx26jwaj
// password: z5aium2tfirmhq8w
// db: fi909p144didejns

// connection string: mysql://ieg27raebx26jwaj:z5aium2tfirmhq8w@rnr56s6e2uk326pj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/fi909p144didejns

// DATABASE LOGIN:
 // mysql --host=rnr56s6e2uk326pj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com --user=ieg27raebx26jwaj --password=z5aium2tfirmhq8w  --reconnect fi909p144didejns



// CLEARDB
// DATABASE LOGIN:
 // mysql --host=us-cdbr-east-04.cleardb.com --user=ba1ff23f712881 --password=6b703281 --reconnect heroku_c117fdf5a23974d

// base url:
// https://mighty-beyond-55909.herokuapp.com/entries

// database entry format (JSON):
// app, username, password (id is auto-generated and assigned)
//
// e.g.,
// {
//  "app": "SomeApp",
//  "username": "SomeUsername",
//  "password": "SomePassword"
// }

// rest API methods available:
// method    url            action
// GET	    /entries	     get all Entries
// GET	    /entries/2	   get Entry with id=2
// POST	    /entries	     add new Entry
// PUT	    /entries/2	   update Entry with id=2
// DELETE	  /entries/2	   remove Entry with id=2
// DELETE	  /entries	     remove all Entries

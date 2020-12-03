// CRUD create read update delete

const { MongoClient } = require("mongodb");

// const connectionURL = "mongodb://127.0.0.1:27017";
require("dotenv").config();

const connectionURL = process.env.MongoURI;
const databaseName = "task-manager-db";

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
	if (error) {
		return console.log("Unable to connect to database! " + error);
	}

	console.log("\n**************************************************************************************");
	console.log("MongoDB connected!");
	const db = client.db(databaseName);
	console.log("DB name:- " + db.namespace);
	console.log("************************************************************************************** \n");
});

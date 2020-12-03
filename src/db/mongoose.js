const mongoose = require("mongoose");

require("dotenv").config();

const connectionURL = process.env.MongoURI;

mongoose.connect(connectionURL + "/task-manager-api", {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
});

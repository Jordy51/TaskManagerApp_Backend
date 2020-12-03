const express = require("express");

require("./db/mongoose");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

//
// without middleware: new request -> run route handler
//
// with middleware:    new request -> do something -> run route handler
//

app.listen(PORT, () => {
	console.log("Server is up on port " + PORT);
});

const Task = require("./models/task");
const User = require("./models/user");

const main = async () => {
	// const task = await Task.findById("5fc893ed08027109b7b58836");
	// await task.populate("owner").execPopulate();
	// console.log(task.owner);

	const user = await User.findById("5fc893351a782b08d2480275");
	await user.populate("tasks").execPopulate();
	console.log(user.tasks);
};

main();

const jwt = require("jsonwebtoken");
const User = require("../models/user");

require("dotenv").config();

const JWTSecret = process.env.JWTSecret;

const auth = async (req, res, next) => {
	try {
		const token = req.header("Authorization").replace("Bearer ", "");
		const decode = jwt.verify(token, JWTSecret);
		const user = await User.findOne({ _id: decode._id, "tokens.token": token });

		if (!user) {
			throw new Error();
		}
		req.token = token;
		req.user = user;
		next();
	} catch (e) {
		res.status(401).send({ errro: "Please authenticate." });
	}
};

module.exports = auth;

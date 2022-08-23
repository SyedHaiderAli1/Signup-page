const userSchema = require("../models/signup");

//POST method

const postUser = async (req, res) => {
	const newUser = await userSchema.create({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	});

	try {
		await newUser.save();
		res.status(200).json({ message: "new user added successfully", newUser });
	} catch (error) {
		res.status(404).json(error);
	}
};

const signInUser = async (req, res) => {
	const newUser = await userSchema.findOne({
		name: req.body.name,
	});
	console.log(newUser);
	try {
		if (newUser.name !== req.body.name)
			res.status(201).json({ message: "user Found", newUser });
		if (newUser.email !== req.body.email)
			res.status(201).json({ message: "user  email", newUser });
		if (newUser.password !== req.body.password)
			res.status(201).json({ message: "user  password", newUser });
		res.status(400).json("NOT VALID");
	} catch (error) {
		res.status(400).json("NOT VALID");
	}
};

module.exports = { postUser, signInUser };

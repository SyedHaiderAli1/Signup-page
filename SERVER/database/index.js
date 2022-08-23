const mongoose = require("mongoose");

const connectDatabase = async () => {
	try {
		const dataBaseInfo = await mongoose.connect(process.env.DATABASE_URL);
		console.log(`Database is connected at ${dataBaseInfo.connection.host}`);
	} catch (error) {
		console.log("Database is not connected");
	}
};

module.exports = connectDatabase;

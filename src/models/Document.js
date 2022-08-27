const { Schema, model } = require("mongoose");
const { modelName } = require("./User");

const documentSchema = new Schema({
	name: { type: String, required: true },
	alias: { type: String, required: true },
	author: { type: String, required: true },
	type: { type: String, required: true },
	long: { type: Number, required: true },
	description: String,
	dateCreated: { type: Date, required: true },
});

module.exports = model("Document", documentSchema);

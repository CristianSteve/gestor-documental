const { Schema, model } = require("mongoose");

const userSchema = new Schema(
	{
		userName: { type: String, required: true, unique: true },
		name: { type: String, required: true },
		lastName: { type: String, required: true },
		typeUser: { type: String, required: true },
		typeState: { type: Boolean, required: true },
	},
	{ timestamps: true }
);

module.exports = model("User", userSchema);

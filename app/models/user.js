const { Schema, model, models } = require("mongoose");


const userSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exist"],
    required: [true, "Email is required"],
  },
  name: {
    type: String,
    unique: [true, "Name iss required"],
  },
  image: {
    type: String,
  },
});

export const User = models.User || model("User", userSchema);

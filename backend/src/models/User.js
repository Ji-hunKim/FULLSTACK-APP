const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    minlength: 5,
    maxlength: 90,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
});


const User = mongoose.model("User", userSchema);
module.exports = { User };
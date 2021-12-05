const mongoose = require('mongoose')

const { Schema, model } = mongoose

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    // User.findOneById(id).select('+password')
    password: {
      type: String,
      required: true,
      select: false
    }
  },
  {
    timestamps: true
  }
)

const User = model('User', userSchema);

module.exports = User;
const mongoose = require("mongoose");
const Joi = require('joi');
const UserSchema = mongoose.Schema({
   
    name: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
        minlength: 10,
        // maxlength: 30,
        // match: /^[a-zA-Z0-9]+$/, // Optional: If you want to ensure only alphanumeric characters are allowed.
      },
      
})
// const UserSchema = Joi.object({
//     username: Joi.string()
//         .alphanum()
//         .min(3)
//         .max(30)
//         .required(),

//     password: Joi.string()
//         .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

// })

module.exports = mongoose.model("User",UserSchema);
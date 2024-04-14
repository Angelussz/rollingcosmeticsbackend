const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({

});

const UserModel = mongoose.model("usuario", UserSchema);

module.exports = UserModel;

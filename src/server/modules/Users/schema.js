const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

const usersSchema = new Schema({

	email: {type:String, unique: true},
    password:{type:String},
    name:{type:String},
    phone:{type:String},
    address:{type:String},
    wish_bus:{type:Array},
    tickets_booked: {type: Array},
    tickets_destroyed: {type: Array},
    role: {type:String},
    dob:{type:Number}
});
usersSchema.methods.validPassword = async function (password) {
    return await bcrypt.compareSync(password, this.password);
};

module.exports = usersSchema;
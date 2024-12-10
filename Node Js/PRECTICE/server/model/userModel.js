const mongoose = require("mongoose")

const cc = mongoose.Schema({
    userName: {
        type: string,
        required: true,
    },
    email: {
        type: string,
        required: true,
    },
    number: {
        type: string,
        required: true,
    },
    password: {
        type: string,
        required: true,
    },
});
const UserModel=mongoose.model("userData",userSchema);
module.exports=userSchema;
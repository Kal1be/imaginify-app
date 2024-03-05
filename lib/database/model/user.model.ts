import {Schema,models,model} from "mongoose"


const UserSchema = new Schema({
    clerkId:{
        type:String,
        required:true,
        unique:true
    },
    username:{
type:String,
required:true,
unique:true
    },
    photo:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    creditBalance:{
        type:Number,
        default:30
    },
    planId:{
        type:Number,
        default:1
    }

})

const User = models?.User || model("user",UserSchema)

export default User
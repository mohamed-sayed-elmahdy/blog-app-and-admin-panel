import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const userSchema = new Schema(
    {
      
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
        },

       
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
            trim: true,
        },

        
        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [6, "Password must be at least 6 characters"],
            select: false, 
        },

        
        avatar: {
            type: String,
            default: "",
        },

        
        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user",
        },

      
        isEmailVerified: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true, 
    }
);


const User = models.User || model("User", userSchema);

export default User;
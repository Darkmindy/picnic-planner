import mongoose, { model } from "mongoose";
import { IUser } from "../types/user.type";

const userSchema = new mongoose.Schema<IUser>(
    {   
        name: {
            type: String,
            required: true,
        },
        surname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        cart: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Cart",
            required: false,
        },
        role: {
            type: String,
            required: false,
            enum: ["admin", "user"],
            default: "user"
        },
        loggedIn: {
			type: Boolean,
            default: false
		},
    },

    { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
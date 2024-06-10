import { Schema } from "mongoose";
export interface IUser {
    _id?: String,
    name: String;
    surname: String;
    email: string;
    password: string;
    role: string;
    loggedIn: Boolean;
}
import { Schema } from 'mongoose';

export const UserSchema = new Schema({
    firstName: {
        type: String,
        default: '',
        trim: true,
    },
    lastName: {
        type: String,
        default: '',
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    phone: {
        type: String,
        default: '',
        trim: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    verified: {
        type: Boolean,
        default: false,
    }
});

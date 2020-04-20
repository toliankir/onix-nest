import { Schema } from 'mongoose';

export const BookSchema = new Schema({
    blogpost: {
        type: Number,
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    },
    published: {
        publisher: {
            type: String,
        },
        year: {
            type: Number
        },
    }
});

import { Document } from 'mongoose';
import { IPublish } from "./publish.interface";

export interface IBook extends Document {
    blogpost: number,
    title: string,
    author: string,
    published: IPublish,
}

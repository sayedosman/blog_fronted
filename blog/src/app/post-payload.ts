import { UserPayload } from './user-payload';

export class PostPayload {
    id:Number
    title: String;
    content: String;
    createOn:Date
    user:UserPayload
  
}

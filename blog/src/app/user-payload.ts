import { PostPayload } from './post-payload'

export class UserPayload {
    id:string
    username:string
    email:string
    posts:Array<PostPayload>
}

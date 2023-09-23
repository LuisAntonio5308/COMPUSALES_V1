import {Injectable, assertPlatform} from "@angular/core";
import { Post } from "./post.model";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})

export class PostService{
    private posts: Post[] = []; //Primera Matriz
    private postsUpdate = new Subject<Post[]>(); //Actualizacion de los datos

    getPosts(){
        return[...this.posts];//segunda Matriz
    }
    
    getPostUpdateListerner(){
        return this.postsUpdate.asObservable();
    }

    addPost(title: string, content: string){
        const post: Post = {
            title: title, 
            content: content}
        this.posts.push(post);
        this.postsUpdate.next([...this.posts]);
    }

    //Eliminar Post
    deletePost(post: Post) {
        const index = this.posts.indexOf(post);
        if (index !== -1) {
          this.posts.splice(index, 1);
          this.postsUpdate.next([...this.posts]);
        }
      }
}
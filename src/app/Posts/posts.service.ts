import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { Subject, Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class PostService {
  private posts: Post[] = [];
  private postUpdate = new Subject<Post[]>();

  getPosts() {
    return [...this.posts];
  }

  getPostUpdateListerner() {
    return this.postUpdate.asObservable();
  }

  addPost(title: string, content: string, price:number) {
    const post: Post = {
      title: title,
      content: content,
      price:price
    };

    this.posts.push(post);
    this.postUpdate.next([...this.posts]);
  }

  deletePost(post: Post): Observable<void> {
    return new Observable<void>((observer) => {
      const index = this.posts.indexOf(post);
      if (index !== -1) {
        this.posts.splice(index, 1);
        this.postUpdate.next([...this.posts]);
        observer.next(); // Notificar que la eliminación se ha completado
        observer.complete();
      } else {
        observer.error("El post no se encontró en la lista.");
      }
    });
  }
}

import { Component, OnInit, OnDestroy } from "@angular/core";
import { Post } from "../../post.model";
import { PostService } from "../../posts.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  private postsSub: Subscription;
  showProgressBar = false; // Variable para controlar la visibilidad del progress bar

  constructor(public postsService: PostService) { }

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListerner()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  eliminarPost(post: Post) {
    // Mostrar el progress bar cuando se inicia la eliminación
    this.showProgressBar = true;

    // Simular una demora de 2 segundos antes de completar la eliminación
    setTimeout(() => {
      this.postsService.deletePost(post)
        .subscribe(() => {
          // Ocultar el progress bar cuando se completa la eliminación
          this.showProgressBar = false;
        });
    }, 2000); // 2000 milisegundos (2 segundos)
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}

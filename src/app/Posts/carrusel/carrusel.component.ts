
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Post } from "../post.model";
import { PostService } from "../posts.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit, OnDestroy {

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

  currentIndex: number = 0;

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.posts.length) % this.posts.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.posts.length;
  }
}

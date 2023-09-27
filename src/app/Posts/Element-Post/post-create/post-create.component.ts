import { Component, EventEmitter, Output } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Post } from "../../post.model";
import { NgForm } from "@angular/forms";
import { PostService } from "../../posts.service";

@Component({
    
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {

  enteredTitle = '';
  enteredContent = '';
  enteredPrice: number; // Declaración de la variable para el precio


  constructor(public postsService:PostService){}


  onAddPost(form:NgForm) {  
    if(form.invalid){
      return
    }
    
    const post:Post = {

      
      title: form.value.title,
      content: form.value.content,
      price: this.enteredPrice// Asegúrate de tener la propiedad "enteredPrice" en el componente

    };
    this.enteredTitle = "";
    this.enteredContent = "";
    this.postsService.addPost(form.value.title, form.value.content, form.value.price)
    form.resetForm();
    
  }
}



/*import { Component, EventEmitter, Output } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Post } from "../../post.model";
import { NgForm } from "@angular/forms";
import { PostService } from "../../posts.service";

@Component({
    
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {

  enteredTitle = '';
  enteredContent = '';
  enteredPrice: number; // Declaración de la variable para el precio


  constructor(public postsService:PostService){}


  onAddPost(form:NgForm) {  
    if(form.invalid){
      return
    }
    
    const post:Post = {

      
      title: form.value.title,
      content: form.value.content,
      price: this.enteredPrice// Asegúrate de tener la propiedad "enteredPrice" en el componente

    };
    this.enteredTitle = "";
    this.enteredContent = "";
    this.postsService.addPost(form.value.title, form.value.content, form.value.price)
    form.resetForm();
    
  }
}*/



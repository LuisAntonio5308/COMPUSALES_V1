import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent {
  images: string[] = [
    'https://cc-prod.scene7.com/is/image/CCProdAuthor/design-carousels-sliders_00?$pjpeg$&jpegSize=300&wid=1440',
    'url_de_la_imagen_2',
    'url_de_la_imagen_3',
    // Agrega más URLs de imágenes según sea necesario
  ];
  currentIndex: number = 0;

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}

import { Component, ViewChild } from '@angular/core';
import { CdkScrollable } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent {
  @ViewChild(CdkScrollable) scrollable: CdkScrollable;

  slides = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4'];

  scrollLeft() {
    this.scrollable.scrollTo({left: (this.scrollable.measureScrollOffset('left') - 100)});
  }

  scrollRight() {
    this.scrollable.scrollTo({left: (this.scrollable.measureScrollOffset('left') + 100)});
  }
}

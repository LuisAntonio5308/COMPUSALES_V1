import {Component} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode, MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSliderModule} from '@angular/material/slider';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';

/**
 * @title Configurable progress-bar
 */
@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.html',
  styleUrls: ['progress-bar.css'],
  standalone: true,
  imports: [
    MatCardModule,
    MatRadioModule,
    FormsModule,
    NgIf,
    MatSliderModule,
    MatProgressBarModule,
  ],
})
export class ProgressBarConfigurableExample {
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 35;
  bufferValue = 70;
}

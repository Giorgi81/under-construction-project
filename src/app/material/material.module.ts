import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIcon, MatIconModule} from '@angular/material/icon';



const material = [
  MatButtonModule,
  MatToolbarModule,
  MatProgressBarModule,
  MatIconModule


]



@NgModule({
  exports : [material],
  imports: [material]
})
export class MaterialModule { }

import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FirstBtnComponent } from '../first-btn/first-btn.component';
import { DatosComponent } from '../../Visualizador/datos/datos.component';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [NgIf, FirstBtnComponent, DatosComponent],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  showSquare = false;
  squareColor = 'rgb(255, 0, 0)'; // Color inicial

  onButtonClick() {
    this.showSquare = true;
    this.changeSquareColor();
  }

  changeSquareColor() {
    // Cambiar el color dinámicamente
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.squareColor = `rgb(${r}, ${g}, ${b})`;
  }
}
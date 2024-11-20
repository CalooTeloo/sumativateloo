import { CommonModule, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-datos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './datos.component.html',
  styleUrl: './datos.component.css'
})
export class DatosComponent {
  @Input() color: string = 'rgb(255, 255, 255)'; // Color por defecto
  rotation: number = 0; // Estado de rotación

  triggerAnimation() {
    this.rotation = (this.rotation + 90) % 360; // Incrementar la rotación en 90 grados
  }
}
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-datos',
  standalone: true,
  imports: [],
  templateUrl: './datos.component.html',
  styleUrl: './datos.component.css'
})
export class DatosComponent {
  @Input() color: string = 'rgb(255, 255, 255)'; // Color por defecto
}
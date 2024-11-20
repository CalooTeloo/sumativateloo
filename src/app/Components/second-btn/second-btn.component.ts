// src/app/Components/second-btn/second-btn.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-second-btn',
  standalone: true,
  imports: [],
  templateUrl: './second-btn.component.html',
  styleUrl: './second-btn.component.css'
})
export class SecondBtnComponent {
  @Output() animateSquare = new EventEmitter<void>();

  onClick() {
    this.animateSquare.emit(); // Emitimos el evento al hacer clic
  }
}

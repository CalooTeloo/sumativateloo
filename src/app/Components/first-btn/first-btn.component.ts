import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-first-btn',
  standalone: true,
  imports: [],
  templateUrl: './first-btn.component.html',
  styleUrl: './first-btn.component.css'
})
export class FirstBtnComponent {
  @Output() btnClicked = new EventEmitter<void>();

  onClick() {
    this.btnClicked.emit();
  }
}
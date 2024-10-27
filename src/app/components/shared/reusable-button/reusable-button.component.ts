import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reusable-button',
  standalone: true,
  imports: [],
  templateUrl: './reusable-button.component.html',
  styleUrl: './reusable-button.component.css'
})
export class ReusableButtonComponent {
  @Input() text: string = 'Click Me';
}

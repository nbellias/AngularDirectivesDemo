import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-structural-demo',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './structural-demo.component.html',
  styleUrl: './structural-demo.component.css'
})
export class StructuralDemoComponent {
  isVisible = true;
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}

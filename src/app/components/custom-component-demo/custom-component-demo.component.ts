import { Component } from '@angular/core';
import { ReusableButtonComponent } from '../shared/reusable-button/reusable-button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-custom-component-demo',
  standalone: true,
  imports: [ReusableButtonComponent, RouterModule],
  templateUrl: './custom-component-demo.component.html',
  styleUrl: './custom-component-demo.component.css'
})
export class CustomComponentDemoComponent {

}

import { Component } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-attribute-demo',
  standalone: true,
  imports: [HighlightDirective, RouterModule],
  templateUrl: './attribute-demo.component.html',
  styleUrl: './attribute-demo.component.css'
})
export class AttributeDemoComponent {

}

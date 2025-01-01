import { Component } from '@angular/core';
import { FadeInDirective } from '@shared/fade-in.directive';

@Component({
  selector: 'app-about',
  imports: [FadeInDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}

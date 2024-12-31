import { Component } from '@angular/core';
import { FadeInDirective } from '@shared/fade-in.directive';

@Component({
  selector: 'app-home',
  imports: [FadeInDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

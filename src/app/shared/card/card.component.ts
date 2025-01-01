import { Component, Input } from '@angular/core';
import { FadeInDirective } from '@shared/fade-in.directive';

@Component({
  selector: 'app-card',
  imports: [FadeInDirective],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() cover_image!: string; // Declarar como @Input()
  @Input() title!: string; // Declarar como @Input()
  @Input() description!: string; // Declarar como @Input()
  @Input() project!: any; // Declarar como @Input()
}

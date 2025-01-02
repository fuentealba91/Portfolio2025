import { Component } from '@angular/core';
import { FadeInDirective } from '@shared/fade-in.directive';
import { CardHabilidadesComponent } from "../../shared/card-habilidades/card-habilidades.component";

@Component({
  selector: 'app-about',
  imports: [FadeInDirective, CardHabilidadesComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  cursorChar: string = '|'; // Caracter del cursor parpadeante
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FadeInDirective } from '@shared/fade-in.directive';
import { gsap } from 'gsap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-home',
  imports: [ FadeInDirective, FontAwesomeModule ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild('textElement', { static: true }) textElement!: ElementRef;
  @ViewChild('textElement2', { static: true }) textElement2!: ElementRef;

  faFileArrowDown = faFileArrowDown; // Ícono para el botón de descarga
  faLinkedin = faLinkedin; // Ícono para el enlace a LinkedIn
  faGithub = faGithub; // Ícono para el enlace a GitHub
  fullText: string = 'FELIPE FUENTEALBA ILLANES'; // Primer texto
  fullText2: string = 'FULLSTACK DEVELOPER'; // Segundo texto
  cursorChar: string = '</>'; // Caracter del cursor parpadeante

  ngOnInit(): void {
    this.animateText();
  }

  animateText(): void {
    const element = this.textElement.nativeElement;
    const element2 = this.textElement2.nativeElement;

    // Limpia el contenido inicial
    element.textContent = '';
    element2.textContent = '';

    // Divide los textos en caracteres
    const characters = this.fullText.split('');
    const characters2 = this.fullText2.split('');

    // Inicializa índices para controlar el progreso
    let currentIndex = 0;
    let currentIndex2 = 0;

    const timeline = gsap.timeline();

    // Animar el primer texto
    timeline.to({}, {
      duration: 0.02 * characters.length, // Tiempo total para animar el primer texto
      onUpdate: () => {
        if (currentIndex < characters.length) {
          element.textContent = characters.slice(0, currentIndex + 1).join('') + this.cursorChar; // Texto con el cursor
          currentIndex++;
        }
      },
      onComplete: () => {
        // Elimina el cursor después de terminar el primer texto
        element.textContent = this.fullText;
      },
    });

    // Pausa breve entre textos
    timeline.to({}, { duration: 0.2 });

    // Animar el segundo texto
    timeline.to({}, {
      duration: 0.02 * characters2.length, // Tiempo total para animar el segundo texto
      onUpdate: () => {
        if (currentIndex2 < characters2.length) {
          element2.textContent = characters2.slice(0, currentIndex2 + 1).join(''); // Texto con el cursor
          currentIndex2++;
        }
      },
      onComplete: () => {
        // Elimina el cursor después de terminar el segundo texto
        element2.textContent = this.fullText2;
      },
    });
  }
}
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar los plugins necesarios
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-card-habilidades',
  imports: [FontAwesomeModule],
  templateUrl: './card-habilidades.component.html',
  styleUrls: ['./card-habilidades.component.css'], // Corregí `styleUrl` a `styleUrls`
})
export class CardHabilidadesComponent implements AfterViewInit, OnDestroy {
  @ViewChild('carouselTrack', { static: false }) carouselTrack!: ElementRef;

  private animation: gsap.core.Timeline | null = null;

  skills = [
    { src: '/assets/angular.webp', alt: 'Angular' },
    { src: '/assets/react-transformed.webp', alt: 'React' },
    { src: '/assets/tailwind-transformed.webp', alt: 'Tailwind' },
    { src: '/assets/ts.png', alt: 'Typescript' },
    { src: '/assets/js-transformed.png', alt: 'Javascript' },
    { src: '/assets/html5.webp', alt: 'Html5' },
    { src: '/assets/css3.png', alt: 'Css3' },
    { src: '/assets/mysql-transformed.webp', alt: 'Mysql' },
    { src: '/assets/mongodb-transformed.webp', alt: 'Mongodb' },
    { src: '/assets/express-js.webp', alt: 'Expressjs' },
    { src: '/assets/postman-transformed.webp', alt: 'Postman' },
    { src: '/assets/git-transformed.webp', alt: 'Git' },
  ];

  ngAfterViewInit() {
    this.initCarousel();
  }

  ngOnDestroy() {
    if (this.animation) {
      this.animation.kill();
    }
  }

  private initCarousel() {
    const track = this.carouselTrack.nativeElement as HTMLElement;
    const items = Array.from(track.children) as HTMLElement[];
    const itemWidth = items[0]?.offsetWidth || 0;
    const totalWidth = itemWidth * items.length;

    // Verificar que `itemWidth` y `totalWidth` son válidos
    if (!itemWidth || !totalWidth) {
      return;
    }

    // Clonar los elementos para un bucle continuo
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      track.appendChild(clone);
    });

    // Configurar la animación
    this.animation = gsap.timeline({ repeat: -1 }).to(track, {
      x: -totalWidth,
      duration: 20,
      ease: 'none',
      modifiers: {
        x: (x) => {
          const parsedX = parseFloat(x);
          return `${parsedX % totalWidth}px`;
        },
      },
    });
  }
}
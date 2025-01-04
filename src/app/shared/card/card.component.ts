import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FadeInDirective } from '@shared/fade-in.directive';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-card',
  imports: [FadeInDirective, CommonModule, FontAwesomeModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() cover_image!: string; // Declarar como @Input()
  @Input() title!: string; // Declarar como @Input()
  @Input() description!: string; // Declarar como @Input()
  @Input() project!: any; // Declarar como @Input()

  faGithub = faGithub; // Ícono para el enlace a GitHub

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

  getSkillLogo(tech: string) {
    return this.skills.find(skill => skill.alt.toLowerCase() === tech.toLowerCase());
  }
}

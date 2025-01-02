import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-card-habilidades',
  imports: [FontAwesomeModule],
  templateUrl: './card-habilidades.component.html',
  styleUrls: ['./card-habilidades.component.css'], // Corregí `styleUrl` a `styleUrls`
})
export class CardHabilidadesComponent {
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
}

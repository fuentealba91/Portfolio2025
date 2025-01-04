import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '@shared/card/card.component';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, CardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  constructor() {}

  ngOnInit(): void {}

  cursorChar: string = '|'; // Caracter del cursor parpadeante

  projects = [
    {
      title: 'Portfolio',
      description: 'Proyecto porftolio personal',
      cover_image: '/assets/proyectos/portfolio/portfolio.png', // Ruta válida
      technologies: ['Angular', 'Typescript', 'Tailwind'],
      github: 'https://github.com/fuentealba91/Portfolio2025',
    },
  ];
}

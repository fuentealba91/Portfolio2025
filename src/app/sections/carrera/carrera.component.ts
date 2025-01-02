import { Component } from '@angular/core';
import { FadeInDirective } from '@shared/fade-in.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { CardCarreraComponent } from "../../shared/card-carrera/card-carrera.component";

@Component({
  selector: 'app-carrera',
  imports: [FontAwesomeModule, CommonModule, CardCarreraComponent, FadeInDirective],
  templateUrl: './carrera.component.html',
  styleUrl: './carrera.component.css',
})
export class CarreraComponent {
  constructor() {}

  ngOnInit(): void {}

  cursorChar: string = '|'; // Caracter del cursor parpadeante

  estudios = [
    {
      lugar: 'Pontificia Universidad Católica de Valparaíso',
      estudio: 'Ingeniería de ejecución en informática',
      desde: '2015',
      hasta: '2021'
    },
    {
      lugar: 'DUOC UC - Sede Viña del Mar',
      estudio: 'Analista programador computacional',
      desde: '2010',
      hasta: '2014'
    },
    {
      lugar: 'Colegio Pasionistas de Quilpué',
      estudio: 'Enseñanza media',
      desde: '2006',
      hasta: '2009'
    },
  ];

  experiencia = [
    {
      lugar: 'Subcargo SpA',
      estudio: 'Fullstack developer',
      desde: '2023',
      hasta: 'Actualidad'
    },
    {
      lugar: 'Globalhap SpA',
      estudio: 'Fullstack developer',
      desde: '2021',
      hasta: '2023'
    },
  ];
}

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-carrera',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './card-carrera.component.html',
  styleUrls: ['./card-carrera.component.css']
})
export class CardCarreraComponent {
  @Input() estudios: { lugar: string; estudio: string; desde: string; hasta: string }[] = [];
  @Input() experiencia: { lugar: string; estudio: string; desde: string; hasta: string }[] = [];

  faBriefcase = faBriefcase; // Ícono para experiencia
  faGraduationCap = faGraduationCap; // Ícono para estudios

  // Propiedad para determinar qué ícono usar
  get selectedIcon() {
    return this.estudios.length ? this.faGraduationCap : this.faBriefcase;
  }

  // Propiedad para determinar qué array mostrar
  get itemsToDisplay() {
    return this.estudios.length ? this.estudios : this.experiencia;
  }
}
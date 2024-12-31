import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  activeSection: string = 'home'; // Inicializa con la sección por defecto

  constructor(private viewportScroller: ViewportScroller) {}

  scrollToSection(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
  }

  // Detecta la sección activa al hacer scroll
  @HostListener('window:scroll', [])
  onScroll(): void {
    const sections = document.querySelectorAll('section'); // Selecciona todas las secciones
    let currentSection = '';

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const isVisible =
        rect.top < window.innerHeight && // Parte superior está en el viewport
        rect.bottom > 0; // Parte inferior está en el viewport

      if (isVisible) {
        currentSection = section.id; // La sección visible se considera activa
      }
    });

    this.activeSection = currentSection;
  }
}

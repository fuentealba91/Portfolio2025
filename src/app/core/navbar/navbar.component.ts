import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  activeSection: string = 'inicio';
  isMenuOpen: boolean = false;
  isScrolled: boolean = false;

  constructor(private viewportScroller: ViewportScroller) {}

  scrollToSection(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
    this.activeSection = sectionId; // Actualiza la sección activa
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom > 100) {
        currentSection = section.id;
      }
    });

    if (currentSection) {
      this.activeSection = currentSection;
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  handleMenuClick(section: string): void {
    this.scrollToSection(section);
    if (window.innerWidth < 1024) {
      this.isMenuOpen = false; // Cierra el menú en mobile
    }
  }

  @HostListener('window:resize', [])
  onResize(): void {
    if (window.innerWidth >= 1024) {
      this.isMenuOpen = false; // Cierra el menú al ampliar la pantalla
    }
  }
}
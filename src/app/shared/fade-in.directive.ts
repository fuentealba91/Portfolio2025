import { isPlatformBrowser } from '@angular/common';
import {
  Directive,
  ElementRef,
  Renderer2,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
} from '@angular/core';

@Directive({
  selector: '[appFadeIn]',
})
export class FadeInDirective implements AfterViewInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: object // Detecta el entorno (SSR o navegador))
  ) {}

  ngAfterViewInit(): void {
    // Verifica si estamos en el navegador
    if (isPlatformBrowser(this.platformId)) {
      const element = this.el.nativeElement;
      this.renderer.addClass(element, 'fade-in'); // Aplica el efecto de aparición

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.el.nativeElement, 'visible');
            observer.unobserve(element); 
          }
        },
        {
          threshold: 0.2
        }
      );

      observer.observe(element); // Observa el elemento
    }
  }
}

import { Component, Inject, OnInit, PLATFORM_ID, OnDestroy } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  grid: { index: number; color: string; timer?: any }[] = [];
  cols = 0; // Número de columnas dinámicas
  rows = 0; // Número de filas dinámicas
  colorInterval: any; // Intervalo para cambiar colores aleatorios

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateGridSize();
      window.addEventListener('resize', this.updateGridSize.bind(this));
      this.startRandomColors();
    }
  }

  ngOnDestroy() {
    if (this.colorInterval) {
      clearInterval(this.colorInterval); // Limpiar el intervalo al destruir el componente
    }

    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('resize', this.updateGridSize.bind(this));
    }

    // Limpiar cualquier temporizador activo
    this.grid.forEach((square) => {
      if (square.timer) {
        clearTimeout(square.timer);
      }
    });
  }

  updateGridSize() {
    if (isPlatformBrowser(this.platformId)) {
      const cellSize = 100; // Tamaño de cada celda (100px x 100px)

      // Usar scrollHeight y scrollWidth para calcular las dimensiones totales
      const totalWidth = Math.max(
        document.documentElement.scrollWidth,
        window.innerWidth
      );
      const totalHeight = Math.max(
        document.documentElement.scrollHeight,
        window.innerHeight
      );

      // Calcular columnas y filas basadas en el contenido total
      this.cols = Math.ceil(totalWidth / cellSize);
      this.rows = Math.ceil(totalHeight / cellSize);

      // Generar la cuadrícula
      this.grid = Array.from({ length: this.cols * this.rows }, (_, index) => ({
        index,
        color: 'bg-green-300', // Color inicial
      }));
    }
  }

  startRandomColors() {
    if (isPlatformBrowser(this.platformId)) {
      // Cambiar colores aleatorios cada 500ms
      this.colorInterval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * this.grid.length); // Índice aleatorio
        const randomColor = this.getRandomColor(); // Color aleatorio

        const square = this.grid[randomIndex];

        // Si ya tiene un temporizador activo, no realizar cambios
        if (square.timer) {
          return;
        }

        // Cambiar el color del cuadrado
        square.color = randomColor;

        // Restaurar el color original después de 2 segundos
        square.timer = setTimeout(() => {
          square.color = 'bg-green-300'; // Color original
          square.timer = null; // Limpiar el temporizador
        }, 1000); // 2000ms = 2 segundos
      }, 10); // Cambiar cada 500ms (ajustable)
    }
  }

  getRandomColor(): string {
    // Generar un color aleatorio entre un conjunto predefinido
    const colors = ['bg-green-500'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
}
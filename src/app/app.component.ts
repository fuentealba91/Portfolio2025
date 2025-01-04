import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./core/navbar/navbar.component";
import { ProjectsComponent } from "./sections/projects/projects.component";
import { HomeComponent } from "./sections/home/home.component";
import { ContactComponent } from "./sections/contact/contact.component";
import { AboutComponent } from "./sections/about/about.component";
import { CarreraComponent } from "./sections/carrera/carrera.component";
import { LayoutComponent } from "./core/layout/layout.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ProjectsComponent, HomeComponent, ContactComponent, AboutComponent, CarreraComponent, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Portfolio2025';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./core/navbar/navbar.component";
import { ProjectsComponent } from "./sections/projects/projects.component";
import { HomeComponent } from "./sections/home/home.component";
import { ContactComponent } from "./sections/contact/contact.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ProjectsComponent, HomeComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio2025';
}

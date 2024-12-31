import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '@shared/card/card.component';
// import { FadeInDirective } from '@shared/fade-in.directive';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, CardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  constructor() {}

  ngOnInit(): void {}

  projects = [
    {
      title: 'Project 1',
      description: 'Description for project 1',
      cover_image: "https://www.imprentaonline.net/blog/wp-content/uploads/DALL%C2%B7E-2023-10-16-10.41.49-Illustration-depicting-a-humanoid-robot-with-half-of-its-face-transparent-revealing-intricate-circuits-and-gears-inside.-The-robot-is-holding-a-light-1.png",
    },
    {
      title: 'Project 2',
      description: 'Description for project 2',
      cover_image: "https://www.imprentaonline.net/blog/wp-content/uploads/DALL%C2%B7E-2023-10-16-10.41.49-Illustration-depicting-a-humanoid-robot-with-half-of-its-face-transparent-revealing-intricate-circuits-and-gears-inside.-The-robot-is-holding-a-light-1.png",
    },
    {
      title: 'Project 3',
      description: 'Description for project 3',
      cover_image: "https://www.imprentaonline.net/blog/wp-content/uploads/DALL%C2%B7E-2023-10-16-10.41.49-Illustration-depicting-a-humanoid-robot-with-half-of-its-face-transparent-revealing-intricate-circuits-and-gears-inside.-The-robot-is-holding-a-light-1.png",
    },
    {
      title: 'Project 1',
      description: 'Description for project 1',
      cover_image: "https://www.imprentaonline.net/blog/wp-content/uploads/DALL%C2%B7E-2023-10-16-10.41.49-Illustration-depicting-a-humanoid-robot-with-half-of-its-face-transparent-revealing-intricate-circuits-and-gears-inside.-The-robot-is-holding-a-light-1.png",
    },
    {
      title: 'Project 2',
      description: 'Description for project 2',
      cover_image: "https://www.imprentaonline.net/blog/wp-content/uploads/DALL%C2%B7E-2023-10-16-10.41.49-Illustration-depicting-a-humanoid-robot-with-half-of-its-face-transparent-revealing-intricate-circuits-and-gears-inside.-The-robot-is-holding-a-light-1.png",
    },
    {
      title: 'Project 3',
      description: 'Description for project 3',
      cover_image: "https://www.imprentaonline.net/blog/wp-content/uploads/DALL%C2%B7E-2023-10-16-10.41.49-Illustration-depicting-a-humanoid-robot-with-half-of-its-face-transparent-revealing-intricate-circuits-and-gears-inside.-The-robot-is-holding-a-light-1.png",
    },
    {
      title: 'Project 1',
      description: 'Description for project 1',
      cover_image: "https://www.imprentaonline.net/blog/wp-content/uploads/DALL%C2%B7E-2023-10-16-10.41.49-Illustration-depicting-a-humanoid-robot-with-half-of-its-face-transparent-revealing-intricate-circuits-and-gears-inside.-The-robot-is-holding-a-light-1.png",
    },
    {
      title: 'Project 2',
      description: 'Description for project 2',
      cover_image: "https://www.imprentaonline.net/blog/wp-content/uploads/DALL%C2%B7E-2023-10-16-10.41.49-Illustration-depicting-a-humanoid-robot-with-half-of-its-face-transparent-revealing-intricate-circuits-and-gears-inside.-The-robot-is-holding-a-light-1.png",
    },
    {
      title: 'Project 3',
      description: 'Description for project 3',
      cover_image: "https://www.imprentaonline.net/blog/wp-content/uploads/DALL%C2%B7E-2023-10-16-10.41.49-Illustration-depicting-a-humanoid-robot-with-half-of-its-face-transparent-revealing-intricate-circuits-and-gears-inside.-The-robot-is-holding-a-light-1.png",
    },
    {
      title: 'Project 1',
      description: 'Description for project 1',
      cover_image: "https://www.imprentaonline.net/blog/wp-content/uploads/DALL%C2%B7E-2023-10-16-10.41.49-Illustration-depicting-a-humanoid-robot-with-half-of-its-face-transparent-revealing-intricate-circuits-and-gears-inside.-The-robot-is-holding-a-light-1.png",
    },
    {
      title: 'Project 2',
      description: 'Description for project 2',
      cover_image: "https://www.imprentaonline.net/blog/wp-content/uploads/DALL%C2%B7E-2023-10-16-10.41.49-Illustration-depicting-a-humanoid-robot-with-half-of-its-face-transparent-revealing-intricate-circuits-and-gears-inside.-The-robot-is-holding-a-light-1.png",
    },
    {
      title: 'Project 3',
      description: 'Description for project 3',
      cover_image: "https://www.imprentaonline.net/blog/wp-content/uploads/DALL%C2%B7E-2023-10-16-10.41.49-Illustration-depicting-a-humanoid-robot-with-half-of-its-face-transparent-revealing-intricate-circuits-and-gears-inside.-The-robot-is-holding-a-light-1.png",
    },
  ];
}

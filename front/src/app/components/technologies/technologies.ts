import { Component} from '@angular/core';

interface Technology {
  name: string
  svg: string
}

@Component({
  selector: 'app-technologies',
  imports: [],
  templateUrl: './technologies.html',
  styleUrl: './technologies.css',
})
export class Technologies {
  frontTech: Technology[] = [
    { name: 'Angular', svg: 'https://cdn.simpleicons.org/angular/DD0031' },
    { name: 'HTML5', svg: 'https://cdn.simpleicons.org/html5/E34F26' },
    { name: 'JavaScript', svg: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
    { name: 'TypeScript', svg: 'https://cdn.simpleicons.org/typescript/3178C6' }

  ]

  backTech: Technology[] = [
    { name: 'Node.js', svg: 'https://cdn.simpleicons.org/nodedotjs/339933' },
    { name: 'Express', svg: 'https://cdn.simpleicons.org/express/000000' },
    { name: 'MongoDB', svg: 'https://cdn.simpleicons.org/mongodb/47A248' },
    { name: 'PostgreSQL', svg: 'https://cdn.simpleicons.org/postgresql/4169E1' }
  ]

  toolsTech: Technology[] = [
    { name: 'Git', svg: 'https://cdn.simpleicons.org/git/F05032' },
    { name: 'GitHub', svg: 'https://cdn.simpleicons.org/github/181717' },
    { name: 'Figma', svg: 'https://cdn.simpleicons.org/figma/F24E1E' },
    { name: 'Postman', svg: 'https://cdn.simpleicons.org/postman/FF6C37' },
  ]
}


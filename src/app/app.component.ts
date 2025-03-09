import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectComponent } from './Component/project/project.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ibexdata';
}

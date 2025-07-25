import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { ArticleComponent } from '../article/article.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MenuComponent,ArticleComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}

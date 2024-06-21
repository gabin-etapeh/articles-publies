import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleService } from './article.service';
import { ArticleComponent } from './article/article.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  private appService = inject(ArticleService);

  articles: any ;

  ngOnInit(): void {
    this.appService.getArticles().subscribe(result => {
      this.articles = result.articles;
      console.log(this.articles)
    });
  }
 
}

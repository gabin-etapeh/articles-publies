import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppServiceService } from './app-service.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  dataFromAPI: any;

  constructor(private appService: AppServiceService) { }

  ngOnInit(): void {
    this.appService.getDataFromAPI().subscribe(data => {
      this.dataFromAPI = data;
    });
  }
}

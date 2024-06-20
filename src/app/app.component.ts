import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppServiceService } from './app-service.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor,NgIf,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  dataFromAPI: any ;
  title: any;

  constructor(private appService: AppServiceService) { }

  ngOnInit(): void {
    this.appService.getDataFromAPI().subscribe(data => {
      this.dataFromAPI = data;
    });
  }
}

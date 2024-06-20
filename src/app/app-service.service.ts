import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  
  private apiUrl = 'https://newsapi.org/v2/everything?q=tesla&from=2024-05-18&sortBy=publishedAt&apiKey=730191486e1e4ae7a087ec5903895114'; 

  constructor(private http: HttpClient) { }

  getArticles(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
}
}
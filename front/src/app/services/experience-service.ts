import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  http = inject(HttpClient)
  url = 'http://localhost:80'

  getAll() {
    return this.http.get(`${this.url}/experience`)
  }
  
}

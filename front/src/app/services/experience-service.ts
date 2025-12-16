import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  http = inject(HttpClient)
  apiUrl = environment.apiUrl

  getAll() {
    return this.http.get(`${this.apiUrl}/experience`)
  }
  
}

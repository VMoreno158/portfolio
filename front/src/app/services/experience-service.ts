import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  http = inject(HttpClient)
  url = environment.jsonDataUrl

  getAll() {
    return this.http.get(`${this.url}/experience.json`)
  }
  
}

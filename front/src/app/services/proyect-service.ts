import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProyectService {
  http = inject(HttpClient)
  url = environment.jsonDataUrl

  getAll() {
    return this.http.get(`${this.url}/proyects.json`)
  }
}

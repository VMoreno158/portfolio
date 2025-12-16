import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProyectService {
  http = inject(HttpClient)
  url = 'http://localhost:80'

  getAll() {
    return this.http.get(`${this.url}/proyects`)
  }
}

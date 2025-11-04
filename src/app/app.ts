import { Component, signal } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Header } from "./components/header/header";
import { Proyects } from "./components/proyects/proyects";

@Component({
  selector: 'app-root',
  imports: [Hero, Header, Proyects],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}

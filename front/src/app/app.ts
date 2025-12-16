import { Component, signal } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Header } from "./components/header/header";
import { Proyects } from "./components/proyects/proyects";
import { Experience } from "./components/experience/experience";
import { Footer } from "./components/footer/footer";
import { AboutMe } from "./components/about-me/about-me";
import { Technologies } from "./components/technologies/technologies";

@Component({
  selector: 'app-root',
  imports: [Hero, Header, Proyects, Experience, Footer, AboutMe, Technologies],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Víctor Moreno - Portfolio');
  isDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  ngOnInit(): void {
    if(this.isDark) document.documentElement.classList.toggle("dark-mode")
  }
}

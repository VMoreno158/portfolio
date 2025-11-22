import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  showTooltip = false;

  async copyEmail() {
    const email = 'vmorenode@gmail.com'
    await navigator.clipboard.writeText(email)
    this.showTooltip = true
    setTimeout(() => this.showTooltip = false, 3000)
  }
}

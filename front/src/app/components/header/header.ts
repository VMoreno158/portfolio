import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @ViewChild('themeBtn') btn!: ElementRef<HTMLButtonElement>

  ngAfterViewInit(): void {
    console.log(this.btn)
  }

  changeTheme() {
    if (this.btn) {
      document.documentElement.classList.toggle("dark-mode")
    }
  }
}

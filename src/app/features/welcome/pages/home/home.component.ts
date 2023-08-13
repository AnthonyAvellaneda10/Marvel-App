import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showScrollButton: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollButton = window.scrollY >= 350;
  }

  scrollUp(event: Event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del enlace ('#')
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

import { Component, OnInit, HostListener, Renderer2, Input  } from '@angular/core';
import { SearchService } from 'src/app/service/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() redirectLink!: string;
  currentRoute!: string;
  isMenuOpen: boolean = false;
  isScrolled: boolean = false;
  isDarkTheme: boolean = false;
  themeIcon: string = 'ri-sun-line';
  searchTerm: string = '';
  filter = '';
  // userFilter: any = { name: '' };

  constructor(private router: Router, private renderer: Renderer2, private searchService: SearchService) {
    const savedTheme = localStorage.getItem('selected-theme');
    this.isDarkTheme = savedTheme === 'dark';

    if (this.isDarkTheme) {
      this.renderer.addClass(document.body, 'dark-theme');
    }
  }

  ngOnInit() {
    this.currentRoute = this.router.url;
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY >= 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;

    if (this.isDarkTheme) {
      this.renderer.addClass(document.body, 'dark-theme');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
    }

    localStorage.setItem('selected-theme', this.isDarkTheme ? 'dark' : 'light');
  }

  applyFilter(): void {
    this.searchService.setFilter(this.filter);
  }
}

import { Component, Input, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  @Input() pageTitle!: string;
  currentRoute!: string;
  allCharacters: any[] = [];
  isLoading = true;
  isPagination = false;
  

  constructor( private router: Router, private api: ApiService, public detail: SearchService ) {

  }

  ngOnInit() {
    this.currentRoute = this.router.url;
    if (this.currentRoute === '/characters') {
      this.cargarPersonajes(); // Llamar la función para cargar los personajes
    }
    if (this.currentRoute === '/comics') {
      this.cargarComics(); // Llamar la función para cargar los comics
    }
    if (this.currentRoute === '/events') {
      this.cargarEvents(); // Llamar la función para cargar los events
    }  
  }

  
  generateNameURL(id: number, name: string): string {
    
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }
  
  private cargarPersonajes() {
    this.mostrarIndicadorDeCarga();
    this.api.getAllCharacters().subscribe((characters: any) => {
      this.allCharacters = characters.data.results;
      this.ocultarIndicadorDeCarga();
    });
  }

  private cargarComics() {
    this.mostrarIndicadorDeCarga();
    this.api.getAllComics().subscribe((comics: any) => {
      this.allCharacters = comics.data.results;
      this.ocultarIndicadorDeCarga();
    });
  }

  private cargarEvents() {
    this.mostrarIndicadorDeCarga();
    this.api.getAllEvents().subscribe((comics: any) => {
      this.allCharacters = comics.data.results;
      this.ocultarIndicadorDeCarga();
    });
  }

  private mostrarIndicadorDeCarga() {
    this.isLoading = true; // Aseguramos que isLoading se establezca en falso
    this.isPagination = false;
  }

  private ocultarIndicadorDeCarga() {
    this.isLoading = false; // Aseguramos que isLoading se establezca en falso
    this.isPagination = true;
  }
}
  // getId(idCharacter: number) {
  //   this.router.navigate(['/comics/details', idCharacter]);
  // }

  // generateSlugForURL(id: number, name: string): string {
  //   this.detail.idDetail = id;
  //   return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  // }
  
  // navigateToDetails(event: MouseEvent) {
  //   const target = event.target as HTMLElement;
  //   const slug = target.getAttribute('id');
    
  //   if (slug) {
  //     const newURL = `${window.location.origin}/comics/details/${this.generateSlugForURL(name)}`;
  //     window.open(newURL, '_blank');
  //   }
  // }
  


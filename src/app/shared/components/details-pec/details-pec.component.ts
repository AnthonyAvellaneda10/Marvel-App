import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-details-pec',
  templateUrl: './details-pec.component.html',
  styleUrls: ['./details-pec.component.css']
})
export class DetailsPECComponent {
  name!:string;
  isLoading = true;
  isDetail = false;


  constructor( private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.mostrarIndicadorDeCarga();
    this.getURL()
    this.activatedRoute.params.subscribe(params => this.name = params['nameCharacter']);

    
  }

  private getURL(){
    this.activatedRoute.params.subscribe(params => this.name = params['nameCharacter']);
    this.ocultarIndicadorDeCarga();
  }

  private mostrarIndicadorDeCarga() {
    this.isLoading = true; // Aseguramos que isLoading se establezca en falso
    this.isDetail = false;
  }

  private ocultarIndicadorDeCarga() {
    this.isLoading = false; // Aseguramos que isLoading se establezca en falso
    this.isDetail = true;
  }

}

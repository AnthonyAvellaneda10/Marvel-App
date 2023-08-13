import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  id!: number;
  idDetail!: number;

  constructor(private http: HttpClient) { }

  private filterSubject = new BehaviorSubject<string>('');

  setFilter(filter: string): void {
    this.filterSubject.next(filter);
  }

  getFilter(): BehaviorSubject<string> {
    return this.filterSubject;
  }

  getDetails(){
    // idDetail: number;
    this.id = this.idDetail;
    const urlEvents = `https://gateway.marvel.com:443/v1/public/characters/${this.id}?apikey=97a6fcd5e744d6401c2bb739666e673a`
    return this.http.get(urlEvents);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // private urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?apikey=97a6fcd5e744d6401c2bb739666e673a';
  private apiUrl = 'https://gateway.marvel.com:443/v1/public/';
  private apiKey = '97a6fcd5e744d6401c2bb739666e673a';

  constructor(private http: HttpClient) { }
  
  // getCharacters(offset: number, limit: number, filter: string): Observable<any> {
  //   const url = `${this.apiUrl}characters`;
  //   const params = {
  //     apikey: this.apiKey,
  //     limit: limit.toString(),
  //     offset: offset.toString(),
  //     nameStartsWith: filter,
  //   };

  //   return this.http.get(url, { params });
  // }

  getAllCharacters(){
    const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?limit=40&apikey=97a6fcd5e744d6401c2bb739666e673a';
    return this.http.get(urlAPI);
  }

  getAllComics(){
    const urlComics = 'https://gateway.marvel.com:443/v1/public/comics?apikey=97a6fcd5e744d6401c2bb739666e673a';
    return this.http.get(urlComics);
  }

  getAllEvents(){
    const urlEvents = 'https://gateway.marvel.com:443/v1/public/events?apikey=97a6fcd5e744d6401c2bb739666e673a';
    return this.http.get(urlEvents);
  }

  getCharacter(searchText: string){
    const urlSearch = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchText}&limit=80&apikey=97a6fcd5e744d6401c2bb739666e673a`;

    return this.http.get(urlSearch);
  }
}

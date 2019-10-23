import { Album } from './album';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
// import { map } from 'rxjs/operators'
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _albumUrl = '../assets/album.json';
  constructor(private _http: HttpClient) {}
  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl).pipe(map(response => response.json()<Album>)))
    // return this._http . get( this._albumUrl ). map((response ()=> response.json()<Album>)
  }
}

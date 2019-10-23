import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
// import { map } from 'rxjs/operators'
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/add/operator/map'


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _albumUrl = '../assets/album.json';
  constructor(private _http: HttpClient) {}
  getAlbum(id: number) {
    return this._http
      .get<any>(this._albumUrl)
      .pipe(map((response: Response) => response.json()));
  }
}

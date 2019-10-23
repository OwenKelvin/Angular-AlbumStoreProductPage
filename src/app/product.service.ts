import { Album } from './album';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
// import { map } from 'rxjs/operators'
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { Product } from './product'


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _albumUrl = '../assets/album.json';
  private _productsUrl = '../assets/products.json';
  constructor(private _http: HttpClient) {}
  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl).pipe(map(response => <Album>response.json()))
  }
  getProducts(): Observable<Product[]> {
    return this._http.get(this._productsUrl).map(response => <Product[]>response.json()))
  }
}

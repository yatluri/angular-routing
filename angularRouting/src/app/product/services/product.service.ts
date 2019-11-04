import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private currentCollection: Subject<Array<Product>> = new Subject<
    Array<Product>
  >();
  readonly productCollection$: Observable<
    Array<Product>
  > = this.currentCollection.asObservable();
  private productCollections: Array<Product> = [];

  constructor(private http: HttpClient) {}
  initialize(): Observable<Array<Product>> {
    const url = 'assets/json/product-collection.json';
    return this.http.get<Array<Product>>(url).pipe(
      map((p: Product[]) => {
        this.productCollections = [...p];
        this.currentCollection.next(p);
        return p;
      })
    );
  }

  getProduct(id: number): Product {
     return  {...this.productCollections[this.productCollections.findIndex(p => p.Id === id)]};
     }
}

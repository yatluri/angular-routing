import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  pCollection$: Observable<Array<Product>> = this.pService.productCollection$;
  constructor(
    private pService: ProductService,
    private routerService: Router
  ) {}
  ngOnInit() {
    this.pService.initialize().subscribe();
  }
  onProductEdit(p: Product) {
    const params: NavigationExtras = {
      queryParams: {
        productId: p.Id
      }
    };
    this.routerService.navigate(['/products/product-edit'], params);
  }
}

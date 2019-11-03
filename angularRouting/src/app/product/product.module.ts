import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ProductRouteConfig } from './product.route.config';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent
  ],
  imports: [SharedModule, ProductRouteConfig],
  exports: []
})
export class ProductModule {}

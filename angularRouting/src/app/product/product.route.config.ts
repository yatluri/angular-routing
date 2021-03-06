import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

// resolvers
import { ProductResolverService } from './resolvers/product-resolver.service';

const productRoutes: Routes = [
  { path: 'product-list', component: ProductListComponent },
  {
    path: 'product-detail',
    component: ProductDetailComponent
  },
  {
    path: 'product-edit',
    component: ProductEditComponent,
    resolve: {
      product: ProductResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule]
})
export class ProductRouteConfig {}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { ProductEditModel } from '../../models/product-edit.model';
import { productConfig } from '@shared/constants/product.config';

import { Product } from '../../models/product';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit, OnDestroy {
  productEditForm: FormGroup = this.getProductForm();
  vm = new ProductEditModel();
  private subscriptions: Array<Subscription> = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private pService: ProductService,
    private fb: FormBuilder
  ) {}
  ngOnInit() {
    this.subscriptions.push(
      this.activatedRoute.data.subscribe(data => {
        console.log(data);
        this.updateProductData(data.product);
      })
    );
  }
  ngOnDestroy() {
    if (this.subscriptions.length > 0) {
      this.subscriptions.forEach(s => s.unsubscribe());
    }
  }
  getProductForm(): FormGroup {
    return this.fb.group({
      Id: ['', []],
      SubTypeCode: ['', []],
      CompanyId: ['', []],
      StatusCode: ['', []],
      BussinessLevelCode: ['', [Validators.required]],
      UserId: ['', []],
      Description: ['', []],
      Name: ['', [Validators.required]],
      MediaId: ['', []],
      MediaPath: ['', [Validators.required]],
      UserdOnCompanyStore: ['', []],
      ProductCount: ['', [Validators.required]],
      WebsiteCout: ['', []],
      DisplaySequence: ['', []],
      IsVisible: ['', []]
    });
  }
  updateProductData(p: Product): void {
    this.productEditForm.patchValue({
      ...p,
      BussinessLevelCode: this.getBusinessLevelName(p.BussinessLevelCode),
      StatusCode: p.StatusCode === 'INAC' ? 'InActive' : 'Active'
    });
    console.log(this.productEditForm.value);
  }

  getBusinessLevelName(bCode: string): string {
    switch (bCode) {
      case productConfig.BusinessLevelCode.Company:
        return productConfig.BusinessLevelDisplayName.Company;
      case productConfig.BusinessLevelCode.Corporate:
        return productConfig.BusinessLevelDisplayName.Corporate;
      case productConfig.BusinessLevelCode.Global:
        return productConfig.BusinessLevelDisplayName.Global;
      case productConfig.BusinessLevelCode.Personal:
        return productConfig.BusinessLevelDisplayName.Personal;
      case productConfig.BusinessLevelCode.PersonalShared:
        return productConfig.BusinessLevelDisplayName.PersonalShared;
      default:
        return '';
    }
  }
}

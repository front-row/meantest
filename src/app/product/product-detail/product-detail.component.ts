import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'product-detail-t',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductService]
})
export class ProductDetailComponent implements OnInit {
  @Input() id: string;
  productDetailsForm: FormGroup;

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) {
    this.id = null;
    this.productDetailsForm = this.formBuilder.group({
      name: '',
      lookupCode: '',
      count: 0
    });
  }

  ngOnInit(): void {
    if(this.id) {
      this.productService.getProduct(this.id)
        .then((product: Product) => {
          console.log(product);
          this.productDetailsForm.controls["name"].setValue(product.name);
          this.productDetailsForm.controls["lookupCode"].setValue(product.lookupCode);
          this.productDetailsForm.controls["count"].setValue(product.count);
        });
    }
  }

  onSubmit(productData) {
    var p = new Product();
    p.name = productData.name;
    p.count = productData.count;
    p.lookupCode = productData.lookupCode;
    if(this.id) {
      this.productService.updateProduct(this.id, p);
    }
    else {
      this.productService.addProduct(p);
    }
  }

  deleteClicked() {
    this.productService.deleteProduct(this.id);
  }
}
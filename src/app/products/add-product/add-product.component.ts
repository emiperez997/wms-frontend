import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { Product } from '../interfaces/Product';

@Component({
  selector: 'products-add-product',
  standalone: false,
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  public form: FormGroup;

  constructor(private fb: FormBuilder, private productsService: ProductsService) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      price: ['', [Validators.required, Validators.min(0)]],
      stock: ['', [Validators.required, Validators.min(1)]],
      location: ['', [Validators.required, Validators.minLength(3)]],
      code: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  submit() {
    if (this.form.valid) {
      const product: Product = {
        id: "",
        name: this.form.value.name,
        description: this.form.value.description,
        price: this.form.value.price,
        stock: this.form.value.stock,
        location: this.form.value.location,
        code: this.form.value.code
      };

      this.productsService.addProduct(product); 
      
      this.form.reset();
    }
  }
}

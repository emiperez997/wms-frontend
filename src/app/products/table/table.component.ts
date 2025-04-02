import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'products-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  constructor(private productService: ProductsService) { }

  get products() {
    return this.productService.getProducts();
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
  }
}
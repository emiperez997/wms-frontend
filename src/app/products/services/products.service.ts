import { Injectable } from '@angular/core';
import { Product } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      price: 10,
      stock: 100
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description 2',
      price: 20,
      stock: 200
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description 3',
      price: 30,
      stock: 300
    }
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product): void {
    product.id = this.products[this.products.length - 1].id + 1;
    this.products.push(product);
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter(product => product.id !== id);
  }
}

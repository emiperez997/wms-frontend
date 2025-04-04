import { Injectable } from '@angular/core';
import { Product } from '../interfaces/Product';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = [
    {
      id: uuid(),
      name: 'Product 1',
      description: 'Description 1',
      price: 10,
      stock: 100,
      location: 'Location 1',
      code: 'ABC123'
    },
    {
      id: uuid(),
      name: 'Product 2',
      description: 'Description 2',
      price: 20,
      stock: 200,
      location: 'Location 1',
      code: 'DEF456',
    },
    {
      id: uuid(),
      name: 'Product 3',
      description: 'Description 3',
      price: 30,
      stock: 300,
      location: 'Location 2',
      code: 'GHI789',
    }
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product): void {
    product.id = uuid();;
    this.products.push(product);
  }

  deleteProduct(id: string): void {
    this.products = this.products.filter(product => product.id !== id);
  }
}

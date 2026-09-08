import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { PRODUCTS } from '../data/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   private products: Product[] = PRODUCTS;

  getProducts(): Product[] {
    return this.products;
  }

  getProductsByCategory(category: string): Product[] {
    return this.products.filter(
      product => product.category === category
    );
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(
      product => product.id === id
    );
  }
}

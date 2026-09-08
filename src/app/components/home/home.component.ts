import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
    RouterLink,
    ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
featuredProducts: Product[] = [];

  categories = [
    {
      name: 'Embroidery',
      slug: 'embroidery',
      image: 'assets/images/kl.jpg'
    },
    {
      name: 'Kurti',
      slug: 'kurti',
      image: 'assets/images/sunflower.jpg'
    },
    {
      name: 'Blouse',
      slug: 'blouse',
      image: 'assets/images/Gajra-scrunchie.jpg'
    },
    {
      name: 'Crochet',
      slug: 'crochet',
      image: 'assets/images/Bow-keychain.jpg'
    },
    {
      name: 'Other',
      slug: 'other',
      image: 'assets/images/Airpod-Pouch.jpg'
    }
  ];

  constructor(
    private productService: ProductService
  ) {
    this.featuredProducts =
      this.productService.getProducts().slice(0, 6);
  }

}

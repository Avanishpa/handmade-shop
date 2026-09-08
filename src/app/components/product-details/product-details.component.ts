import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule,
    RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      const id = Number(params.get('id'));

      this.product =
        this.productService.getProductById(id);

    });

  }

  orderOnWhatsApp(): void {

  if (!this.product) {
    return;
  }

  const message = `Hello, I want to order this product.

Product: ${this.product.name}
Product ID: ${this.product.id}
Price: ₹${this.product.price}`;

  const whatsappNumber = '917041217511';

  const whatsappUrl =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(
    whatsappUrl,
    '_blank'
  );
}
}

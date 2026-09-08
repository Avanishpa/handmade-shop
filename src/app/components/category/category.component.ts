import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule,
    RouterLink,
    ProductCardComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {

  categoryName = '';
  categorySlug = '';

  products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      this.categorySlug =
        params.get('category') || '';

      this.categoryName =
        this.formatCategoryName(this.categorySlug);

      this.products =
        this.productService.getProductsByCategory(
          this.categorySlug
        );

    });

  }

  private formatCategoryName(category: string): string {

    if (!category) {
      return '';
    }

    return category.charAt(0).toUpperCase()
      + category.slice(1);

  }
}

import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  products: any = [];
  constructor(private productsService: ProductsService) {}

  getData() {
    this.productsService.getData().subscribe((response) => {
      this.products = response.products;
    });
  }
}

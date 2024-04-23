import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/entities/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent {
  @Input() productsListening?: Product[];
  @Output() editItemEvent = new EventEmitter<Product>();
  @Output() deleteItemEvent = new EventEmitter<Product>();

  edit(item: Product) {
    //console.log(item);
    this.editItemEvent.emit(item);
  }
  delete(item: Product) {
    //console.log(item);
    this.deleteItemEvent.emit(item);
  }
}

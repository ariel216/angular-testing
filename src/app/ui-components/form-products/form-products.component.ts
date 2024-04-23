import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/entities/product';

@Component({
  selector: 'app-form-products',
  templateUrl: './form-products.component.html',
  styleUrls: ['./form-products.component.css'],
})
export class FormProductsComponent {
  products: Product[] = [];
  id = 0;
  nombre = 'Ejemplo';
  precio = 30;
  indice = 0;

  ngOnInit() {
    this.products = [
      { id: 1, nombre: 'Producto A  ', precio: 10 },
      { id: 2, nombre: 'Producto B', precio: 30 },
    ];
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      if (this.id == 0) {
        this.products.push({
          id: new Date().getUTCDate(),
          nombre: this.nombre,
          precio: this.precio,
        });
      } else {
        this.products[this.indice] = {
          id: this.id,
          nombre: this.nombre,
          precio: this.precio,
        };
        this.id = 0;
        this.indice = 0;
      }
    }
  }

  editItem(event: any) {
    this.id = event.id;
    this.nombre = event.nombre;
    this.precio = event.precio;
    this.indice = this.products.indexOf(event);
  }
}

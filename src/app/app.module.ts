import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListadoComponent } from './listado/listado.component';
import { AcercaComponent } from './acerca/acerca.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { FormProductsComponent } from './ui-components/form-products/form-products.component';
import { FormsModule } from '@angular/forms';
import { ListProductsComponent } from './ui-components/list-products/list-products.component';
import { NoWhiteSpacesPipe } from './utils/no-white-spaces.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListadoComponent,
    AcercaComponent,
    NotFoundComponent,
    ProductsComponent,
    FormProductsComponent,
    ListProductsComponent,
    NoWhiteSpacesPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

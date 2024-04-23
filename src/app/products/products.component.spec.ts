import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { FormProductsComponent } from '../ui-components/form-products/form-products.component';
import { FormsModule } from '@angular/forms';
import { ListProductsComponent } from '../ui-components/list-products/list-products.component';
import { NoWhiteSpacesPipe } from '../utils/no-white-spaces.pipe';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        ProductsComponent,
        FormProductsComponent,
        ListProductsComponent,
        NoWhiteSpacesPipe,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

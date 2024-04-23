import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProductsComponent } from './form-products.component';
import { ListProductsComponent } from '../list-products/list-products.component';
import { NoWhiteSpacesPipe } from 'src/app/utils/no-white-spaces.pipe';
import { FormsModule, NgForm } from '@angular/forms';

describe('FormProductsComponent', () => {
  let component: FormProductsComponent;
  let fixture: ComponentFixture<FormProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        FormProductsComponent,
        ListProductsComponent,
        NoWhiteSpacesPipe,
        NgForm,
      ],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not submit if required fields are empty', () => {
    const formElement: HTMLFormElement =
      fixture.nativeElement.querySelector('form');

    formElement.dispatchEvent(new Event('submit')); // Simula el envío del formulario

    fixture.detectChanges();
    expect(spyOn(component, 'onSubmit')).not.toHaveBeenCalled();
  });

  it('should submit if required fields are filled', () => {
    const formElement: HTMLFormElement =
      fixture.nativeElement.querySelector('form');

    const nombreElement: HTMLInputElement = fixture.nativeElement.querySelector(
      'input[name="nombre"]'
    );
    nombreElement.value = 'Test Value';
    nombreElement.dispatchEvent(new Event('input')); // Simula la entrada de datos en el campo

    const precioElement: HTMLInputElement = fixture.nativeElement.querySelector(
      'input[name="precio"]'
    );
    precioElement.value = '123';
    precioElement.dispatchEvent(new Event('input'));

    spyOn(component, 'onSubmit');
    formElement.dispatchEvent(new Event('submit')); // Simula el envío del formulario

    fixture.detectChanges();
    expect(component.onSubmit).toHaveBeenCalled();
  });
});

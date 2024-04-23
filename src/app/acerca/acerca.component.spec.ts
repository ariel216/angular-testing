import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaComponent } from './acerca.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AcercaComponent', () => {
  let component: AcercaComponent;
  let fixture: ComponentFixture<AcercaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcercaComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AcercaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

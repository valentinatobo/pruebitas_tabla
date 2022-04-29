import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebitaComponent } from './pruebita.component';

describe('PruebitaComponent', () => {
  let component: PruebitaComponent;
  let fixture: ComponentFixture<PruebitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

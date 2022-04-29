import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesTablaComponent } from './clientes-tabla.component';

describe('ClientesTablaComponent', () => {
  let component: ClientesTablaComponent;
  let fixture: ComponentFixture<ClientesTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesTablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

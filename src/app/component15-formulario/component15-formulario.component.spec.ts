import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component15FormularioComponent } from './component15-formulario.component';

describe('Component15FormularioComponent', () => {
  let component: Component15FormularioComponent;
  let fixture: ComponentFixture<Component15FormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component15FormularioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Component15FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

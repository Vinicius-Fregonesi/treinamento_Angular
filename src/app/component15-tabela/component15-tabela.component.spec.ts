import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component15TabelaComponent } from './component15-tabela.component';

describe('Component15TabelaComponent', () => {
  let component: Component15TabelaComponent;
  let fixture: ComponentFixture<Component15TabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component15TabelaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Component15TabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

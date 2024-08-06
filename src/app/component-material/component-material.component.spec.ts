import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentMaterialComponent } from './component-material.component';

describe('ComponentMaterialComponent', () => {
  let component: ComponentMaterialComponent;
  let fixture: ComponentFixture<ComponentMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentMaterialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

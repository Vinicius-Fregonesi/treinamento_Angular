import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component15Component } from './component15.component';

describe('Component15Component', () => {
  let component: Component15Component;
  let fixture: ComponentFixture<Component15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component15Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

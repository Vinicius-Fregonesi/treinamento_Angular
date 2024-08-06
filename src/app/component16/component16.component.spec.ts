import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component16Component } from './component16.component';

describe('Component16Component', () => {
  let component: Component16Component;
  let fixture: ComponentFixture<Component16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component16Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomComponentDemoComponent } from './custom-component-demo.component';

describe('CustomComponentDemoComponent', () => {
  let component: CustomComponentDemoComponent;
  let fixture: ComponentFixture<CustomComponentDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomComponentDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomComponentDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

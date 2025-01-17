import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDemoComponent } from './structural-demo.component';

describe('StructuralDemoComponent', () => {
  let component: StructuralDemoComponent;
  let fixture: ComponentFixture<StructuralDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

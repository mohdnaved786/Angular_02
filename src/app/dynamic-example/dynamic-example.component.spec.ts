import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicExampleComponent } from './dynamic-example.component';

describe('DynamicExampleComponent', () => {
  let component: DynamicExampleComponent;
  let fixture: ComponentFixture<DynamicExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicExampleComponent]
    });
    fixture = TestBed.createComponent(DynamicExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

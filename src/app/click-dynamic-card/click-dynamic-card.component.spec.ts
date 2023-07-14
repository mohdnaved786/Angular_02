import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickDynamicCardComponent } from './click-dynamic-card.component';

describe('ClickDynamicCardComponent', () => {
  let component: ClickDynamicCardComponent;
  let fixture: ComponentFixture<ClickDynamicCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickDynamicCardComponent]
    });
    fixture = TestBed.createComponent(ClickDynamicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

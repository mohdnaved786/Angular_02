import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MushahidComponent } from './mushahid.component';

describe('MushahidComponent', () => {
  let component: MushahidComponent;
  let fixture: ComponentFixture<MushahidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MushahidComponent]
    });
    fixture = TestBed.createComponent(MushahidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

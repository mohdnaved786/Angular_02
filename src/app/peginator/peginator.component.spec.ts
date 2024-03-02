import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeginatorComponent } from './peginator.component';

describe('PeginatorComponent', () => {
  let component: PeginatorComponent;
  let fixture: ComponentFixture<PeginatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeginatorComponent]
    });
    fixture = TestBed.createComponent(PeginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

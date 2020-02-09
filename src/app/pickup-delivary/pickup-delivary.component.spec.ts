import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupDelivaryComponent } from './pickup-delivary.component';

describe('PickupDelivaryComponent', () => {
  let component: PickupDelivaryComponent;
  let fixture: ComponentFixture<PickupDelivaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickupDelivaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupDelivaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackuserComponent } from './trackuser.component';

describe('TrackuserComponent', () => {
  let component: TrackuserComponent;
  let fixture: ComponentFixture<TrackuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

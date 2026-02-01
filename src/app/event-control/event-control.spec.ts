import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventControl } from './event-control';

describe('EventControl', () => {
  let component: EventControl;
  let fixture: ComponentFixture<EventControl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventControl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventControl);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

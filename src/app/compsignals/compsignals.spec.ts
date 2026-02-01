import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compsignals } from './compsignals';

describe('Compsignals', () => {
  let component: Compsignals;
  let fixture: ComponentFixture<Compsignals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Compsignals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Compsignals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

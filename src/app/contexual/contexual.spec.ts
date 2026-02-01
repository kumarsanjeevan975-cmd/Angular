import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contexual } from './contexual';

describe('Contexual', () => {
  let component: Contexual;
  let fixture: ComponentFixture<Contexual>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contexual]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contexual);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

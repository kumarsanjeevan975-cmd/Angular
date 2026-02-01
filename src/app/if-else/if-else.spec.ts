import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfELSE } from './if-else';

describe('IfELSE', () => {
  let component: IfELSE;
  let fixture: ComponentFixture<IfELSE>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfELSE]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfELSE);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

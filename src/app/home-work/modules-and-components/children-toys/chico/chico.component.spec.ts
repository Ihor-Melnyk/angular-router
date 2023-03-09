import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChicoComponent } from './chico.component';

describe('ChicoComponent', () => {
  let component: ChicoComponent;
  let fixture: ComponentFixture<ChicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

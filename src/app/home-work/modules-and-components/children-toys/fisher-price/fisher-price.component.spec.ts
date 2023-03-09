import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FisherPriceComponent } from './fisher-price.component';

describe('FisherPriceComponent', () => {
  let component: FisherPriceComponent;
  let fixture: ComponentFixture<FisherPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FisherPriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FisherPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

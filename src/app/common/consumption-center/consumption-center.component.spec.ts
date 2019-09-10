import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumptionCenterComponent } from './consumption-center.component';

describe('ConsumptionCenterComponent', () => {
  let component: ConsumptionCenterComponent;
  let fixture: ComponentFixture<ConsumptionCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumptionCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumptionCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

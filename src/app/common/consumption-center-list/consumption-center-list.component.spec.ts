import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumptionCenterListComponent } from './consumption-center-list.component';

describe('ConsumptionCenterListComponent', () => {
  let component: ConsumptionCenterListComponent;
  let fixture: ComponentFixture<ConsumptionCenterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumptionCenterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumptionCenterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

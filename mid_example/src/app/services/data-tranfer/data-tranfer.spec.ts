import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTranfer } from './data-tranfer';

describe('DataTranfer', () => {
  let component: DataTranfer;
  let fixture: ComponentFixture<DataTranfer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataTranfer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataTranfer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

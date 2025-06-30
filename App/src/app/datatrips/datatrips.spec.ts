import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datatrips } from './datatrips';

describe('Datatrips', () => {
  let component: Datatrips;
  let fixture: ComponentFixture<Datatrips>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Datatrips]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Datatrips);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

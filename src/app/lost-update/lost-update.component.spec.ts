import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostUpdateComponent } from './lost-update.component';

describe('LostUpdateComponent', () => {
  let component: LostUpdateComponent;
  let fixture: ComponentFixture<LostUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LostUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LostUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

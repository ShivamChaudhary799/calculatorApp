import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaldisplayComponent } from './caldisplay.component';

describe('CaldisplayComponent', () => {
  let component: CaldisplayComponent;
  let fixture: ComponentFixture<CaldisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaldisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaldisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

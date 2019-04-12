import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnVerticalComponent } from './column-vertical.component';

describe('ColumnVerticalComponent', () => {
  let component: ColumnVerticalComponent;
  let fixture: ComponentFixture<ColumnVerticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnVerticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

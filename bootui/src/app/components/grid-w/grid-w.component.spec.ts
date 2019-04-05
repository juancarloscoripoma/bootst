import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridWComponent } from './grid-w.component';

describe('GridWComponent', () => {
  let component: GridWComponent;
  let fixture: ComponentFixture<GridWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

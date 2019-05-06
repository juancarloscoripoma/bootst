import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskDemoComponent } from './mask-demo.component';

describe('MaskDemoComponent', () => {
  let component: MaskDemoComponent;
  let fixture: ComponentFixture<MaskDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaskDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaskDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WlecomeComponent } from './wlecome.component';

describe('WlecomeComponent', () => {
  let component: WlecomeComponent;
  let fixture: ComponentFixture<WlecomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WlecomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WlecomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

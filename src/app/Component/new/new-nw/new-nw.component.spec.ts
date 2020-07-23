import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNwComponent } from './new-nw.component';

describe('NewNwComponent', () => {
  let component: NewNwComponent;
  let fixture: ComponentFixture<NewNwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewNwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

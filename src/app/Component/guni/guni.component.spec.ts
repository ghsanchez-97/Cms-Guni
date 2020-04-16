import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuniComponent } from './guni.component';

describe('GuniComponent', () => {
  let component: GuniComponent;
  let fixture: ComponentFixture<GuniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

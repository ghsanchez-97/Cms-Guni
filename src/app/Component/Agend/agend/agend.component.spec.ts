import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendComponent } from './agend.component';

describe('AgendComponent', () => {
  let component: AgendComponent;
  let fixture: ComponentFixture<AgendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendListComponent } from './agend-list.component';

describe('AgendListComponent', () => {
  let component: AgendListComponent;
  let fixture: ComponentFixture<AgendListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

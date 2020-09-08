import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendNewComponent } from './agend-new.component';

describe('AgendNewComponent', () => {
  let component: AgendNewComponent;
  let fixture: ComponentFixture<AgendNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

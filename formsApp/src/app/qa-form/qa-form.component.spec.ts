import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QAFormComponent } from './qa-form.component';

describe('QAFormComponent', () => {
  let component: QAFormComponent;
  let fixture: ComponentFixture<QAFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QAFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QAFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

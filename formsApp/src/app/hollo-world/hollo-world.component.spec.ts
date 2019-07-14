import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolloWorldComponent } from './hollo-world.component';

describe('HolloWorldComponent', () => {
  let component: HolloWorldComponent;
  let fixture: ComponentFixture<HolloWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolloWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolloWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

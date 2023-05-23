import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UppyComponent } from './uppy.component';

describe('UppyComponent', () => {
  let component: UppyComponent;
  let fixture: ComponentFixture<UppyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UppyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UppyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

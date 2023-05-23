import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2FileUploadComponent } from './ng2-file-upload.component';

describe('Ng2FileUploadComponent', () => {
  let component: Ng2FileUploadComponent;
  let fixture: ComponentFixture<Ng2FileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ng2FileUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ng2FileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

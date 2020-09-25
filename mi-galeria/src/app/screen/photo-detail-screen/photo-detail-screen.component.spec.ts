import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoDetailScreenComponent } from './photo-detail-screen.component';

describe('PhotoDetailScreenComponent', () => {
  let component: PhotoDetailScreenComponent;
  let fixture: ComponentFixture<PhotoDetailScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoDetailScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoDetailScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

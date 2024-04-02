import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { VideoSizeComponent } from './video-size.component';

import { VideoSizeComponent } from './video-size.component';

describe('VideoSizeComponent', () => {
  let component: VideoSizeComponent;
  let fixture: ComponentFixture<VideoSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoSizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

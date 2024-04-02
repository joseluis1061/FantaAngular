import { Component, Renderer2, OnInit, ElementRef, Input, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video-size',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-size.component.html',
  styleUrls: ['./video-size.component.scss'],
})
export class VideoSizeComponent implements OnInit {
  @Input() video: any | "";
  public flipped = true;

  VideoElement: any = null;
  @ViewChild('videoSize', { static: true }) videoSize!: ElementRef;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.VideoElement = this.element.nativeElement.querySelector('video');
      this.renderer.setProperty(this.VideoElement, 'muted', true);
      this.renderer.setProperty(this.VideoElement, 'loop', true);
      this.renderer.setProperty(this.VideoElement, 'playsinline', true);
      this.renderer.setProperty(this.VideoElement, 'autoplay', true);
      this.renderer.setProperty(this.VideoElement, 'controls', false);
      this.VideoElement.currentTime = 0;
    }
  }

  flip() {
    this.flipped = !this.flipped;
  }

  playVideo() {
    if (isPlatformBrowser(this.platformId)) {
      // this.VideoElement.currentTime = 0;
      this.VideoElement.play();
    }
  }

  stopVideo() {
    if (isPlatformBrowser(this.platformId)) {
      this.VideoElement.pause();
    }
  }

  constructor(
    private renderer: Renderer2,
    private element: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
    ) {
    const options = {
      rootMargin: '0px',
      threshold: 0.4
    };
    if (isPlatformBrowser(this.platformId)) {
      //console.log("Browser render **")
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          //console.log(entry.isIntersecting);

            if (entry.isIntersecting) {
              this.playVideo();
              // observer.unobserve(entry.target);
            } else {
              this.stopVideo();
            }
          });
        }, options);

      observer.observe(this.element.nativeElement);
    }
  }

}

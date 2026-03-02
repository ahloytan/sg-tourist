import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-embed-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './embed-map.component.html',
  styleUrls: ['./embed-map.component.scss']
})

export class EmbedMapComponent {
  // hard‑coded list of embed URLs; you can add more entries below
  sources: {name: string, url:string}[] = [
    {
      name: 'A',
      url: 'https://www.google.com/maps/d/embed?mid=1NHlWMJppjVqGeKHniEMHe-J-KwKTRKI&ehbc=2E312F&noprof=1'
    },
    {
      name: 'dentalfloss23',
      url: 'https://www.google.com/maps/d/embed?mid=1DUVGaYzWMyI57hyIToyItjc9BGemv84&ehbc=2E312F&noprof=1'
    },
    {    
      name: 'Vegetarian',
      url: 'https://www.google.com/maps/d/embed?mid=1n00Uzs68Ts-eDrAL4tXQk82EcC0eYKA&ehbc=2E312F&noprof=1'
    }
  ];

  activeIndex = signal(0);

  constructor(private sanitizer: DomSanitizer) {}

  select(index: number) {
    this.activeIndex.set(index);
  }

  get activeSource(): SafeResourceUrl {
    const url = this.sources[this.activeIndex()].url;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { mount } from 'marketing/MarketingBlurb';

@Component({
  selector: 'nxmfe-auth-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
  @ViewChild('marketingBlurb', { static: true }) blurb!: ElementRef;

  ngAfterViewInit() {
    mount(this.blurb.nativeElement);
  }
}

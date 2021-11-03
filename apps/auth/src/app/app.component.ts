import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nxmfe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}

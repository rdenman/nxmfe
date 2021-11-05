import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nxmfe-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInfoComponent {}

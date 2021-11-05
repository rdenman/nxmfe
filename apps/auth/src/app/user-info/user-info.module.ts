import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserInfoComponent } from './user-info.component';

@NgModule({
  declarations: [UserInfoComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [UserInfoComponent],
})
export class UserInfoModule {}

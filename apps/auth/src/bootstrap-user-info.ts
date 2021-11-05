import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'zone.js';
import { UserInfoModule } from './app/user-info/user-info.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const mount = (el: Element) => {
  el.innerHTML = `<nxmfe-user-info />`;
  platformBrowserDynamic().bootstrapModule(UserInfoModule);
};

export { mount };

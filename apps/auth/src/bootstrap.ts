import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'zone.js';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const mount = (el: Element) => {
  el.innerHTML = `<nxmfe-root />`;
  platformBrowserDynamic().bootstrapModule(AppModule);
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#_auth-app');
  if (el) {
    mount(el);
  }
}

export { mount };

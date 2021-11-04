import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'zone.js';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const loadStyle = (id: string, href: string) => {
  const style = document.createElement('link');
  style.rel = 'stylesheet';
  style.id = id;
  style.href = href;
  document.getElementsByTagName('head')[0].appendChild(style);
};

const mount = (el: Element) => {
  el.innerHTML = `<nxmfe-dashboard-root />`;
  platformBrowserDynamic().bootstrapModule(AppModule);
  loadStyle(
    'angular_material_theme',
    'http://localhost:4203/angular_material_theme.css'
  );
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#_dashboard-app');
  if (el) {
    mount(el);
  }
}

export { mount };

import { createBrowserHistory, createMemoryHistory, History } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';

interface MountProps {
  defaultHistory?: History;
  initialPath?: string;
  onNavigate?(): void;
}

const mount = (
  el: Element,
  { defaultHistory, initialPath, onNavigate }: MountProps
) => {
  const history =
    defaultHistory ?? createMemoryHistory({ initialEntries: [initialPath!] });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }: { pathname: string }) {
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#_marketing-app');
  if (el) {
    mount(el, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };

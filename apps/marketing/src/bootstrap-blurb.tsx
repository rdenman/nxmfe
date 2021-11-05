import React from 'react';
import ReactDOM from 'react-dom';
import Blurb from './app/components/Blurb';

const mount = (el: Element) => {
  ReactDOM.render(<Blurb />, el);
};

export { mount };

import React from 'react';
import ReactDOM from 'react-dom';

//The Heavy Core-js@3 way of including stable polyfills
import 'core-js/stable';
import 'regenerator-runtime/runtime';
// Please polyfill what you need or the above if you don't care about size, it'll add 500kb to bundle size

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
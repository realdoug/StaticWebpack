require('../css/main.css');
import {
  message,
  setElementValue,
  SimpleReact,
  StatefulReact
} from './main';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <StatefulReact />,
  document.getElementById('root')
);

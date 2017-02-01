/* eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import './styles/styles.scss';

import './favicon.ico';

import IndexContainer from './components/IndexContainer';

render(<IndexContainer />, document.getElementById('app'));

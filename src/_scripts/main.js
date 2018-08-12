// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';


import General from './general';
import Lazyload from './lazyload';
import Header from '../_modules/header/header';
import Icon from '../_modules/icon/icon';

$(() => {
  new General();
  new Lazyload();
  new Header();
  new Icon();
});

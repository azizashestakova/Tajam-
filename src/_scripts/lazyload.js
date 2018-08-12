'use strict';

import Blazy from 'blazy';

export default class Lazyload{
  constructor() {
    this.lazyload();
  }
  lazyload() {
    let blazy = new Blazy({});

    // window.bLazyBackground = bLazyBackground;
    // window.bLazyImages = bLazyImages;
    
    // let holder = document.querySelector('.partnersnews__container');
    // document.addEventListener('DOMNodeInserted', (event) => {
    //   bLazyBackground.revalidate();
    //   bLazyImages.revalidate();
    // });
  }
}
'use strict';

import Youtube from '../youtube';

describe('Youtube View', function() {

  beforeEach(() => {
    this.youtube = new Youtube();
  });

  it('Should run a few assertions', () => {
    expect(this.youtube);
  });

});

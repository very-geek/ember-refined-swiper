'use strict';

module.exports = {
  name: 'ember-refined-swiper',

  included(app) {
    this._super.included && this._super.included.apply(this, arguments);
    this.app = app;

    while (app.app) app = app.app;

    const bowerDir = app.bowerDirectory;
    const options = app.options['ember-refined-swiper'];

    app.import(bowerDir + '/Swiper/dist/css/swiper.css');

    if (options && options.vanilla) {
      app.import(bowerDir + '/Swiper/dist/js/swiper.min.js');
    } else {
      app.import(bowerDir + '/Swiper/dist/js/swiper.jquery.umd.min.js');
    }

    app.import('vendor/shims/swiper.js')
  }
};

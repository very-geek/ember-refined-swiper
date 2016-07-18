/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-refined-swiper',

  included(app) {
    this._super.included(app);

    const swiperOptions = app.options['ember-refined-swiper'];

    if (swiperOptions.vanilla) {
      this.app.import(app.bowerDirectory + '/Swiper/dist/css/swiper.css');
      this.app.import(app.bowerDirectory + '/Swiper/dist/js/swiper.min.js');
    } else {
      this.app.import(app.bowerDirectory + '/Swiper/dist/css/swiper.min.css');
      this.app.import(app.bowerDirectory + '/Swiper/dist/js/swiper.jquery.umd.min.js');
    }
  }
};

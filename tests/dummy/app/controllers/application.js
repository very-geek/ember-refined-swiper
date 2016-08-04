import Ember from 'ember';
import $ from 'jquery';

export default Ember.Controller.extend({
  currentBG: '',
  actions: {
    initSwiper(swiper) {
      this.set('currentBG', $(swiper.slides[swiper.activeIndex]).find('img').attr('src'));
    },

    swiperChangeStart(swiper) {
      this.set('currentBG', $(swiper.slides[swiper.activeIndex]).find('img').attr('src'));
    }
  }
});

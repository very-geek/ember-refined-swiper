import Component from 'ember-component';
import layout from 'ember-refined-swiper/templates/components/swiper-slide';

export default Component.extend({
  layout,

  classNames: ['swiper-slide'],

  attributeBindings: ['data-hash']
});

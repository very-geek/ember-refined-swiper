import Ember from 'ember';
import layout from '../templates/components/swiper-container';
// import Swiper from 'swiper';

const defaults = [
  {key: 'pagination', value: '.swiper-pagination'},
  {key: 'prevButton', value: '.swiper-button-prev'},
  {key: 'nextButton', value: '.swiper-button-next'},
  {key: 'scrollbar', value: '.swiper-scrollbar'}
];

export default Ember.Component.extend({
  layout,

  classNames: ['swiper-container'],

  didReceiveAttrs() {
    this._super(...arguments);

    if (this.attrs.options) {
      this._processOptionalCustomClassNames(this.attrs.options);
    }
  },

  /*
   * process customized class names for prev/next buttons pagination and
   * scrollbar
   *
   * @private
   */
  _processOptionalCustomClassNames(options) {
    defaults.forEach(option => {
      if (options && options[option.key]) {

        if (options[option.key] === option.value) {
          this.set(`${option.key}ClassName`, option.value.slice(1))
        }
        else {
          this.set(`${option.key}ClassName`,
            [option.value.slice(1), options[option.key].slice(1)].join(' '))
        }
      }
    })
  }
});

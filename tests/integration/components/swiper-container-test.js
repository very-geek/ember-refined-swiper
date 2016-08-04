import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('swiper-container',
                   'Integration | Component | swiper-container',
                   { integration: true });

test('it doesn\'t allow inline rendering', function(assert) {
  this.render(hbs`{{swiper-container}}`);

  assert.equal(this.$().text().trim(),
               `This component only support block rendering, inline rendering will be useless.
    这个组件仅支持块级方式渲染，内联方式渲染将毫无作用。`,
               'inline rendering should print out friendly warning');
});

test('it provides the basic required html structures', function(assert) {
  this.render(hbs`
    {{#swiper-container}}
      <section class="swiper-slide">anything</section>
    {{/swiper-container}}
  `);

  const $component = this.$(':first-child');

  assert.ok($component.hasClass('swiper-container'),
            '.swiper-container should be existed on 1st level div');
  assert.ok($component.find(':first-child').hasClass('swiper-wrapper'),
            '.swiper-wrapper should be existed on 2nd level div');
  assert.equal($component.find('.swiper-slide').text().trim(), 'anything');
});

test('it renders extra sturctures by options hash w/ default value', function(assert) {
  this.render(hbs`
    {{#swiper-container options=(hash
      prevButton=".swiper-button-prev"
      nextButton=".swiper-button-next"
      scrollbar=".swiper-scrollbar"
      pagination=".swiper-pagination"
    )}}
      <section class="swiper-slide">anything</section>
    {{/swiper-container}}
  `);

  const $container = this.$(':first-child');

  assert.ok($container.find('.swiper-scrollbar').length > 0,
            'check for .swiper-scrollbar');
  assert.ok($container.find('.swiper-button-prev').length > 0,
            'check for .swiper-button-prev');
  assert.ok($container.find('.swiper-button-next').length > 0,
            'check for .swiper-button-next');
  assert.ok($container.find('.swiper-pagination').length > 0,
            'check for .swiper-pagination');
});

test('it also allows customized class name for extra sturctures', function(assert) {
  this.render(hbs`
    {{#swiper-container options=(hash
      prevButton=".custom-button-prev"
      nextButton=".custom-button-next"
      scrollbar=".custom-scrollbar"
      pagination=".custom-pagination"
    )}}
      <section class="swiper-slide">anything</section>
    {{/swiper-container}}
  `);

  const $container = this.$(':first-child');

  assert.ok($container.find('.custom-button-prev').length > 0,
            'check for .custom-button-prev');
  assert.ok($container.find('.custom-button-next').length > 0,
            'check for .custom-button-next');
  assert.ok($container.find('.custom-scrollbar').length > 0,
            'check for .custom-scrollbar');
  assert.ok($container.find('.custom-pagination').length > 0,
            'check for .custom-pagination');
});

test('even customized class names still have the default class name', function(assert) {
  this.render(hbs`
    {{#swiper-container options=(hash
      prevButton=".custom-button-prev"
      nextButton=".custom-button-next"
      scrollbar=".custom-scrollbar"
      pagination=".custom-pagination"
    )}}
      <section class="swiper-slide">anything</section>
    {{/swiper-container}}
  `);

  const $container = this.$(':first-child');

  assert.ok(
    $container.find('.custom-button-prev').hasClass('swiper-button-prev'),
    'check for .*-button-prev'
  );
  assert.ok(
    $container.find('.custom-button-next').hasClass('swiper-button-next'),
    'check for .*-button-next'
  );
  assert.ok(
    $container.find('.custom-scrollbar').hasClass('swiper-scrollbar'),
    'check for .*-scrollbar'
  );
  assert.ok(
    $container.find('.custom-pagination').hasClass('swiper-pagination'),
    'check for .*-pagination'
  );
});

test('it yields swiper.slide component with customizable structures', function(assert) {
  this.render(hbs`
    {{#swiper-container as |swiper|}}
      {{#swiper.slide class="custom-slide"}}A{{/swiper.slide}}
      {{#swiper.slide}}B{{/swiper.slide}}
      {{#swiper.slide}}C{{/swiper.slide}}
    {{/swiper-container}}
  `);

  const $component = this.$(':first-child');

  assert.ok($component.find('.swiper-slide').length === 3);
  assert.ok($component.find('.custom-slide').length === 1);
});

test('it initializ Swiper properlly', function(assert) {
  this.render(hbs`
    {{#swiper-container as |swiper|}}
      {{#swiper.slide}}A{{/swiper.slide}}
      {{#swiper.slide}}B{{/swiper.slide}}
      {{#swiper.slide}}C{{/swiper.slide}}
    {{/swiper-container}}
  `);

  const $component = this.$(':first-child');

  assert.ok($component.hasClass('swiper-container-horizontal'));
});

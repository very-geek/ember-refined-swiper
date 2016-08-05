module.exports = {
  name: 'ember-refined-swiper',
  description: 'install swiper through bower',

  normalizeEntityName() {},

  afterInstall() {
    return this.addBowerPackageToProject('swiper');
  }
};

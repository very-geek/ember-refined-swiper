module.exports = {
  name: 'ember-refined-swiper',
  description: 'install swiper through bower',

  normalizeEntiryName() {},

  afterInstall() {
    return this.addBowerPackageToProject('swiper');
  }
};

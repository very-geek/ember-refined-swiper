module.exports = {
  name: 'ember-refined-swiper',

  normalizeEntiryName() {},

  afterInstall() {
    return this.addBowerPackageToProject('swiper');
  }
};

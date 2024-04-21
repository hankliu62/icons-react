const fabric = require('@hankliu/fabric');

module.exports = [
  fabric.eslint,
  {
    ignores: ['src/icons', 'plugins/*.js', 'es/*', 'lib/*', 'dist/*']
  }
];
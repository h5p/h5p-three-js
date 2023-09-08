H5P.ThreeJS = (() => {
  global.THREE = require('three');
  require('three/examples/js/renderers/CSS3DRenderer.js');
  require('three/examples/js/renderers/CSS2DRenderer.js');
  return THREE;
})();

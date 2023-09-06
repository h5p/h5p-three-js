const fs = require('fs');
const srcFile = 'node_modules/three/build/three.min.js';

// builds content from template and input
const fromTemplate = (template, input) => {
  for (let item in input) {
    template = template.replaceAll(`{${item}}`, input[item]);
  }
  return template;
}

module.exports = function(source) {
  const srcData = fs.readFileSync(srcFile, 'utf-8');
  if (!srcData) {
    throw new Error('invalid_src_data');
  }
  const template = fs.readFileSync('template.js', 'utf-8');
  const output = fromTemplate(template, { 'src.three.min.js': srcData });
  this.emitFile('three.min.js', output); // webpack distorts the source three.min.js file content so we emit it instead
  return ''; // this will create a blank file since webpack forces you to output one
}

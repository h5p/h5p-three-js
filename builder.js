const fs = require('fs');
const srcFile = 'node_modules/three/build/three.min.js';

// builds content from template and input
const fromTemplate = (template, input) => {
  for (let item in input) {
    template = template.replaceAll(`{${item}}`, input[item]);
  }
  return template;
}

const build = async() => {
  try {
    const srcData = fs.readFileSync(srcFile, 'utf-8');
    if (!srcData) {
      throw new Error('invalid_src_data');
    }
    const template = fs.readFileSync('template.txt', 'utf-8');
    const output = fromTemplate(template, { 'src.three.min.js': srcData });
    fs.writeFileSync('three.min.js', output);
    console.log('> done');
    process.exit();
  }
  catch (error) {
    console.log(error);
    process.exit(1);
  }
}
build();

const fs = require('fs');
const superAgent = require('superagent');

const srcURL = 'https://raw.githubusercontent.com/mrdoob/three.js/{commit}/build/three.min.js';
const srcFile = 'src.three.min.js';

const commit = '37bbe4e749843c50d4ff79db6f73e43ad6d31895'; // three.js tag r101

// builds content from template and input
const fromTemplate = (template, input) => {
  for (let item in input) {
    template = template.replaceAll(`{${item}}`, input[item]);
  }
  return template;
}

// get file from source and optionally parse it as JSON
const getFile = async (source) => {
  const output = (await superAgent.get(source).set('User-Agent', 'h5p-cli').ok(res => [200, 404].includes(res.status))).text;
  if (output == '404: Not Found') {
    return '';
  }
  return output;
}

const build = async() => {
  try {
    let srcData = '';
    if (!fs.existsSync('src.min.three.js')) {
      console.log('> fetching source min.three.js');
      srcData = await getFile(fromTemplate(srcURL, { commit }));
      fs.writeFileSync(srcFile, srcData);
    }
    else {
      srcData = fs.readFileSync(srcFile, 'utf-8');
    }
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

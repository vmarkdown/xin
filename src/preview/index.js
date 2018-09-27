require('../common.scss');
require('../../assets/vmarkdown.css');
require('./index.scss');

const Preview = require('./preview.js');
const preview = new Preview();

// (async ()=>{
//     let markdown ='';
//     if(!markdown){
//         markdown = await import('../../assets/demo.md');
//         markdown = markdown.default;
//     }
//     preview.setValue(markdown);
// })();

module.exports = preview;


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

if(!preview.getValue()){
    const __panels__ = window.parent.__panels__;
    if(__panels__.editor){
        const value = __panels__.editor.getValue();
        preview.setValue(value);
    }
}

module.exports = preview;


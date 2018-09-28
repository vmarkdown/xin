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

function getEditor() {
    if(!window.parent || !window.parent.__panels__) return null;
    const __panels__ = window.parent.__panels__;
    return __panels__.editor;
}

if(!preview.getValue()){
    const editor = getEditor();
    if(editor){
        const value = editor.getValue();
        preview.setValue(value);
    }
}

module.exports = preview;


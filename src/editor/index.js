require('../common.scss');
const CodeMirrorEditor = require('../../assets/vmarkdown-codemirror-editor');

const editor = new CodeMirrorEditor(document.getElementById('editor'), {

});



// editor.on('scroll', function () {
//     console.log('scroll');
//
//     const line = editor.getFirstVisibleLine();
//     console.log(line);
// });

// editor.on('cursorChange', function (cursor) {
//     console.log('cursorChange');
//     console.log(cursor);
// });



module.exports = editor;
require('../common.scss');
const CodeMirrorEditor = require('../../assets/vmarkdown-codemirror-editor');

const editor = new CodeMirrorEditor(document.getElementById('editor'), {
});

function getPreviewPanel() {
    const __panels__ = window.parent.__panels__;
    return __panels__.preview;
}

function onEditorChange(change) {
    // console.log('[editorPanel] change');
    const value = editor.getValue();
    previewSetValue(value);
}

function previewSetValue(value) {
    const previewPanel = getPreviewPanel();
    previewPanel && previewPanel.setValue(value);
}

function onEditorSave() {
    const value = editor.getValue();
    localforage.setItem('markdown', value).then(function () {
        console.log('[editorPanel] data has been successfully saved');
    });
}

editor.on("change",  _.debounce(onEditorChange, 200, { 'maxWait': 500 })   );

(async()=>{
    let markdown = await localforage.getItem('markdown');
    if(!markdown){
        markdown = await import('../../assets/github.md');
        markdown = markdown.default;
    }
    editor.setValue(markdown);
    previewSetValue(markdown);
    editor.on('change', _.debounce(onEditorSave, 2000, { 'maxWait': 7000 }));
})();

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
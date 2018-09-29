require('../common.scss');
const CodeMirrorEditor = require('../../assets/vmarkdown-codemirror-editor');

const editor = new CodeMirrorEditor(document.getElementById('editor'), {
});

function getPreview() {
    const __panels__ = window.parent.__panels__;
    return __panels__.preview;
}

let hasInitPreviewValue = false;
let isSaved = true;
function onEditorChange(change) {
    hasInitPreviewValue = true;
    isSaved = false;
    // console.log('[editorPanel] change');
    const value = editor.getValue();
    previewSetValue(value);
}

function previewSetValue(value) {
    hasInitPreviewValue = true;
    const preview = getPreview();
    preview && preview.setValue(value);
}

function onEditorSave() {
    const value = editor.getValue();
    localforage.setItem('markdown', value).then(function () {
        isSaved = true;
        console.log('[editorPanel] data has been successfully saved');
    });
}

function initPreviewValue() {

    if(hasInitPreviewValue) {
        return;
    }

    const preview = getPreview();

    if(preview && editor.getValue() && !preview.getValue()){
        const value = editor.getValue();
        previewSetValue(value);
    }

    !hasInitPreviewValue && setTimeout(()=>{
        initPreviewValue();
    }, 100);
}

(async()=>{
    let markdown = await localforage.getItem('markdown');
    if(!markdown){
        markdown = await import('../../assets/github.md');
        markdown = markdown.default;
    }
    editor.setValue(markdown);

    initPreviewValue();

    editor.on("change",  _.debounce(onEditorChange, 100, { 'maxWait': 500 })   );
    editor.on('change', _.debounce(onEditorSave, 3000, { 'maxWait': 7000 }));
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

window.onbeforeunload = function (e) {
    if(isSaved) {
        return;
    }
    onEditorSave();
    var e = e || window.event;
    if (e) {
        e.returnValue = 'UnSaved, please wait a moment!';
    }
    return 'UnSaved, please wait a moment!';
};


module.exports = editor;
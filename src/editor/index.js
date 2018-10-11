require('../common.scss');
const CodeMirrorEditor = require('../lib/vmarkdown-codemirror-editor.common');

const editor = new CodeMirrorEditor(document.getElementById('editor'), {
});

function getPreview() {
    const __panels__ = window.parent.__panels__;
    return __panels__.preview;
}

let hasInitPreviewValue = false;
let isSaved = true;
function onEditorChange(incremental) {


    // console.log(incremental);


    hasInitPreviewValue = true;
    isSaved = false;
    // console.log('[editorPanel] change');
    const value = editor.getValue();
    previewSetValue(value, incremental);
}

function previewSetValue(value, incremental) {
    hasInitPreviewValue = true;
    const preview = getPreview();
    preview && preview.setValue(value, incremental);
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
        markdown = await import('../../assets/large.md');
        markdown = markdown.default;
    }
    editor.setValue(markdown);

    initPreviewValue();

    editor.on("incremental",  _.debounce(onEditorChange, 500, { 'maxWait': 7000 })   );
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

if( process.env.NODE_ENV === 'production' ){
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

}



module.exports = editor;
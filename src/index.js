// var home = require('./home/index');
const Util = require('./util/util');

function loadIFrame(id, src) {
    return new Promise(function (resolve, reject) {
        var iframe = document.getElementById(id);
        iframe.src = src + Util._t();
        iframe.onload = function () {
            resolve(this.contentWindow);
        };
    });
}

Promise.all([
    loadIFrame('editor', 'editor.html'),
    loadIFrame('preview', 'preview.html')
]).then(([{editorPanel}, {previewPanel}]) => {
    console.log(editorPanel, previewPanel);

    // previewPanel.setValue(editorPanel.getValue());

    function onEditorChange(value) {
        console.log('[editorPanel] change');
        previewPanel.setValue(value);
    }

    editorPanel.$on("change",  _.debounce(onEditorChange, 200, { 'maxWait': 500 })   );

    editorPanel.loadValue().then(function (value) {
        editorPanel.setValue(value);
        editorPanel.enableAutoSave();
    });
    
}).catch((error) => {
    console.log(error)
});



(async () => {



    /*
    const editorWindow = await loadIFrame('editor', 'editor.html');
    const previewWindow = await loadIFrame('preview', 'preview.html');

    const editorPanel = editorWindow.editorPanel;
    const previewPanel = previewWindow.previewPanel;

    */
})();

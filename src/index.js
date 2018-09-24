// var home = require('./home/index');
const Util = require('./util/util');

function syncScroll(editorPanel, previewPanel) {
    var isSyncingEditorScroll = false;
    var isSyncingPreviewScroll = false;
    editorPanel.$on("scrollToLine", function(line) {
        if(!isSyncingEditorScroll){
            isSyncingPreviewScroll = true;
            previewPanel.scrollToLine(line);
        }
        isSyncingEditorScroll = false;
    });

    previewPanel.$on("scrollToLine", function(line) {
        if(!isSyncingPreviewScroll){
            isSyncingEditorScroll = true;
            editorPanel.scrollToLine(line);
        }
        isSyncingPreviewScroll = false;
    });
}

Promise.all([
    Util.loadIFrame('editor', 'editor.html'),
    Util.loadIFrame('preview', 'preview.html')
]).then(([{editorPanel}, {previewPanel}]) => {

    function onEditorChange(value) {
        console.log('[editorPanel] change');
        previewPanel.setValue(value);
    }

    editorPanel.$on("change",  _.debounce(onEditorChange, 200, { 'maxWait': 500 })   );

    editorPanel.loadValue().then(function (value) {
        editorPanel.setValue(value);
        editorPanel.enableAutoSave();




        // setTimeout(()=>{
        //     previewPanel.scrollToLine(40);
        // }, 3000);

    });


    editorPanel.editor.on("beforeSelectionChange", function (cm, {ranges}) {

        // console.log(ranges)
        // previewPanel

        const mi = ranges[0];

        const fromLine = mi.anchor.line+1;
        const toLine = mi.head.line+1;

        console.log(fromLine, toLine)

        previewPanel.activeLine(fromLine);
    });



    syncScroll(editorPanel, previewPanel);

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

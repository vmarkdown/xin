require('./index.scss');
var Event = require('../util/event');
var md = require('../../assets/demo.md');

function syncScroll(editorPanel, previewPanel) {
    var isSyncingEditorScroll = false;
    var isSyncingPreviewScroll = false;
    editorPanel.$on("scroll", function(percentage) {
        if(!isSyncingEditorScroll){
            isSyncingPreviewScroll = true;
            previewPanel.scrollTo(percentage);
        }
        isSyncingEditorScroll = false;
    });

    previewPanel.$on("scroll", function(percentage) {
        if(!isSyncingPreviewScroll){
            isSyncingEditorScroll = true;
            editorPanel.scrollTo(percentage);
        }
        isSyncingPreviewScroll = false;
    });
}

module.exports = async function init(EditorPanel, PreviewPanel) {
    Event.mixin(EditorPanel);
    Event.mixin(PreviewPanel);


    var markdown = await localforage.getItem('markdown') || md;

    var editorPanel = new EditorPanel(markdown);
    var previewPanel = new PreviewPanel(markdown);

    // syncScroll(editorPanel, previewPanel);

    //editorPanel.getValue()

    // editorPanel.setValue(markdown);
    // previewPanel.setValue(markdown);

    var isSaved = true;
    function onEditorChange(value) {
        console.log('editorPanel change');
        previewPanel.setValue(value);
    }

    function onEditorSave(value) {
        console.log('editorPanel save');
        localforage.setItem('markdown', value).then(function () {
            isSaved = true;
        });
    }

    editorPanel.$on("change",  function () {
        isSaved = false;
    });
    editorPanel.$on("change",  _.debounce(onEditorChange, 300, { 'maxWait': 1000 })   );
    editorPanel.$on("change",  _.debounce(onEditorSave, 3000, { 'maxWait': 7000 })   );

    // window.onbeforeunload = function(){
    //     // onEditorChange(editorPanel.getValue());
    // }

    editorPanel.$on("scrollToLine",  function (line) {
        previewPanel.scrollToLine(line);
    });

    previewPanel.$on("scrollToLine",  function (line) {
        editorPanel.scrollToLine(line);
    });

    // setTimeout(function () {
    //     editorPanel.scrollToLine(10);
    // }, 2000);

    window.onbeforeunload = function (e) {
        if(isSaved) {
           return;
        }

        onEditorChange(editorPanel.getValue());

        var e = e || window.event;

        // For IE and Firefox prior to version 4
        if (e) {
            e.returnValue = 'UnSaved, please wait a moment!';
        }

        // For Safari
        return 'UnSaved, please wait a moment!';
    };

};
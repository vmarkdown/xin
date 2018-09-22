require('./index.scss');
var Event = require('../util/event');

function syncScroll(editorPanel, previewPanel) {
    var isSyncingEditorScroll = false;
    var isSyncingPreviewScroll = false;

    editorPanel.$on("change", function(value) {
        previewPanel.setValue(value);
    });

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

module.exports = function init(EditorPanel, PreviewPanel) {
    Event.mixin(EditorPanel);
    Event.mixin(PreviewPanel);

    var editorPanel = new EditorPanel();
    var previewPanel = new PreviewPanel(editorPanel.getValue());

    syncScroll(editorPanel, previewPanel);
};
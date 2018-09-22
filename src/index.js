require('./index.scss');
var Event = require('./util/event');
var Util = require('./util/util');


var isSyncingEditorScroll = false;
var isSyncingPreviewScroll = false;

function init(EditorPanel, PreviewPanel) {

    Event.mixin(EditorPanel);
    Event.mixin(PreviewPanel);

    var editorPanel = new EditorPanel();
    var previewPanel = new PreviewPanel(editorPanel.getValue());

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

function loaded() {
    if( panels[0] && panels[1] ){
        init(panels[0], panels[1]);
    }
}



var panels = [null, null];
var editorIFrame = document.getElementById('editor');
editorIFrame.src = "editor.html" + Util._t();
editorIFrame.onload = function () {
    var editorWindow = this.contentWindow;
    panels[0] = editorWindow.EditorPanel;
    loaded();
};

var previewIFrame = document.getElementById('preview');
previewIFrame.src = "preview.html" + Util._t();
previewIFrame.onload = function () {
    var previewWindow = this.contentWindow;
    panels[1] = previewWindow.PreviewPanel;
    loaded();
};
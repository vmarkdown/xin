var home = require('./home/index');
var Util = require('./util/util');

function loaded() {
    if( panels[0] && panels[1] ){
        home(panels[0], panels[1]);
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
(function () {

    var isSyncingEditorScroll = false;
    var isSyncingPreviewScroll = false;

    function init(EditorPanel, PreviewPanel) {

        MicroEvent.mixin(EditorPanel);
        MicroEvent.mixin(PreviewPanel);

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
    editorIFrame.src = "editor/editor.html";
    editorIFrame.onload = function () {
        var editorWindow = this.contentWindow;
        panels[0] = editorWindow.Panel;
        loaded();
    };

    var previewIFrame = document.getElementById('preview');
    previewIFrame.src = "preview/preview.html";
    previewIFrame.onload = function () {
        var previewWindow = this.contentWindow;
        panels[1] = previewWindow.Panel;
        loaded();
    };

})(window.$bus);

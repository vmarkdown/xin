(async () => {
    var panels = {};
    window.__panels__ = panels;

    console.log(VERSION);

    function syncScroll(editor, preview) {
        var isSyncingEditorScroll = false;
        var isSyncingPreviewScroll = false;
        editor.on("scroll", function() {
            if(!isSyncingEditorScroll){
                isSyncingPreviewScroll = true;

                const line = editor.getFirstVisibleLine();
                preview.scrollToLine(line);
            }
            isSyncingEditorScroll = false;
        });

        // previewPanel.$on("scrollToLine", function(line) {
        //     if(!isSyncingPreviewScroll){
        //         isSyncingEditorScroll = true;
        //         editorPanel.scrollToLine(line);
        //     }
        //     isSyncingPreviewScroll = false;
        // });
    }

    function init(editorPanel, previewPanel) {
        syncScroll(editorPanel, previewPanel);
    }

    function loaded(type, panel) {
        panels[type] = panel;
        if(panels.hasOwnProperty('editor') && panels.hasOwnProperty('preview')){
            init(panels['editor'], panels['preview']);
        }
    }

    (function () {
        var iframe = document.getElementById('editor');
        iframe.src = 'editor.html';
        iframe.onload = function () {
            var editorPanel = this.contentWindow.editorPanel;
            loaded('editor', editorPanel);
        };
    })();

    (function () {
        var iframe = document.getElementById('preview');
        iframe.src = 'preview.html';
        iframe.onload = function () {
            var previewPanel = this.contentWindow.previewPanel;
            loaded('preview', previewPanel);
        };
    })();

})();
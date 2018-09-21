(function ($bus) {

    var editor = CodeMirror(document.getElementById('editor'), {
        lineNumbers: true,
        value: md,
        mode:  "markdown",
        viewportMargin: Infinity,
        lineWrapping: true
    });

    function onEditorScroll(percentage) {
        if(!$bus.isSyncingPreviewScroll){
            $bus.isSyncingPreviewScroll = true;
            var scrollInfo = editor.getScrollInfo();
            var top = percentage * (scrollInfo.height - scrollInfo.clientHeight);
            editor.scrollTo(0, top);
        }
        $bus.isSyncingEditorScroll = false;
    }

    $bus.on('editorScroll', onEditorScroll);

    function onScrolled() {

        if(!$bus.isSyncingPreviewScroll){

            $bus.isSyncingPreviewScroll = true;

            var scrollInfo = editor.getScrollInfo();
            var percentage = (
                (scrollInfo.top / (scrollInfo.height - scrollInfo.clientHeight))
            );
            $bus.emit('previewScroll', percentage);

        }

        $bus.isSyncingEditorScroll = false;
    }
    
    editor.on("scroll", onScrolled);

    editor.on("change", function() {
        $bus.emit('preview', editor.getValue());
    });

    $bus.on('init', function () {
        $bus.emit('preview', editor.getValue());
    });

    $bus.emit('ready', 'editor');

})(window.parent.$bus);
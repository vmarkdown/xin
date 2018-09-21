(function ($bus) {

    //
    var editor = CodeMirror(document.getElementById('editor'), {
        lineNumbers: true,
        value: md,
        mode:  "markdown",
        viewportMargin: Infinity,
        lineWrapping: true
    });

    function onScrolled() {
        var scrollInfo = editor.getScrollInfo();
        var percentage = (
            (scrollInfo.top / (scrollInfo.height - scrollInfo.clientHeight))
        ) * 100;
        $bus.emit('editorScroll', percentage);
    }
    
    editor.on("scroll", _.throttle(onScrolled, 200));
    // editor.on("scroll", onScrolled);

    editor.on("change", function() {
        $bus.emit('preview', editor.getValue());
    });

    $bus.on('init', function () {

        console.log('editor init');

        $bus.emit('preview', editor.getValue());

    });

    $bus.on('previewScroll', function () {
        console.log('previewScroll');
    });


    $bus.emit('ready', 'editor');

})(window.parent.$bus);
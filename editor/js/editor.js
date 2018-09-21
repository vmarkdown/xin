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
        // console.log('$bus.panel', $bus.panel);
        // if($bus.panel === 'editor'){
        //     return;
        // }

        var scrollInfo = editor.getScrollInfo();
        // console.log(scrollInfo);
        var percentage = (
            (scrollInfo.top / (scrollInfo.height - scrollInfo.clientHeight))
        );
        $bus.emit('editorScroll', percentage);
    }
    
    editor.on("scroll", _.throttle(onScrolled, 100));
    // editor.on("scroll", onScrolled);

    editor.on("change", function() {
        $bus.emit('preview', editor.getValue());
    });

    $bus.on('init', function () {

        console.log('editor init');

        $bus.emit('preview', editor.getValue());

    });

    $bus.on('previewScroll', function (percentage) {



        // console.log('previewScroll', percentage);
        editor.scrollTo(null, percentage * 762);
    });


    $bus.emit('ready', 'editor');

})(window.parent.$bus);
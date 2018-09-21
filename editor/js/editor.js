(function ($bus) {

    //
    var editor = CodeMirror(document.getElementById('editor'), {
        lineNumbers: true,
        value: md,
        mode:  "markdown",
        viewportMargin: Infinity,
        lineWrapping: true
    });


    $bus.on('editorScroll', function (percentage) {
        console.log('editorScroll');

        if(!$bus.isSyncingPreviewScroll){

            $bus.isSyncingPreviewScroll = true;

            var scrollInfo = editor.getScrollInfo();
            var top = percentage * (scrollInfo.height - scrollInfo.clientHeight);
            console.log(top);
            editor.scrollTo(0, top);
        }

        $bus.isSyncingEditorScroll = false;
    });


    // function onScrolled() {
    //     // console.log('$bus.panel', $bus.panel);
    //     // if($bus.panel === 'editor'){
    //     //     return;
    //     // }
    //     // $bus.
    //     // $bus.panel = 'editor';
    //
    //     var scrollInfo = editor.getScrollInfo();
    //     // console.log(scrollInfo);
    //     var percentage = (
    //         (scrollInfo.top / (scrollInfo.height - scrollInfo.clientHeight))
    //     );
    //     $bus.emit('editorScroll', percentage);
    // }

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
    
    // editor.on("scroll", _.throttle(onScrolled, 100));
    editor.on("scroll", onScrolled);

    editor.on("change", function() {
        $bus.emit('preview', editor.getValue());
    });

    $bus.on('init', function () {

        console.log('editor init');

        $bus.emit('preview', editor.getValue());

    });

    // $bus.on('previewScroll', function (percentage) {
    //
    //
    //
    //     // console.log('previewScroll', percentage);
    //     // editor.scrollTo(null, percentage * 762);
    // });

    // console.log(editor);
    // setTimeout(function () {
    //     // var scrollInfo = editor.getScrollInfo();
    //     // scrollInfo.
    //     editor.scrollTo(0, 300);
    // },  3000);


    $bus.emit('ready', 'editor');

})(window.parent.$bus);
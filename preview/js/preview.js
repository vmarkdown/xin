(function ($bus) {

    function preview(markdown) {
        var html = marked(markdown);
        document.getElementById('preview').innerHTML = html;
    }
    
    function onEditorScrolled(percentage) {
        console.log(percentage);
        $('#preview').scrollTo(percentage+'%', 200);
    }
    // $bus.on('preview', function (markdown) {
    //     preview(markdown);
    // });

    $bus.on('preview', _.debounce(preview, 300, { 'maxWait': 1000 }));

    $bus.on('editorScroll', _.throttle(onEditorScrolled, 200));
    // $bus.on('editorScroll', onEditorScrolled);


    $('#preview').scroll(function () {

        console.log('#preview scroll');

        // $bus.emit('previewScroll');
    });
    // $bus.on('scroll', function (percentage) {
    //
    //
    //     // $('#preview').scrollTo('#latex-', 1000);
    //
    //     // $('body').scrollTo('#latex-', 1000);
    //
    // });

    $bus.on('init', function () {
        console.log('preview init');
    });

    $bus.emit('ready', 'preview');



})(window.parent.$bus);
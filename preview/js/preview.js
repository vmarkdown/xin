(function ($bus) {

    function getPercentage() {
        return window.scrollY / (document.body.clientHeight - $(window).height());
    }

    function preview(markdown) {
        var html = marked(markdown);
        document.body.innerHTML = html;
    }

    var scroll = new SmoothScroll();

    function onEditorScrolled(percentage) {
        var top = percentage * document.body.clientHeight;
        scroll.animateScroll(top, null, {
            speed: 400,
            easing: 'easeOutQuad'
        });
    }

    $bus.on('preview', _.debounce(preview, 300, { 'maxWait': 1000 }));

    // $bus.on('editorScroll', _.throttle(onEditorScrolled, 300, {}));
    $bus.on('editorScroll', onEditorScrolled);


    // $('#preview').scroll(function () {
    //     console.log('#preview scroll');
    //     // $bus.emit('previewScroll');
    // });

    $(window).scroll(function () {
        if($bus.panel !== 'preview'){
            return;
        }

        console.log('#preview scroll'+ new Date().getTime());

        $bus.emit('previewScroll', getPercentage());

    });

    $bus.on('init', function () {
        console.log('preview init');
    });

    $bus.emit('ready', 'preview');

})(window.parent.$bus);
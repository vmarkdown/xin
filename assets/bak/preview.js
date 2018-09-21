class Panel {

    constructor() {

    }

}


(function ($bus) {

    window.parent._preview = document;

    function getPercentage() {
        return window.scrollY / (document.body.clientHeight - $(window).height());
    }

    function preview(markdown) {
        var html = marked(markdown);
        document.body.innerHTML = html;
    }

    function onPreviewScroll(percentage) {
        var top = percentage * (document.body.clientHeight - document.documentElement.clientHeight);
        document.documentElement.scrollTop = top;
    }


    $bus.on('preview', _.debounce(preview, 300, { 'maxWait': 1000 }));

    $bus.on('previewScroll', onPreviewScroll);

    document.onscroll = function() {
        if(!$bus.isSyncingEditorScroll){
            $bus.isSyncingEditorScroll = true;
            var percentage = document.documentElement.scrollTop / (document.body.clientHeight - document.documentElement.clientHeight);
            $bus.emit('editorScroll', percentage);
        }
        $bus.isSyncingPreviewScroll = false;
    };

    $bus.on('init', function () {
        console.log('preview init');
    });

    $bus.emit('ready', 'preview');

})(window.parent.$bus);
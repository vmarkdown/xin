require('./index.scss');

require('./split');

(function (store) {

    function previewReady() {
        return new Promise(function (resolve, reject) {
            store.$on('previewReady', function () {
                resolve();
            });
        });
    }

    function editorReady() {
        return new Promise(function (resolve, reject) {
            store.$on('editorReady', function () {
                resolve();
            });
        });
    }

    Promise.all([
        previewReady(), editorReady()
    ]).then(function () {
        store.$emit('ready');
    });

})(window.store);

require('./index.scss');

require('./split');

(function (store) {









})(window.store);





/*
const store = window.store;

function loadIFrame(id, src) {
    return new Promise(function (resolve, reject) {
        var iframe = document.getElementById(id);
        iframe.src = src;
        iframe.onload = function () {
            resolve(this.contentWindow);
        };
    });
}

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

(async function () {

})();
*/

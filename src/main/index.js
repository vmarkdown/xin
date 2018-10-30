require('./index.scss');

require('./split');

const store = window.store;


// const VMarkDown = require('vmarkdown');
// const vmarkdown = new VMarkDown({
//     G2: true
// });
// window.__markdown__ = vmarkdown;

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

Promise.all([
    loadIFrame('editor', __assets__&&__assets__.editor?__assets__.editor:'editor.html'),
    loadIFrame('preview', __assets__&&__assets__.preview?__assets__.preview:'preview.html')
]).then(function (editorWindow, previewWindow) {

    // const md = require('../lib/github.md');
    // store.$emit('previewReady', true);
    // store.$on('previewReady', function () {
    //     editor.setValue(md);
    // });

});

(async function () {

})();


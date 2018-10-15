require('./index.scss');

import Split from 'split.js';

Split(['#editor', '#preview'], {
    sizes: [50, 50],
    gutterSize: 3,
    minSize: 320,
    direction: 'horizontal'
});

const VMarkDown = require('vmarkdown');
const vmarkdown = new VMarkDown({

});

window.__markdown__ = vmarkdown;

function loadIFrame(id, src) {
    return new Promise(function (resolve, reject) {
        var iframe = document.getElementById(id);
        iframe.src = src;
        iframe.onload = function () {
            resolve(this.contentWindow);
        };
    });
}


Promise.all([
    loadIFrame('editor', __assets__&&__assets__.editor?__assets__.editor:'editor.html'),
    loadIFrame('preview', __assets__&&__assets__.preview?__assets__.preview:'preview.html')
]).then(function (editorWindow, previewWindow) {

});

(async function () {

})();


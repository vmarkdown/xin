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


(async function () {


    const previewWindow = await loadIFrame('preview', __assets__?__assets__.preview:'preview.html');
    const editorWindow = await loadIFrame('editor', __assets__?__assets__.editor:'editor.html');


})();





// function createIFrame(id, src) {
//     const iframe = document.createElement('iframe');
//     iframe.setAttribute('frameborder', 0);
//     iframe.setAttribute('class', 'panel');
//     iframe.onload = function() {
//
//     };
//     iframe.id = id;
//     iframe.src = src;
// }
//
// createIFrame('editor', 'https://www.baidu.com');

//<!--<iframe id="editor" class="panel" frameborder="0"></iframe>-->

// (async function () {
//
//     const VMarkDown = await import('vmarkdown');
//
//
//
//
// })();


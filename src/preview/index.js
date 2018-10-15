require('../lib/vmarkdown-preview.css');
require('./index.scss');

const vmarkdown = window.top.__markdown__;

const VMarkDownPreview = require('../lib/vmarkdown-preview.js');

const preview = new VMarkDownPreview({
});

const app = new Vue({
    el: '#app',
    render(h) {
        return vmarkdown.compile(h);
    }
});

vmarkdown.on('change', function (value) {
    app.$forceUpdate();
});

vmarkdown.on('firstVisibleLineChange', function (firstVisibleLine) {
    const node = vmarkdown.findNodeFromLine(firstVisibleLine);
    preview.scrollTo(node);
});

vmarkdown.on('cursorChange', function (cursor) {
    const node = vmarkdown.findNode(cursor);
    preview.activeTo(node);
});


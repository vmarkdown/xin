require('../lib/vmarkdown-codemirror-editor.css');
require('./index.scss');

const CodeMirrorEditor = require('../lib/vmarkdown-codemirror-editor.js');

const vmarkdown = window.top.__markdown__;

// const vmarkdown = require('./vmarkdown');
// const vmarkdown = new VMarkDown({
//
// });
//
// vmarkdown.on('change', function (value) {
//     localStorage.setItem("change", value);
// });
//
// vmarkdown.on('cursorChange', function (cursor) {
//     localStorage.setItem("cursorChange", JSON.stringify(cursor));
// });
//
// vmarkdown.on('firstVisibleLineChange', function (firstVisibleLine) {
//     localStorage.setItem("firstVisibleLineChange", firstVisibleLine);
// });



const editor = new CodeMirrorEditor(document.getElementById('editor'), {
    lineNumbers: false
});

editor.on('cursorChange', function (cursor) {
    vmarkdown.emit('cursorChange', cursor);
    // localStorage.setItem("cursorChange", JSON.stringify(cursor));
});

function onScroll() {
    const firstVisibleLine = editor.getFirstVisibleLine();
    vmarkdown.emit('firstVisibleLineChange', firstVisibleLine);
    // localStorage.setItem("firstVisibleLineChange", firstVisibleLine);
}

editor.on('scroll', _.throttle(onScroll, 300));

function onChange() {
    const value = editor.getValue();
    vmarkdown.setValue(value);
    // localStorage.setItem("change", value);
}

editor.on('change', _.debounce(onChange, 500, {maxWait: 20*1000}));

// const md = require('../md/demo.md');
// editor.setValue('# h1');

const md = require('../lib/github.md');
editor.setValue(md);

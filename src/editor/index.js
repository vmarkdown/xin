require('./index.scss');
const store = window.top.store;
const _ = require('lodash');

const editor = new CodeMirrorEditor(document.getElementById('editor'), {
    lineNumbers: false
});

editor.on('cursorChange', function (cursor) {
    // vmarkdown.emit('cursorChange', cursor);
    // localStorage.setItem("cursorChange", JSON.stringify(cursor));
    store.$emit('cursorChange', cursor);
});

function onScroll() {
    const firstVisibleLine = editor.getFirstVisibleLine();
    // vmarkdown.emit('firstVisibleLineChange', firstVisibleLine);
    // localStorage.setItem("firstVisibleLineChange", firstVisibleLine);
    store.$emit('firstVisibleLineChange', firstVisibleLine);
}

editor.on('scroll', _.throttle(onScroll, 300));

function onChange() {
    const value = editor.getValue();
    // vmarkdown.setValue(value);
    // localStorage.setItem("change", value);
    store.$emit('change', value);
}

editor.on('change', _.debounce(onChange, 300, {maxWait: 20*1000}));

store.$on('ready', function () {
    const value = require('../lib/github.md');
    editor.setValue(value);
});

store.$emit('editorReady', true);


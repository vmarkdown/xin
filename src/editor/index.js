require('./index.scss');
const store = window.top.store;
const _ = require('lodash');

const editor = new CodeMirrorEditor(document.getElementById('editor'), {
    lineNumbers: false
});

function onScroll() {
    const firstVisibleLine = editor.getFirstVisibleLine();
    // localStorage.setItem("firstVisibleLineChange", firstVisibleLine);
    store.$emit('firstVisibleLineChange', firstVisibleLine);
}

function onChange() {
    const value = editor.getValue();
    // vmarkdown.setValue(value);
    // localStorage.setItem("change", value);
    localStorage.setItem("xin", value);
    store.$emit('change', value);
}

store.$on('ready', async function () {
    let value = localStorage.getItem("xin");
    if(!value) {
        value = (await import(
            /* webpackChunkName: "md" */
            '../lib/github.md'
            )).default;
    }
    // const value = require('../lib/github.md');

    store.$emit('change', value);
    editor.setValue(value);

    editor.on('change', _.debounce(onChange, 300, {maxWait: 20*1000}));

    editor.on('cursorChange', function (cursor) {
        // localStorage.setItem("cursorChange", JSON.stringify(cursor));
        store.$emit('cursorChange', cursor);
    });

    editor.on('scroll', _.throttle(onScroll, 300));

});

store.$emit('editorReady', true);


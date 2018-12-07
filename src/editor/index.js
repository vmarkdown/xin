require('./index.scss');

const _ = require('lodash');

function init(store, Editor, VMarkdown) {

    const vmarkdown = new VMarkdown({
        config: {
            root: {
                tagName: 'main',
                className: 'markdown-body'
            }
        }
    });

    const editor = new Editor(document.getElementById('editor'), {
        lineNumbers: false
    });

    function onCursorChange(cursor) {
        const node = vmarkdown.findNode(cursor, {
            depth: 2
        });

        if(!node) {
            return;
        }

        let coverageRatio = VMarkdown.calCoverageRatio(node.position, cursor.line);

        store.$emit('cursorChange', {
            node,
            coverageRatio,
            cursor: cursor
        });
    }

    function onScroll() {

        const firstVisibleLine = editor.getFirstVisibleLine();
        // store.$emit('vmarkdown/scrollTo', firstVisibleLine);

        const node = vmarkdown.findNode({
            line: firstVisibleLine,
            column: 1
        }, {
            boundary: true,
            next: true
        });

        if(!node) {
            return;
        }

        let coverageRatio = VMarkdown.calCoverageRatio(node.position, firstVisibleLine);

        store.$emit('scrollTo', {
            firstVisibleLine: firstVisibleLine,
            node: node,
            coverageRatio: coverageRatio
        });

    }

    async function onChange() {
        // store.$emit('change', editor.getValue());

        const value = editor.getValue();

        const vast = await vmarkdown.process(value);

        console.log(vast);

        store.$emit('change', vast);
    }

    function onSave() {
        const value = editor.getValue();
        localStorage.setItem("xin", value);
    }

    editor.on('cursorChange', onCursorChange);
    editor.on('scroll', _.throttle(onScroll, 100));
    editor.on('change', _.debounce(onChange, 500));
    editor.on('change', _.debounce(onSave, 300));

    store.$emit('editorReady', true);

    store.$on('ready', async function () {
        let value = localStorage.getItem("xin");
        if(!value) {
            value = (await import(
            /* webpackChunkName: "md" */
            '../lib/github.md'
            )).default;
        }
        editor.setValue(value);
    });


    store.$on('execCommand', function ({name, options}) {
        editor.execCommand(name, options);
    });

}

window.onload = function () {
    init(
        window.top.store|| {$on: function () {},$emit: function () {}},
        CodeMirrorEditor,
        VMarkdownParse
    );
};

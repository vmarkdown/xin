require('./index.scss');

const _ = require('lodash');
// const VMarkdown = require('vmarkdown-parse');

(function (store, VMarkdown) {


    const vmarkdown = new VMarkdown({
        config: {
            root: {
                tagName: 'main',
                className: 'markdown-body'
            }
        }
    });


    const editor = new CodeMirrorEditor(document.getElementById('editor'), {
        lineNumbers: false
    });


    function onCursorChange(cursor) {
        const node = vmarkdown.findNode(cursor, {
            depth: 2
        });

        if(!node) {
            return;
        }
        // let coverageRatio = 0;
        // if(node) {
        //     const position = node.position;
        //     if( position && position.start.line < position.end.line) {
        //         const firstVisibleLine = cursor.line;
        //         const startLine = position.start.line;
        //         const endLine = position.end.line;
        //         const currentLine = firstVisibleLine<startLine?startLine:firstVisibleLine;
        //         const allLine = endLine - startLine + 1;
        //         coverageRatio = (currentLine-startLine)/allLine;
        //     }
        //
        // }

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

        // let coverageRatio = 0;
        // if(node) {
        //     const position = node.position;
        //     const startLine = position.start.line;
        //     const endLine = position.end.line;
        //     const currentLine = firstVisibleLine<startLine?startLine:firstVisibleLine;
        //     const allLine = endLine - startLine + 1;
        //     coverageRatio = (currentLine-startLine)/allLine;
        // }

        store.$emit('scrollTo', {
            firstVisibleLine: firstVisibleLine,
            node: node,
            coverageRatio: coverageRatio
        });





        // const firstVisibleLine = editor.getFirstVisibleLine();
        //
        // let scrollTop = -1;
        // if(firstVisibleLine === 1){
        //     scrollTop = editor.getScrollTop();
        // }
        //
        // const node = vmarkdown.findNode({
        //     line: firstVisibleLine,
        //     column: 1
        // }, {
        //     boundary: true,
        //     next: true
        // });
        //
        // console.log(node);

        // store.$emit('firstVisibleLineChange', node, firstVisibleLine, scrollTop);
        // store.$emit('firstVisibleLineChange', firstVisibleLine, scrollTop);

    }

    async function onChange() {
        // store.$emit('change', editor.getValue());

        const value = editor.getValue();

        const vast = await vmarkdown.process(value);

        console.log(vast);

        store.$emit('change', vast);
    }


    editor.on('cursorChange', onCursorChange);
    editor.on('scroll', _.throttle(onScroll, 100));
    editor.on('change', _.debounce(onChange, 500));


    store.$emit('editorReady', true);

    const md = require('../lib/github.md');
    editor.setValue(md);

})(
    window.top.store|| {$on: function () {},$emit: function () {}},
    VMarkdownParse.default
);





/*
const store = window.top.store || {$on: function () {},$emit: function () {}};
const _ = require('lodash');

const editor = new CodeMirrorEditor(document.getElementById('editor'), {
    lineNumbers: false
});

function onScroll() {
    const firstVisibleLine = editor.getFirstVisibleLine();
    // console.log(firstVisibleLine);

    let scrollTop = -1;
    if(firstVisibleLine === 1){
        scrollTop = editor.getScrollTop();
    }
    // localStorage.setItem("firstVisibleLineChange", firstVisibleLine);
    store.$emit('firstVisibleLineChange', firstVisibleLine, scrollTop);
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
             webpackChunkName: "md"
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

store.$on('previewRefresh', function () {
    const value = editor.getValue();
    store.$emit('change', value);
});

*/

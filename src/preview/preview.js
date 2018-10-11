// const renderer = require('remark-preact-renderer');
// const VMarkdown = require('vmarkdown');
// const { h, Component, render } = preact;
// const vmarkdown = new VMarkdown({
//     h: h,
//     renderer: renderer,
//     lineNumbers: true
// });
//
// class MarkownPreview extends Component {
//
//     constructor() {
//         super();
//         this.state.markdown = '';
//     }
//
//     render({}, {markdown}) {
//         if(!markdown) return h('div', {className:'markdown-body'});
//         console.time('parse');
//         const vdom = vmarkdown.render(markdown);
//         console.timeEnd('parse');
//         return vdom;
//     }
// }


const unified = require('unified');
const parse = require('../lib/remark-parse2.common');
const toDom = require('../lib/mdast-util-to-dom.common');
const findNode = require("unist-find-node");

const processor = unified()
    .use(parse, {});

function findNodeByLine(mdast, line) {
    let node = findNode(mdast, {line: line,column: 1});

    if(!node || node.type === 'root') {
        return null;
    }

    return node;
}

function getTemp(temp) {
    let mdast = processor.parse(temp);
    // return toDom(mdast);
    return mdast;
}

class Preview {

    constructor() {
        const self = this;
        // self.preview = render(h(MarkownPreview, {
        // }), document.getElementById('preview'))._component;
        self.container = document.getElementById('preview');

    }

    setValue(value, incremental) {
        const self = this;

        //

        if(incremental){
            // console.log(incremental);
            // findNodeByLine(self.mdast, )
            console.time('parse');

            const changes = incremental.changes;
            changes.forEach(function (change) {
                console.log(change);
                const node = findNodeByLine(self.mdast, change.line);
                console.log(node);

                if(!node) return;

                const hash = node.hash;
                // document.getElementById('hash')


                const temp = getTemp(change.after);

                const newNode = temp.children[0];
                node.hash = newNode.hash;
                const newDom = toDom(newNode);
                // $('[data-hash='+hash+']').text(temp);
                $('[data-hash='+hash+']').after(newDom).remove();


            });
            console.timeEnd('parse');

            return;
        }

        if(self.markdownContainer) {
            self.markdownContainer.remove();
        }

        console.time('parse');
        const mdast = processor.parse(value);
        console.timeEnd('parse');
        self.mdast= mdast;


        mdast.properties = {
            "className": ["markdown-body"]
        };

        // console.log(mdast);

        console.time('render');
        const dom = toDom(mdast);
        console.timeEnd('render');

        // dom.setAttribute('class', 'markdown-');


        self.markdownContainer = dom;

        self.container.appendChild(dom);
    }

    patchValue(incremental) {


    }

    getValue() {
        const self = this;
        // return self.preview.state.markdown;
        return '';
    }

    scrollToLine(line) {
        // const el = $('#preview [data-line='+line+']');
        // if(el && el[0]){
        //     el[0].scrollIntoView();
        // }
    }
}

module.exports = Preview;
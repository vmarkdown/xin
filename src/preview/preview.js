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

const processor = unified()
    .use(parse, {});





class Preview {

    constructor() {
        const self = this;
        // self.preview = render(h(MarkownPreview, {
        // }), document.getElementById('preview'))._component;
        self.container = document.getElementById('preview');

    }

    setValue(value) {
        const self = this;
        // self.preview.setState({
        //     markdown: value
        // });

        if(self.markdownContainer) {
            self.markdownContainer.remove();
        }

        console.time('parse');
        const mdast = processor.parse(value);
        console.timeEnd('parse');


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
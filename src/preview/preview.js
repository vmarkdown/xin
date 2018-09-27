const renderer = require('remark-preact-renderer');
const VMarkdown = require('vmarkdown');
const { h, Component, render } = preact;

const vmarkdown = new VMarkdown({
    h: h,
    renderer: renderer,
    lineNumbers: true
});

class MarkownPreview extends Component {

    constructor() {
        super();
        this.state.markdown = '';
    }

    render({}, {markdown}) {
        console.time('parse');
        const vdom = vmarkdown.render(markdown);
        console.timeEnd('parse');
        return vdom;
    }
}

class Preview {

    constructor() {
        const self = this;
        self.preview = render(h(MarkownPreview, {
        }), document.getElementById('preview'))._component;
    }

    setValue(value) {
        const self = this;
        self.preview.setState({
            markdown: value
        });
    }

    getValue() {
        const self = this;
        return self.preview.state.markdown;
    }

    scrollToLine(line) {
        const el = $('#preview [data-line='+line+']');
        if(el && el[0]){
            el[0].scrollIntoView();
        }
    }
}

module.exports = Preview;
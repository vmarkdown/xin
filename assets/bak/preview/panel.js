const Event = require('../util/event');
const { h, render } = preact;
const Preview = require('./preview');

class Panel {
    constructor(value) {
        const self = this;
        self.init(value);
    }

    init(value) {
        const self = this;

        self.preview = render(h(Preview, {
            onPreviewScroll(line) {
                self.$emit('scrollToLine', line);
            }
        }), document.getElementById('preview'))._component;

        self.setValue(value);
    }

    setValue (markdown = '') {
        const self = this;
        self.preview.setState({
            markdown: markdown
        });
    }

    getPercentage () {
        var percentage = document.documentElement.scrollTop / (document.body.clientHeight - document.documentElement.clientHeight);
        return percentage;
    }

    scrollTo (percentage) {
        var top = percentage * (document.body.clientHeight - document.documentElement.clientHeight);
        document.documentElement.scrollTop = top;
    }

    activeLine (line) {
        const self = this;
        self.preview.activeLine(line);
    }

    scrollToLine (line) {
        const self = this;
        self.preview.scrollToLine(line);
    }


    refresh() {

    }
}

Event.mixin(Panel);

module.exports = Panel;
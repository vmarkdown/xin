require('./GitHub-ReadMe.scss');
require('./index.scss');

const { h, render } = preact;

const MarkdownPreview = require('./markdown-preview');

class Panel {
    constructor(value) {
        const self = this;
        self.init(value);
    }

    init(value) {
        const self = this;

        // self.vmarkdown = new VMarkdown({
        //     h: h,
        //     renderer: renderer,
        //     lineNumbers: false
        // });

        // document.onscroll = function() {
        //     console.log(document.body.scrollTop)
        //     self.$emit('scroll', self.getPercentage());
        // };

        self.preview = render(h(MarkdownPreview, {
            onPreviewScroll(line) {
                self.$emit('scrollToLine', line);
            }
        }), document.getElementById('preview'))._component;

        self.setValue(value);
    }

    setValue (markdown = '') {
        // if(!markdown) return;
        const self = this;
        // const vdom = self.vmarkdown.render(markdown);
        // render(vdom, document.body);

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

    scrollToLine (line) {
        const self = this;
        self.preview.scrollToLine(line);
    }
}

module.exports = Panel;

/*
function Panel(value) {
    var self = this;

    self.vmarkdown = new VMarkdown({
        h: h,
        renderer: renderer,
        lineNumbers: false
    });


    self.setValue(value);


    // self.scrollEnable = false;



    // self.scrollEnable = true;

    // $(document.body).on('click', '.line', function () {
    //
    //
    //
    //     var line = $(this).data('line');
    //     //
    //     console.log(line);
    //     //
    //     self.$emit('scrollToLine', line);
    //
    //     return false;
    //
    // });





}

Panel.prototype.init = function () {

};

Panel.prototype.parse = function(markdown) {

    // showdown.setFlavor('github');
    // var converter = new showdown.Converter();
    // // var text2      = '# hello, markdown!';
    // var html2      = converter.makeHtml(markdown);
    //
    // // debugger
    // return html2;
    // return marked(markdown);

    // debugger
    // console.log('parse');
    // var result = mdHtml.render(markdown);
    // return result;
};

Panel.prototype.setValue = function (markdown) {
    if(!markdown) return;


    const self = this;
    const vdom = self.vmarkdown.render(markdown);
    render(vdom, document.body);


    // console.time('parse');
    // var html = marked(markdown);
    // var html = this.parse(markdown);
    // console.timeEnd('parse');





    // console.time('render');
    // document.body.innerHTML = html;
    // console.timeEnd('render');


    // document.querySelectorAll('')
    // var self = this;
    // $('.line').on('click', function () {
    //
    //     var line = $(this).data('line');
    //
    //     console.log(line);
    //
    //     self.$emit('scrollToLine', line);
    //
    //
    // })
//     var self = this;
//     self.scrollEnable = false;
//
//     setTimeout(function () {
//         const scroller = scrollama();
//
// // setup the instance, pass callback functions
//         scroller
//             .setup({
//                 step: '.step' // required - class name of trigger steps
//             })
//             .onStepEnter(function (response) {
//                 // console.log(response);
//
//                 var line = $(response.element).data('line');
//                 console.log(line);
//                 self.$emit('scrollToLine', line);
//                 self.scrollEnable = true;
//             })
//             .onStepExit(function () {
//
//             });
//     }, 10);


};

Panel.prototype.getPercentage = function () {
    var percentage = document.documentElement.scrollTop / (document.body.clientHeight - document.documentElement.clientHeight);
    return percentage;
};

Panel.prototype.scrollTo = function (percentage) {
    var top = percentage * (document.body.clientHeight - document.documentElement.clientHeight);
    document.documentElement.scrollTop = top;
};
*/

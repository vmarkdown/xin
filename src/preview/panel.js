require('./GitHub-ReadMe.scss');
require('./index.scss');

const { h, Component, render } = preact;

// var mdHtml = new markdownit({
//     html: true,
//     linkify: true,
//     typographer: true
// });
// function injectLineNumbers(tokens, idx, options, env, slf) {
//     var line;
//     if (tokens[idx].map && tokens[idx].level === 0) {
//         line = tokens[idx].map[0];
//         tokens[idx].attrJoin('class', 'line');
//         // tokens[idx].attrJoin('class', 'step');
//         tokens[idx].attrSet('data-line', String(line+1));
//         // tokens[idx].attrSet('data-step', String(line+1));
//     }
//     return slf.renderToken(tokens, idx, options, env, slf);
// }
//
// mdHtml.renderer.rules.paragraph_open
//     = mdHtml.renderer.rules.heading_open
//     = mdHtml.renderer.rules.bullet_list_open
//     = mdHtml.renderer.rules.ordered_list_open
//     = mdHtml.renderer.rules.blockquote_open
//     = mdHtml.renderer.rules.table_open
//     = mdHtml.renderer.rules.fence
//     = mdHtml.renderer.rules.inline
//     = injectLineNumbers;



const renderer = require('remark-preact-renderer');
const VMarkdown = require('vmarkdown');


function Panel(value) {
    var self = this;

    self.vmarkdown = new VMarkdown({
        h: h,
        renderer: renderer,
        lineNumbers: false
    });

    self.scrollEnable = false;
    document.onscroll = function() {
        if(!self.scrollEnable) return;
        self.$emit('scroll', self.getPercentage());
    };
    self.setValue(value);

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

module.exports = Panel;
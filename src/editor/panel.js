require('./codemirror-markdown.scss');


function Panel() {

    var self = this;

    var editor = CodeMirror(document.getElementById('editor'), {
        lineNumbers: true,
        value: md,
        mode:  "markdown",
        viewportMargin: Infinity,
        lineWrapping: true
    });

    editor.on("scroll", function () {
        self.$emit('scroll', self.getPercentage());
    });

    editor.on("change", function () {
        self.$emit('change', self.getValue());
    });

    this.editor = editor;

}

Panel.prototype.init = function () {


};

Panel.prototype.setValue = function (value) {
    this.editor.setValue(value);
};

Panel.prototype.getValue = function () {
    return this.editor.getValue();
};

Panel.prototype.getPercentage = function () {
    var scrollInfo = this.editor.getScrollInfo();
    var percentage = (
        (scrollInfo.top / (scrollInfo.height - scrollInfo.clientHeight))
    );
    return percentage;
};

Panel.prototype.scrollTo = function (percentage) {
    var scrollInfo = this.editor.getScrollInfo();
    var top = percentage * (scrollInfo.height - scrollInfo.clientHeight);
    this.editor.scrollTo(0, top);
};

module.exports = Panel;
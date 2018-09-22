require('./index.scss');

function Panel(value) {
    var self = this;
    document.onscroll = function() {
        self.$emit('scroll', self.getPercentage());
    };
    self.setValue(value);
}

Panel.prototype.init = function () {

};

Panel.prototype.setValue = function (markdown) {
    var html = marked(markdown);
    document.body.innerHTML = html;
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
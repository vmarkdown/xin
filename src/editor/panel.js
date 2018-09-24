require('./codemirror-markdown.scss');

class Panel {
    constructor(value) {
        var self = this;
        self.init(value);
    }

    init(value) {
        var self = this;

        var editor = CodeMirror(document.getElementById('editor'), {
            lineNumbers: true,
            value: value || '',
            mode:  "markdown",
            viewportMargin: Infinity,
            lineWrapping: true,
            styleActiveLine: true,
        });

        // editor.on("scroll", function () {
        //     self.$emit('scroll', self.getPercentage());
        // });

        editor.on("scroll", function () {
            // self.$emit('scroll', self.getPercentage());
            // var scrollInfo = self.editor.getScrollInfo();

            // console.log(self.editor);
            // console.log(scrollInfo);
            // console.log(self.editor.lastLine());

            // var result = self.editor.coordsChar(scrollInfo);
            // console.log(editor.display.scroller.scrollTop);

            var top = editor.display.scroller.scrollTop;


            var result = self.editor.coordsChar({
                top: top,
                left: 0
            }, 'local');

            var line = result.line + 1;
            // console.log(line);
            self.$emit('scrollToLine', line);


        });

        editor.on("change", function () {
            self.$emit('change', self.getValue());
        });

        this.editor = editor;
    }


    setValue (value) {
        this.editor.setValue(value);
    }

    getValue () {
        return this.editor.getValue();
    }

    getPercentage () {
        var scrollInfo = this.editor.getScrollInfo();
        var percentage = (
            (scrollInfo.top / (scrollInfo.height - scrollInfo.clientHeight))
        );
        return percentage;
    }

    scrollTo (percentage) {
        var scrollInfo = this.editor.getScrollInfo();
        var top = percentage * (scrollInfo.height - scrollInfo.clientHeight);
        this.editor.scrollTo(0, top);
    }

    scrollToLine (line) {
        // console.log(line);
        var coords = this.editor.charCoords({line: line-1, ch: 0}, "local");
        this.editor.scrollTo(null, coords.top);
    }

    // scrollToLine (line) {
    //     console.log(line);
    //     var h = this.editor.getScrollInfo().clientHeight;
    //     var coords = this.editor.charCoords({line: line, ch: 0}, "local");
    //     // this.editor.scrollTo(null, (coords.top + coords.bottom - h) / 2);
    //     this.editor.scrollTo(null, (coords.top));
    // };

}

module.exports = Panel;
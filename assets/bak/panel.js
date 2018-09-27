const Event = require('../util/event');

class Panel {
    constructor(value) {
        const self = this;
        self.autoSave = false;
        self.isUnSaved = false;
        self.init(value);
    }

    init(value) {
        const self = this;
        const editor = CodeMirror(document.getElementById('editor'), {
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



            let line = self.getFirstFullDisplayLine();

            console.log('line:', line);

            self.$emit('scrollToLine', line);

        });

        editor.on("change", function () {
            // if(self.isFirst){self.isFirst = false;return;}
            self.isUnSaved = true;
            self.$emit('change', self.getValue());
        });



        this.editor = editor;
    }

    getFirstFullDisplayLine() {
        const self = this;

        var top = self.editor.display.scroller.scrollTop; //+200;
        var result = self.editor.coordsChar({
            top: top,
            left: 0
        }, 'local');

        // var line = result.line + 1;
        // console.log(line);

        let lineIndex = result.line;
        let line = lineIndex + 1;

        // console.log();
        var currentVisibleHeight = self.editor.heightAtLine(line);
        var currentLineHeight = self.editor.display.view[lineIndex].line.height;
        console.log(line, currentVisibleHeight, currentLineHeight)

        // if( currentVisibleHeight<currentLineHeight ) {
        //     return line + 1;
        // }

        return line;
    }

    enableAutoSave(){
        const self = this;
        self.autoSave = true;
        function onEditorSave() {
            if(self.autoSave){
                console.log('[editorPanel] save');
                self.saveValue();
            }
        }
        self.$on("change",  _.debounce(onEditorSave, 2000, { 'maxWait': 7000 })   );
    }

    setAutoSave(autoSave){
        this.autoSave = autoSave;
    }

    setValue (value) {
        if(value || value === '') {
            this.editor.setValue(value);
        }
    }

    getValue () {
        return this.editor.getValue();
    }

    saveValue() {
        const self = this;
        const value = self.getValue();
        localforage.setItem('markdown', value).then(function () {
            self.isUnSaved = false;
            console.log('[editorPanel] data has been successfully saved');
        });
    }

    async loadValue() {
        const self = this;

        let markdown = await localforage.getItem('markdown');

        if(!markdown){
            markdown = await import('../../assets/demo.md');
            markdown = markdown.default;
        }

        return markdown;
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

    refresh() {

    }
}

Event.mixin(Panel);

module.exports = Panel;
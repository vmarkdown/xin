const { h, Component, render } = preact;

const renderer = require('remark-preact-renderer');
const VMarkdown = require('vmarkdown');

const vmarkdown = new VMarkdown({
    h: h,
    renderer: renderer,
    lineNumbers: false
});


class Preview extends Component {

    constructor() {
        super();
        this.state.markdown = '';
    }

    componentDidUpdate() {
        // console.log(this.base);
        const $container = $(this.base);

        /*
        const map = $container.children().map(function (i, node) {
            const $node = $(node);
            const position = $node.position();
            return {
                top: position.top,
                height: $node.height(),
                line: $node.data('line'),
                node: node
            };
        });
        console.log(map);
        this.map = map || [];*/


        const map = [];

        $container.children().each(function (i, node) {
            const $node = $(node);
            const position = $node.position();
            map.push({
                top: position.top,
                height: $node.height(),
                line: $node.data('line'),
                node: node
            });

            $node.children().each(function (i, node1) {
                const $node1 = $(node1);
                const position1 = $node1.position();
                map.push({
                    top: position1.top,
                    height: $node1.height(),
                    line: $node1.data('line'),
                    node: node1
                });

                $node1.children().each(function (i, node2) {
                    const $node2 = $(node2);
                    const position2 = $node2.position();
                    map.push({
                        top: position2.top,
                        height: $node2.height(),
                        line: $node2.data('line'),
                        node: node2
                    });
                });


            });


        });
        console.log(map);
        this.map = map;
    }

    findFistVisibleLine(top) {

        for(let i=0;i<this.map.length-1;i++) {
            let el = this.map[i];
            if(top <(el.top + el.height)){
                return el;
            }
        }


    }

    findEl(line) {

        for(let i=this.map.length-1;i>=0;i--) {
            let el = this.map[i];
            if( el.line <= line ){
                return el;
            }
        }

        return null;

        // for(let i=0;i<this.map.length-1;i++) {
        //     let el = this.map[i];
        //
        //     if( el.line >= line ){
        //         return el;
        //     }
        // }
        //
        // return null;
    }

    scrollToLine (line) {
        // console.log(line);

        const el = this.findEl(line);
        console.log(el);
        if(el){
            // document.documentElement.scrollTop = el.top - 200;
            el.node.scrollIntoView();

            $('.active').removeClass('active');
            $(el.node).addClass('active');

        }
    }

    activeLine(line) {
        const el = this.findEl(line);
        if(el){
            $('.active').removeClass('active');
            $(el.node).addClass('active');
        }
    }

    componentDidMount() {

        // document.onscroll = function() {
        //     // console.log(document.body.scrollTop)
        //     // self.$emit('scroll', self.getPercentage());
        // };

        const self = this;
        const onPreviewScroll = self.props.onPreviewScroll;
        $(window).scroll(function () {
            const bodyTop = document.documentElement.scrollTop;
            const result = self.findFistVisibleLine(bodyTop);
            // console.log(bodyTop);
            // console.log(result);
            if(result) {
                onPreviewScroll(result.line);
            }
        });


    }

    render({}, {markdown}) {
        console.time('parse');
        const vdom = vmarkdown.render(markdown);
        console.timeEnd('parse');
        return vdom;
    }
}

module.exports = Preview;
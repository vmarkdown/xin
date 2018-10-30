require('./themes/github.default.theme.css');
require('./index.scss');
const store = window.top.store;
const VMarkDown = require('vmarkdown');
import Vue from 'vue';
const loading = require('./components/loading');


const preview = new VMarkDownPreview({
});

const app = new Vue({
    el: '#app',
    data: {
        vdom: null
    },
    render(h) {
        return this.vdom || h(loading);
    },
    methods: {
        async setValue(md) {
            const self = this;
            self.vdom = await self.vmarkdown.process(md);
        }
    },
    async mounted(){
        const self = this;

        const h = self.$createElement;

        self.vmarkdown = new VMarkDown({
            h: h,
            pluginManager: null,
            rootClassName: 'markdown-body',
            rootTagName: 'main',
            hashid: true
        });

        store.$on('change', function (value) {
            self.setValue(value);
        });

        store.$on('cursorChange', function (cursor) {
            const node = self.vmarkdown.findNode(cursor);
            preview.activeTo(node, cursor);
        });

        store.$on('firstVisibleLineChange', function (firstVisibleLine) {
            const node = self.vmarkdown.findNodeFromLine(firstVisibleLine);
            preview.scrollTo(node, firstVisibleLine);
        });

        // debugger
        // console.log(this.vdom);
        // if(self.vdom) {}

        store.$emit('previewReady', true);
    }
});

// setTimeout(function () {
//     app.$mount('#app');
// }, 3000);

// $('#print').on('click', function () {
//     window.print();
// });
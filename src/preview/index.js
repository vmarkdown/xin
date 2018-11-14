require('./themes/github.default.theme.css');
require('./index.scss');

const plugins = require('./plugins');

const store = window.top.store || {$on: function () {},$emit: function () {}};
const VMarkDown = require('vmarkdown');
import Vue from 'vue';
Vue.use(VMarkDown);

const loading = require('./components/loading');

const preview = new VMarkDownPreview({
});

const vmarkdown = new VMarkDown({
    config: {
        root: {
            tagName: 'main',
            className: 'markdown-body'
        }
    }
});


plugins(function (modules) {
    modules && modules.forEach(function (plugin) {
        vmarkdown.registerPlugin(plugin);
    });
    store.$emit('previewRefresh');
});

const app = new Vue({
    el: '#app',
    render(h) {
        return this.vdom || h(loading);
    },
    methods: {
        async setValue(md) {
            const self = this;
            const vdom = await vmarkdown.process(md);
            self.vdom = vdom;
            self.$forceUpdate();
        }
    },
    beforeMount(){
        const self = this;
        const h = self.$createElement;
        vmarkdown.h = h;
        vmarkdown.$on('refresh', function (value) {
            // self.refresh(value);
            self.setValue(value);
        });
    },
    async mounted(){
        const self = this;

        // const h = self.$createElement;

        // self.vmarkdown = new VMarkDown({
        //     h: h,
        //     pluginManager: pluginManager,
        //     rootClassName: 'markdown-body',
        //     rootTagName: 'main',
        //     hashid: true
        // });
        //
        // self.vmarkdown.$on('refresh', function (value) {
        //     self.setValue(value, true);
        // });
        // vmarkdown.$on('refresh', function (value) {
        //     self.setValue(value, true);
        // });

        store.$on('change', function (value) {
            self.setValue(value);
        });

        store.$on('cursorChange', function (cursor) {
            const node = vmarkdown.findNode(cursor);
            preview.activeTo(self, node, cursor);
        });

        store.$on('firstVisibleLineChange', function (firstVisibleLine, scrollTop) {
            if(scrollTop === 0){
                preview.goTop();
                return;
            }
            const node = vmarkdown.findNodeFromLine(firstVisibleLine);
            preview.scrollTo(self, node, firstVisibleLine);
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
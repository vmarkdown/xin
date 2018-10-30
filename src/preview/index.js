require('./themes/github.default.theme.css');
require('./index.scss');
const store = window.top.store;
const VMarkDown = require('vmarkdown');
import Vue from 'vue';
const loading = require('./components/loading');
const PluginManager = require('vremark-plugin-manager');

const preview = new VMarkDownPreview({
});

const pluginManager = new PluginManager({
    plugins: [

    ],
    config: {
        paths: Object.assign({}, window.__plugins__)
    },
    onOneLoaded: function (plugin) {
        const component = plugin.component || plugin;
        Vue.component(component.name, component);
    }
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
        async setValue(md, noDetect) {
            const self = this;
            self.vdom = await self.vmarkdown.process(md, noDetect);
        }
    },
    async mounted(){
        const self = this;

        const h = self.$createElement;

        self.vmarkdown = new VMarkDown({
            h: h,
            pluginManager: pluginManager,
            rootClassName: 'markdown-body',
            rootTagName: 'main',
            hashid: true
        });

        self.vmarkdown.$on('refresh', function (value) {
            self.setValue(value, true);
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
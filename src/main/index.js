require('./index.scss');
// require('./split');

require('photon/dist/css/photon.css');

import Vue from 'vue';
import Popover from 'vue-js-popover';
Vue.use(Popover);

import App from './app';

(function (store) {

    function previewReady() {
        return new Promise(function (resolve, reject) {
            store.$on('previewReady', function () {
                resolve();
            });
        });
    }

    function editorReady() {
        return new Promise(function (resolve, reject) {
            store.$on('editorReady', function () {
                resolve();
            });
        });
    }

    Promise.all([
        previewReady(), editorReady()
    ]).then(function () {
        store.$emit('ready');
    });

    new Vue({
        render(h) {
            return h(App);
        }
    }).$mount('#app');

})(window.store);

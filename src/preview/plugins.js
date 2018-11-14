const requirejs = require('../lib/require.js');
const plugins = __plugins__;

(function () {
    try {
        // var dom = document.getElementById('__plugins__');
        // var template = dom.innerHTML;
        // var __plugins__ = JSON.parse(template);
        requirejs.config({
            paths: plugins || {}
        });
    }
    catch (e) {
        console.error(e);
    }
})();

module.exports = function __plugins(callback) {

    const names = Object.keys(plugins).filter( function(m){return !m.endsWith('-libs')} );

    requirejs(names, function () {
        // Array.prototype.slice.call(arguments).forEach(function (plugin) {
        //     vmarkdown.registerPlugin(plugin);
        // });
// debugger
//     console
        // setTimeout(function () {
        //     app.refresh();
        // }, 2000);

        var _plugins = Array.prototype.slice.call(arguments);

        callback && callback(_plugins);
        // store.$emit('previewRefresh');

    }, function () {
        callback && callback([]);
    });

};


var production = (process.env.NODE_ENV === "production");

function _t() {
    return production?('?_t'+new Date().getTime()):''
}

function loadIFrame(id, src) {
    return new Promise(function (resolve, reject) {
        var iframe = document.getElementById(id);
        iframe.src = src + _t();
        iframe.onload = function () {
            resolve(this.contentWindow);
        };
    });
}

module.exports = {
    _t: _t,
    loadIFrame: loadIFrame
};
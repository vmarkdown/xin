var production = (process.env.NODE_ENV === "production");

module.exports = {
    _t: function _t() {
        return production?('?_t'+new Date().getTime()):''
    }
};
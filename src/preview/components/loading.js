require('./loading.css');
module.exports = {
    render(h) {
        return h('div', {
            'class': ['loading-container'],
            domProps: {
                innerHTML: require('./loading.svg')
            }
        })
    }
};
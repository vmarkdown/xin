const dir = require('node-dir');
const path = require('path');
const production = (process.env.NODE_ENV === 'production');

// console.log(files);

const assets = {
    'vmarkdown-parse': 'vmarkdown/vmarkdown-parse.js',
    'vmarkdown-render': 'vmarkdown/vmarkdown-render.js',
    'vmarkdown-editor-vendors': {
        js: 'vmarkdown-codemirror-editor/vmarkdown-codemirror-editor-vendors.js',
        css: 'vmarkdown-codemirror-editor/vmarkdown-codemirror-editor-vendors.css',
    },
    'vmarkdown-editor': {
        js: 'vmarkdown-codemirror-editor/vmarkdown-codemirror-editor.js',
        css: 'vmarkdown-codemirror-editor/vmarkdown-codemirror-editor.css',
    },
    'vmarkdown-preview-vendors': {
        js: 'vmarkdown-preview/vmarkdown-preview-vendors.js',
        css: 'vmarkdown-preview/vmarkdown-preview-vendors.css',
    },
    'vmarkdown-preview': {
        js: 'vmarkdown-preview/vmarkdown-preview.js',
        css: 'vmarkdown-preview/vmarkdown-preview.css',
    }
};


production && (function () {
    const files = dir.files(path.resolve(__dirname, '../www'), {sync:true});
    files.forEach(function(name){
        // console.log("file: "+name);

        name = name.replace(path.resolve(__dirname, '../www/')+'/', '');

        if(/vmarkdown-parse\.[a-zA-Z0-9]+\.min\.js$/.test(name)){
            assets['vmarkdown-parse'] = name;
        }
        else if(/vmarkdown-render\.[a-zA-Z0-9]+\.min\.js$/.test(name)){
            assets['vmarkdown-render'] = name;
        }
        else if(/vmarkdown-codemirror-editor-vendors\.[a-zA-Z0-9]+\.min\.css$/.test(name)){
            assets['vmarkdown-editor-vendors'].css = name;
        }
        else if(/vmarkdown-codemirror-editor-vendors\.[a-zA-Z0-9]+\.min\.js$/.test(name)){
            assets['vmarkdown-editor-vendors'].js = name;
        }
        else if(/vmarkdown-codemirror-editor\.[a-zA-Z0-9]+\.min\.css$/.test(name)){
            assets['vmarkdown-editor'].css = name;
        }
        else if(/vmarkdown-codemirror-editor\.[a-zA-Z0-9]+\.min\.js$/.test(name)){
            assets['vmarkdown-editor'].js = name;
        }
        else if(/vmarkdown-preview-vendors\.[a-zA-Z0-9]+\.min\.css$/.test(name)){
            assets['vmarkdown-preview-vendors'].css = name;
        }
        else if(/vmarkdown-preview-vendors\.[a-zA-Z0-9]+\.min\.js$/.test(name)){
            assets['vmarkdown-preview-vendors'].js = name;
        }
        else if(/vmarkdown-preview\.[a-zA-Z0-9]+\.min\.css$/.test(name)){
            assets['vmarkdown-preview'].css = name;
        }
        else if(/vmarkdown-preview\.[a-zA-Z0-9]+\.min\.js$/.test(name)){
            assets['vmarkdown-preview'].js = name;
        }

    });
})();

console.log(assets);

module.exports = assets;


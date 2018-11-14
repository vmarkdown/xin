const dir = require('node-dir');
const path = require('path');

const files = dir.files(path.resolve(__dirname, '../www'), {sync:true});
// console.log(files);

const assets = {
    'vmarkdown': {
        js: '',
        css: '',
    },
    'vmarkdown-editor-vendors': {
        js: '',
        css: '',
    },
    'vmarkdown-editor': {
        js: '',
        css: '',
    },
    'vmarkdown-preview-vendors': {
        js: '',
    },
    'vmarkdown-preview': {
        js: '',
        css: '',
    }
};

files.forEach(function(name){
    // console.log("file: "+name);

    name = name.replace(path.resolve(__dirname, '../www/')+'/', '');

    if(/vmarkdown\.[a-zA-Z0-9]+\.min\.js$/.test(name)){
        assets['vmarkdown'].js = name;
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

console.log(assets);

module.exports = assets;


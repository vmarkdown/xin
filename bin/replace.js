const TEMPLATE = '"{%assets%}"';

const path = require('path');
const fs = require('fs');

var preview = fs.readFileSync(path.resolve(__dirname,'../dist','preview.json'), 'utf-8');
var editor = fs.readFileSync(path.resolve(__dirname,'../dist','editor.json'), 'utf-8');

preview = JSON.parse(preview).preview;
editor = JSON.parse(editor).editor;

let assets = JSON.stringify({
    preview: preview,
    editor: editor,
});

// assets = assets.substring(1, assets.length - 1);

console.log(assets);

var index = fs.readFileSync(path.resolve(__dirname,'../dist','index.html'), 'utf-8');

var html = index.replace(TEMPLATE, assets);

// console.log(html);

fs.writeFileSync(path.resolve(__dirname,'../dist','index.html'), html);

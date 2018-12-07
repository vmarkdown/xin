const TEMPLATE = '"{%assets%}"';

const XXH = require('xxhashjs');
const path = require('path');
const fs = require('fs');
const H = XXH.h64( 0xABCD );

var preview = fs.readFileSync(path.resolve(__dirname,'../dist','preview.json'), 'utf-8');
var editor = fs.readFileSync(path.resolve(__dirname,'../dist','editor.json'), 'utf-8');

preview = JSON.parse(preview).preview;
editor = JSON.parse(editor).editor;

var index = fs.readFileSync(path.resolve(__dirname,'../dist','index.html'), 'utf-8');

// var html = index.replace(TEMPLATE, assets);

var previewName = 'preview.'+H.update(preview.js + preview.html).digest().toString(16)+'.html';
var editorName = 'editor.'+H.update(editor.js + editor.html).digest().toString(16)+'.html';

console.log(previewName);
fs.renameSync('./dist/'+preview.html,'./dist/'+previewName);

console.log(editorName);
fs.renameSync('./dist/'+editor.html,'./dist/'+editorName);

// console.log(html);
// var html = index
//     .replace('src="preview.html"', 'src="'+previewName+'"')
//     .replace('src="editor.html"', 'src="'+editorName+'"');

var html = index
    .replace('<%= preview %>', previewName)
    .replace('<%= editor %>', editorName);

fs.writeFileSync(path.resolve(__dirname,'../dist','index.html'), html);


fs.unlink('./dist/editor.json', function (err) {
    if (err) return console.log(err);
    console.log('editor.json remove success');
});

fs.unlink('./dist/preview.json', function (err) {
    if (err) return console.log(err);
    console.log('preview.json remove success');
});


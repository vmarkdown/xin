import Split from 'split.js';

Split(['#editor', '#preview'], {
    sizes: [50, 50],
    gutterSize: 3,
    minSize: 320,
    direction: 'horizontal'
});
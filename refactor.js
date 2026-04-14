const fs = require('fs');

let styles = fs.readFileSync('styles.css', 'utf-8');
styles = styles.replace(/#000000/g, '#14120b');
styles = styles.replace(/#000/g, '#14120b');
styles = styles.replace(/#111111/g, '#14120b');
styles = styles.replace(/#111/g, '#14120b');
fs.writeFileSync('styles.css', styles);

let html = fs.readFileSync('index.html', 'utf-8');
html = html.replace(/#000000/g, '#14120b');
html = html.replace(/#000/g, '#14120b');
html = html.replace(/#111111/g, '#14120b');
html = html.replace(/#111/g, '#14120b');
fs.writeFileSync('index.html', html);

const fs = require('fs');
const path = require('path');

const pkgPath = path.resolve(__dirname, '..', 'package.json');
const indexPath = path.resolve(__dirname, '..', 'index.html');

function setVersion() {
  try {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    let html = fs.readFileSync(indexPath, 'utf8');

    const newBadge = `<div class="version-badge">v${pkg.version}</div>`;

    if (/class=\"version-badge\">.*?<\/div>/s.test(html)) {
      html = html.replace(/<div class=\"version-badge\">.*?<\/div>/s, newBadge);
    } else {
      html = html.replace(/<\/body>/, `${newBadge}\n</body>`);
    }

    fs.writeFileSync(indexPath, html, 'utf8');
    console.log(`index.html actualizado a v${pkg.version}`);
  } catch (err) {
    console.error('Error actualizando la versión en index.html:', err);
    process.exit(1);
  }
}

setVersion();
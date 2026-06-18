const fs = require('fs');
const path = require('path');

const pkgPath = path.resolve(__dirname, '..', 'package.json');
const indexPath = path.resolve(__dirname, '..', 'index.html');

function setVersion() {
  try {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    let html = fs.readFileSync(indexPath, 'utf8');

    const newBadge = `<div class="version-badge">v${pkg.version}</div>`;

    // Eliminar cualquier badge existente (incluso malformados) para evitar duplicados
    html = html.replace(/<div class=\"version-badge\">[\s\S]*?<\/div>/g, '');

    // Insertar la nueva badge antes del cierre de body
    if (html.includes('</body>')) {
      html = html.replace(/<\/body>/, `${newBadge}\n</body>`);
    } else {
      html = html + '\n' + newBadge;
    }

    fs.writeFileSync(indexPath, html, 'utf8');
    console.log(`index.html actualizado a v${pkg.version}`);
  } catch (err) {
    console.error('Error actualizando la versión en index.html:', err);
    process.exit(1);
  }
}

setVersion();
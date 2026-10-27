// Gera v/<id>.html para cada vestido: é o link que vai no WhatsApp.
// Ele tem a foto do vestido como prévia (og:image) e redireciona para o catálogo já aberto no vestido.
// Uso: node gerar-links.js

const fs = require('fs');
const path = require('path');

const BASE = 'https://bigmaker-ai.github.io/catalogo-atelie-amostra/';

const src = fs.readFileSync(path.join(__dirname, 'vestidos.js'), 'utf8');
const { VESTIDOS } = new Function(`${src}; return { VESTIDOS };`)();

const dir = path.join(__dirname, 'v');
fs.mkdirSync(dir, { recursive: true });

for (const v of VESTIDOS) {
  const capa = v.midias.find(m => !m.endsWith('.mp4'));
  const og = fs.existsSync(path.join(__dirname, capa.replace('.jpg', '-og.jpg'))) ? capa.replace('.jpg', '-og.jpg') : capa;
  const html = `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<title>${v.nome} · Ateliê America Ribeiro</title>
<meta property="og:title" content="Vestido ${v.nome} · cód. ${v.codigo}">
<meta property="og:description" content="${v.descricao}">
<meta property="og:image" content="${BASE}${og}">
<meta property="og:type" content="website">
<meta http-equiv="refresh" content="0; url=../#${v.id}">
</head>
<body><a href="../#${v.id}">Ver vestido</a></body>
</html>
`;
  fs.writeFileSync(path.join(dir, `${v.id}.html`), html);
  console.log(`v/${v.id}.html`);
}

# Como publicar e atualizar seu catálogo

## O que você tem aqui
- `index.html` — a página do catálogo (grade de produtos com zoom ao clicar)
- `admin.html` — **painel para adicionar/editar/remover produtos sem mexer em código**
- `manifest.json` — permite "instalar" o catálogo na tela inicial do celular
- `sw.js` — guarda o catálogo no dispositivo e atualiza sozinho quando há internet
- `assets/logo-sfix.png`, `assets/logo-makita.png`, `assets/watermark-tile.png`, `assets/seta-voltar.png` — imagens do layout
- `assets/produtos/` — fotos dos produtos

## Passo 1 — Hospede em algum lugar com HTTPS
Isso **não funciona abrindo o arquivo direto no computador** nem mandando por WhatsApp — precisa estar em um site de verdade (o cache offline só funciona em conexão segura).

Opções gratuitas e simples:
- **Netlify** (netlify.com) — arraste a pasta `catalogo-pwa` inteira no painel e pronto, gera um link
- **Vercel** (vercel.com) — mesma ideia
- **GitHub Pages** — se você já usa GitHub

## Passo 2 — Envie o link do catálogo (`index.html`) para os clientes
Na primeira abertura, o cliente precisa estar com internet (é quando o celular guarda a cópia local). Depois disso, funciona offline e atualiza sozinho quando há conexão.

## Passo 3 — Atualizando produtos (use o `admin.html`, sem editar código)

Abra o arquivo `admin.html` no navegador (dois cliques nele, ou publique-o junto com o resto e acesse pelo link — mas **não divulgue esse link para os clientes**, é só para você).

**No Chrome ou Edge do computador**, clique em **"Selecionar a pasta do catálogo"** e escolha a pasta `catalogo-pwa`. O painel abre a lista de produtos prontos para editar. Você pode:
- Trocar o nome, a foto ou os códigos/voltagem de qualquer produto
- Adicionar um produto novo (nome + foto + códigos)
- Remover um produto
- Reordenar com as setas ↑ ↓

Clique em **"Salvar alterações no catálogo"** — o painel grava tudo direto na pasta (o `index.html`, o `sw.js` e as fotos novas), sem precisar copiar nada manualmente. Depois é só subir a pasta atualizada de novo na hospedagem.

**Se seu navegador não suportar esse modo automático** (Firefox, Safari, ou celular), use "usar modo manual": selecione o `index.html` atual, edite os produtos normalmente e, ao salvar, o painel gera para você um novo `index.html` e `sw.js` para baixar, além de uma lista dizendo exatamente em qual nome de arquivo salvar cada foto nova dentro de `assets/produtos/`.

## Alternativa — me mandar o PDF do Canva de novo
Se preferir, continue exportando o catálogo do Canva em PDF e me manda aqui a qualquer momento — eu extraio as fotos e atualizo tudo pra você, sem precisar usar o painel.

## Opcional — "Instalar" como app
No celular, ao abrir o link, o navegador costuma oferecer "Adicionar à tela inicial" — cria um ícone que abre direto, sem barra de endereço.


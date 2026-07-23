# Como publicar e atualizar seu catálogo

## O que mudou nesta versão
Agora o painel (`admin.html`) permite **criar, renomear e remover abas** — antes só existiam as duas abas fixas (Makita / Dewalt & Stanley), agora você pode adicionar quantas quiser (ex: Bosch, Ferramentas Manuais, Jardim...) direto pela tela, sem editar código.

## O que você tem aqui
- `index.html` — a página do catálogo (grade de produtos com zoom ao clicar)
- `admin.html` — **painel para adicionar/editar/remover produtos e abas sem mexer em código**
- `manifest.json` — permite "instalar" o catálogo na tela inicial do celular
- `sw.js` — guarda o catálogo no dispositivo e atualiza sozinho quando há internet
- `assets/logo-sfix.png`, `assets/logo-makita.png`, `assets/watermark-tile.png`, `assets/seta-voltar.png` — imagens do layout
- `assets/produtos/` — fotos dos produtos

## Passo 1 — Hospede em algum lugar com HTTPS
Isso **não funciona abrindo o arquivo direto no computador** nem mandando por WhatsApp — precisa estar em um site de verdade (o cache offline só funciona em conexão segura).

Opções gratuitas e simples:
- **Netlify** (netlify.com) — arraste a pasta inteira no painel e pronto, gera um link
- **Vercel** (vercel.com) — mesma ideia
- **GitHub Pages** — se você já usa GitHub

## Passo 2 — Envie o link do catálogo (`index.html`) para os clientes
Na primeira abertura, o cliente precisa estar com internet (é quando o celular guarda a cópia local). Depois disso, funciona offline e atualiza sozinho quando há conexão.

## Passo 3 — Atualizando produtos e abas (use o `admin.html`, sem editar código)

Abra o arquivo `admin.html` no navegador (dois cliques nele, ou publique-o junto com o resto e acesse pelo link — mas **não divulgue esse link para os clientes**, é só para você).

**No Chrome ou Edge do computador**, clique em **"Selecionar a pasta do catálogo"** e escolha a pasta onde estão estes arquivos. O painel abre com uma aba por marca/categoria, prontas para editar.

### Criar uma aba nova
Clique em **"+ Nova aba"**, digite o nome (ex: "BOSCH") e a aba aparece na hora, do lado das outras — no site (`index.html`) ela vira automaticamente um novo botão ao lado de MAKITA e DEWALT & STANLEY. Dentro da aba nova você pode:
- Definir uma capa de introdução (opcional — se não escolher nenhuma, a aba simplesmente não tem página de capa)
- Escolher o enquadramento da capa (topo/centro/base)
- Adicionar produtos normalmente (nome + foto + códigos)

### Renomear ou remover uma aba
No topo de cada aba tem um campo de texto com o nome (edite à vontade — o botão do site atualiza sozinho) e um botão **"🗑 Remover esta aba"** (remove a aba e todos os produtos dela — só não deixa remover se for a última aba restante).

### Editando produtos dentro de qualquer aba
- Trocar o nome, a foto ou os códigos/voltagem de qualquer produto
- Adicionar um produto novo (nome + foto + códigos)
- Remover um produto
- Reordenar com as setas ↑ ↓

### Aba "LAYOUT DO SITE"
Dá pra mexer em tudo do visual sem código:
- Trocar as logos (S-Fix e a logo secundária), o tamanho de cada uma e a posição delas no cabeçalho
- Cor de fundo do cabeçalho
- Ativar/desativar a marca d'água de fundo, ajustar a transparência e trocar a imagem
- Fonte, tamanho e cor do nome dos produtos
- Se a foto do produto aparece acima do nome ou do lado

Clique em **"💾 Salvar alterações no catálogo"** — o painel grava tudo direto na pasta (o `index.html`, o `sw.js` e as fotos novas), sem precisar copiar nada manualmente. Depois é só subir a pasta atualizada de novo na hospedagem.

**Se seu navegador não suportar esse modo automático** (Firefox, Safari, ou celular), use "usar modo manual": selecione o `index.html` atual, edite normalmente e, ao salvar, o painel gera um ZIP para baixar com o `index.html` e as fotos novas já no lugar certo, mais o `sw.js` separado.

## Alternativa — me mandar o PDF do Canva de novo
Se preferir, continue exportando o catálogo do Canva em PDF e me manda aqui a qualquer momento — eu extraio as fotos e atualizo tudo pra você, sem precisar usar o painel.

## Opcional — "Instalar" como app
No celular, ao abrir o link, o navegador costuma oferecer "Adicionar à tela inicial" — cria um ícone que abre direto, sem barra de endereço.

// ==CACHE-INICIO==
const CACHE_NAME = 'catalogo-cache-v1';

const SHELL_FILES = [
  "./",
  "./index.html",
  "./manifest.json",
  "./assets/logo-sfix.png",
  "./assets/logo-makita.png",
  "./assets/watermark-tile.png",
  "./assets/seta-voltar.png",
  "./assets/intro-makita.jpg",
  "./assets/capa-dewalt.jpg",
  "./assets/produtos/1-m9510b.png",
  "./assets/produtos/2-m0920b.png",
  "./assets/produtos/3-ga9020.png",
  "./assets/produtos/4-dga517z.png",
  "./assets/produtos/5-dga504z.png",
  "./assets/produtos/6-sa7021.png",
  "./assets/produtos/7-sa7000c.png",
  "./assets/produtos/8-lixadeira-umido-125mm.png",
  "./assets/produtos/9-serra-marmore.png",
  "./assets/produtos/10-hs7010.png",
  "./assets/produtos/11-4100nh2r-a.png",
  "./assets/produtos/12-4100nh2r-b.png",
  "./assets/produtos/13-ca5000xj.png",
  "./assets/produtos/14-dcc500zkx1-a.png",
  "./assets/produtos/15-carrinho-base-45.png",
  "./assets/produtos/16-dcc500zkx1-b.png",
  "./assets/produtos/17-ls1110f.png",
  "./assets/produtos/18-esquadria-255mm.png",
  "./assets/produtos/19-ls0816f.png",
  "./assets/produtos/20-m4302b.png",
  "./assets/produtos/21-djv182z.png",
  "./assets/produtos/22-m3700b.png",
  "./assets/produtos/23-drt50z.png",
  "./assets/produtos/24-hg5030k.png",
  "./assets/produtos/25-hg6531ck.png",
  "./assets/produtos/26-dhg180zk.png",
  "./assets/produtos/27-b04557.png",
  "./assets/produtos/28-m9400b.png",
  "./assets/produtos/29-cinta-9920.png",
  "./assets/produtos/30-cinta-p9031.png",
  "./assets/produtos/31-plaina-m1909b.png",
  "./assets/produtos/32-hp333dwyx3.png",
  "./assets/produtos/33-dtw300z.png",
  "./assets/produtos/34-dtd173z.png",
  "./assets/produtos/35-dtd156z.png",
  "./assets/produtos/36-dhp482z.png",
  "./assets/produtos/37-dhp490z.png",
  "./assets/produtos/38-dhp489z.png",
  "./assets/produtos/39-dhp486z.png",
  "./assets/produtos/40-clx224sax.png",
  "./assets/produtos/41-dhp490wvx.png",
  "./assets/produtos/42-dhp482sy.png",
  "./assets/produtos/43-dhp485.png",
  "./assets/produtos/combo-makita-dhp485f1j-dcl180z.png",
  "./assets/produtos/45-dhr183z.png",
  "./assets/produtos/46-hr140dz.png",
  "./assets/produtos/47-dhr202.png",
  "./assets/produtos/48-hr2470.png",
  "./assets/produtos/49-hmc120.png",
  "./assets/produtos/50-m8600b.png",
  "./assets/produtos/51-m0801g.png",
  "./assets/produtos/52-mandril-makita.png",
  "./assets/produtos/mandril-aperto-rapido-metal-pesado.png",
  "./assets/produtos/conjunto-mandril-makita.png",
  "./assets/produtos/55-adaptador-sds-mandril.png",
  "./assets/produtos/56-chave-mandril.png",
  "./assets/produtos/57-dub362-4batah.png",
  "./assets/produtos/combo-makita-12v-paraf.-asp.-sopra.png",
  "./assets/produtos/59-dcl180-bat.png",
  "./assets/produtos/60-dcl180z.png",
  "./assets/produtos/61-dcl184z.png",
  "./assets/produtos/62-dub362z.png",
  "./assets/produtos/63-dub186z.png",
  "./assets/produtos/64-bateria-12v.png",
  "./assets/produtos/65-bateria-18v.png",
  "./assets/produtos/66-carregador-12v.png",
  "./assets/produtos/67-carregador-18v.png",
  "./assets/produtos/68-dml812.png",
  "./assets/produtos/69-dml815.png",
  "./assets/produtos/70-lav-pressao-bateria.png",
  "./assets/produtos/71-trena-laser-30m.png",
  "./assets/produtos/72-dcg413-b.png",
  "./assets/produtos/73-dwe4118.png",
  "./assets/produtos/74-dwe490.png",
  "./assets/produtos/75-dwe4336.png",
  "./assets/produtos/76-dwe4120.png",
  "./assets/produtos/77-dw088cg.png",
  "./assets/produtos/78-trena-laser.png",
  "./assets/produtos/79-dce592b.png",
  "./assets/produtos/80-dcd7781-b.png",
  "./assets/produtos/81-dcf7871-b.png",
  "./assets/produtos/82-dcf887-b.png",
  "./assets/produtos/83-dck200me2gt.png",
  "./assets/produtos/84-combo-dcd7781-dcf787.png",
  "./assets/produtos/85-dcd805d2.png",
  "./assets/produtos/86-dcd7781d2.png",
  "./assets/produtos/87-dcd7781d1.png",
  "./assets/produtos/88-dcf887m2.png",
  "./assets/produtos/89-dcf781d2.png",
  "./assets/produtos/90-d25133.png",
  "./assets/produtos/91-dch263-b.png",
  "./assets/produtos/92-dch133b-b3.png",
  "./assets/produtos/dewalt-carregador-12-20v-bivolt-dcb1102.png",
  "./assets/produtos/dewalt-carregador-12-20v-bivolt-4ah.png",
  "./assets/produtos/dewalt-bateria-max-li-ion-20v-5-ah.png",
  "./assets/produtos/dewalt-bateria-20v-tabless-4ah.png",
  "./assets/produtos/dewalt-kit-2bat-5ah-c-carregador-e-bolsa.png",
  "./assets/produtos/dewalt-serra-marmore-125mm-dw862b2.png",
  "./assets/produtos/99-serra-esquadria-10.png",
  "./assets/produtos/dewalt-serra-esquadria-12-220v-dws715.png",
  "./assets/produtos/101-furadeira-impacto-710w.png",
  "./assets/produtos/102-soprador-20v.png",
  "./assets/produtos/stanley-esmerilhadeira-ang.-115mm-sbg700m2k.png",
  "./assets/produtos/stanley-esmerilhadeira-ang.-4.1-2-900w.png",
  "./assets/produtos/stanley-esmerilhadeira-ang.-4.1-2-750w-sg7115-br.png",
  "./assets/produtos/stanley-esmerilhadeira-ang-2200w-220v.png",
  "./assets/produtos/stanley-martelete-800w-shr263k-b2.png",
  "./assets/produtos/stanley-martelete-sds-plus-sbh900m2k.png",
  "./assets/produtos/stanley-furadeira-de-impacto-710w-13mm-127v-sdh710ka.png",
  "./assets/produtos/stanley-furadeira-de-bancada-sbt2513-b2.png",
  "./assets/produtos/stanley-carregador-20v-sc400-4ah.png",
  "./assets/produtos/stanley-bateria-20v-4ah.png",
  "./assets/produtos/stanley-serra-marmore-115mm-spt115b2.png",
  "./assets/produtos/stanley-serra-corte-rapido-2200w-ssc22b2.png",
  "./assets/produtos/stanley-tripe-1-4-telescopico.png",
  "./assets/produtos/stanley-caixa-de-ferramentas-c-tampa-organ.png",
  "./assets/produtos/stanley-soprador-termico-1800w.png",
  "./assets/produtos/stanley-organizador-tstak-10-compartimento.png"
];
// ==CACHE-FIM==

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(SHELL_FILES))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});

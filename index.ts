const WORKER_URLS = [
  'cf.bebas11.workers.dev', 'cf.bebas9.workers.dev', 'avaritia.elvinrakus.workers.dev',
  'urv-worker-cf.renaldisch.workers.dev', 'cf.buatvpn.workers.dev', 'cf.kebal1.workers.dev',
  'cf.osianne23.workers.dev', 'wibu.wibucf6.workers.dev', 'cf.yeyay736.workers.dev',
  'cf.andremith59.workers.dev', 'fajar.masfajar0004.workers.dev', 'cf.evintokes.workers.dev',
  'rizaxyz.uddyalsh4.workers.dev', 'rizaxy.allieisozk96.workers.dev', 'cf.rneohler.workers.dev',
  'cf.bebas12.workers.dev', 'cf.bebas13.workers.dev', 'cf.bebas14.workers.dev',
  'cf.bebas15.workers.dev', 'cf.bebas16.workers.dev', 'cf.bebas17.workers.dev',
  'cf.bebas18.workers.dev', 'cf.bebas19.workers.dev', 'my-worker.axwellllrich.workers.dev',
  'revenge.revenge02821.workers.dev', 'dd-fathu.fathudede.workers.dev', 'cf.manutin.workers.dev',
  'cf.janji1.workers.dev', 'cf.janji2.workers.dev', 'cf.janji3.workers.dev',
  'cf.janji5.workers.dev', 'cf.janji6.workers.dev', 'cf.janji7.workers.dev',
  'cf.janji8.workers.dev', 'cf.janji9.workers.dev', 'cf.janji10.workers.dev',
  'cf.sosiisspahit.workers.dev', 'jokowi.hidupjokowi19.workers.dev', 'rizaxy.udy18.workers.dev',
  'rizaxy.ett82.workers.dev', 'rizaxy.ilton89.workers.dev', 'rizaxy.entakin45.workers.dev',
  'rizaxy.eoerge.workers.dev', 'rizaxy.heresa46.workers.dev', 'rizaxy.oriseffler.workers.dev',
  'rizaxy.avonarber.workers.dev', 'rizaxy.on59.workers.dev', 'rizaxy.ohnnyeer.workers.dev',
  'cfgw.ennethuettgen.workers.dev', 'cf.juangxx.workers.dev', 'agus041114.agus041117.workers.dev',
  'rizaabc.immy48.workers.dev', 'rizaabc.lejandralick.workers.dev', 'rizaabc.eniferarter.workers.dev',
  'rizaabc.rittanyunde13.workers.dev', 'rizaabc.shleyoyle.workers.dev', 'bonchell.riyanjibril227.workers.dev',
  'yura.ontytracke.workers.dev', 'rizabc.arianne38.workers.dev', 'rizabcd.m4ptc5svia.workers.dev',
  'rizabcd.herwood35.workers.dev', 'rizabcd.izeth83.workers.dev', 'cf.haxil71864.workers.dev',
  'gmod.1a1.workers.dev', 'rizabc.orbinriesen19.workers.dev', 'rizabc.mmanuel79.workers.dev',
  'v4riza.hari24.workers.dev', 'v4riza.oni10.workers.dev', 'v4riza.erritt98.workers.dev',
  'v4riza.elipachoen7.workers.dev', 'v4riza.ealreiger10.workers.dev', 'v4riza.ridget88.workers.dev',
  'v4riza.essicaarisian.workers.dev', 'v4riza.arshall94.workers.dev', 'v4riza.oseseynolds.workers.dev',
  'v4riza.atthew32.workers.dev', 'v4.sosiisspahit.workers.dev', 'v4.agus041117.workers.dev',
  'v4trondol.herman60.workers.dev', 'v4trondol.erson53.workers.dev', 'v4trondol.laineeilly.workers.dev',
  'v4trondol.annerulauf.workers.dev', 'v4trondol.arren50.workers.dev', 'good.revenge02821.workers.dev',
  'v4.juangxx.workers.dev', 'v4.clam25.workers.dev', 'gas2.paidk.workers.dev',
  'gas2.goku1-653.workers.dev', 'gas2.goku2-c51.workers.dev', 'gas2.goku3-d78.workers.dev',
  'gas2.goku7.workers.dev', 'gas2.goku25.workers.dev', 'gas1.goku28.workers.dev',
  'gas2.goku24.workers.dev', 'v4.urtangworth.workers.dev', 'v4.homas18.workers.dev',
  'v4.datum34.workers.dev', 'v4.nnaerde.workers.dev', 'v4.athy60.workers.dev',
  'v4.ustinwift33.workers.dev', 'v4nm.lifetime01.workers.dev', 'v4nm.lifetime02.workers.dev',
  'v4nm.lifetime03.workers.dev', 'v4nm.lifetime04.workers.dev', 'v4nm.lifetime05.workers.dev',
  'v4nm.lifetime06.workers.dev', 'v4nm.lifetime07.workers.dev', 'v4nm.lifetime08.workers.dev',
  'v4nm.lifetime09.workers.dev', 'v4nm.lifetime10.workers.dev', 'v4nm.lifetime11.workers.dev',
  'v4nm.lifetime12.workers.dev', 'v4nm.lifetime13.workers.dev', 'v4nm.lifetime14.workers.dev',
  'v4nm.lifetime15.workers.dev', 'v4nm.lifetime16.workers.dev', 'v4nm.lifetime17.workers.dev',
  'v4nm.lifetime18.workers.dev', 'v4nm.lifetime19.workers.dev', 'v4nm.lifetime20.workers.dev',
  'v4nm.lifetime21.workers.dev', 'v4nm.lifetime22.workers.dev', 'v4nm.lifetime23.workers.dev',
  'v4nm.lifetime24.workers.dev', 'v4nm.lifetime25.workers.dev', 'v4nm.lifetime26.workers.dev',
  'v4nm.lifetime27.workers.dev', 'v4nm.lifetime28.workers.dev', 'v4nm.lifetime29.workers.dev',
  'v4nm.lifetime30.workers.dev', 'v4nm.lifetime31.workers.dev', 'v4nm.lifetime32.workers.dev',
  'v4nm.lifetime33.workers.dev', 'v4nm.lifetime34.workers.dev', 'v4nm.lifetime35.workers.dev',
  'v4nm.lifetime36.workers.dev', 'v4nm.lifetime37.workers.dev', 'v4nm.lifetime38.workers.dev',
  'v4nm.lifetime39.workers.dev', 'v4nm.lifetime40.workers.dev', 'v4nm.lifetime41.workers.dev',
  'v4nm.lifetime42.workers.dev', 'v4nm.lifetime43.workers.dev', 'v4nm.lifetime44.workers.dev',
  'v4nm.lifetime45.workers.dev', 'v4nm.lifetime46.workers.dev', 'v4nm.lifetime47.workers.dev',
  'v4nm.lifetime48.workers.dev', 'v4nm.lifetime49.workers.dev', 'v4nm.lifetime50.workers.dev',
  'v4nm.lifetime51.workers.dev', 'v4nm.lifetime52.workers.dev', 'v4nm.lifetime53.workers.dev',
  'v4nm.lifetime54.workers.dev', 'v4nm.lifetime55.workers.dev', 'v4nm.lifetime56.workers.dev',
  'v4nm.lifetime57.workers.dev', 'v4nm.lifetime58.workers.dev', 'v4nm.lifetime59.workers.dev',
  'v4nm.lifetime60.workers.dev', 'v4nm.lifetime61.workers.dev', 'v4nm.lifetime62.workers.dev',
  'v4nm.lifetime63.workers.dev', 'v4nm.lifetime64.workers.dev', 'v4nm.lifetime65.workers.dev',
  'v4nm.lifetime66.workers.dev', 'v4nm.lifetime67.workers.dev', 'v4nm.lifetime68.workers.dev',
  'v4nm.lifetime69.workers.dev', 'v4nm.lifetime70.workers.dev', 'v4nm.lifetime71.workers.dev',
  'v4nm.lifetime72.workers.dev', 'v4nm.lifetime73.workers.dev', 'v4nm.lifetime74.workers.dev',
  'v4nm.lifetime75.workers.dev', 'v4nm.lifetime76.workers.dev', 'v4nm.lifetime77.workers.dev',
  'v4nm.lifetime78.workers.dev', 'v4riza.rew56.workers.dev', 'v4riza.liaeil.workers.dev',
  'v4riza.aishaacobi.workers.dev', 'v4riza.lonzo4.workers.dev', 'v4riza.rma48.workers.dev',
  'v4riza.aleelorar.workers.dev', 'v4riza.ascalechimmel42.workers.dev', 'v4riza.raobel.workers.dev',
  'v4riza.eanaskolski40.workers.dev', 'v4riza.bbie3.workers.dev', 'v4riza.ricka28.workers.dev',
  'v4riza.erekbbott35.workers.dev', 'v4riza.kyeickinson28.workers.dev', 'freshv4.tera86654.workers.dev',
  'v4riza.ewayne5.workers.dev', 'v4riza.raader.workers.dev', 'v4riza.ozelle19.workers.dev',
  'v4riza.uellaerlach.workers.dev', 'v4riza.aisy6.workers.dev', 'v4riza.ony99.workers.dev',
  'v4riza.ahsaanobel46.workers.dev', 'v4riza.lviseuschkeast.workers.dev', 'v4riza.ay26.workers.dev',
  'v4riza.ash35.workers.dev', 'atadev.kukubukuku854.workers.dev', '2.hajijah.indevs.in',
  'v1.sultan.ccwu.cc', 'v2.sultan.ccwu.cc', 'v3.sultan.ccwu.cc', 'v4.sultan.ccwu.cc',
  'v5.sultan.ccwu.cc', 'v6.sultan.ccwu.cc', 'v7.sultan.ccwu.cc', 'v8.sultan.ccwu.cc',
  'v9.sultan.ccwu.cc', 'v10.sultan.ccwu.cc', 'v11.sultan.ccwu.cc', 'v12.sultan.ccwu.cc',
  'v13.sultan.ccwu.cc', 'v14.sultan.ccwu.cc', 'v15.sultan.ccwu.cc', 'v16.sultan.ccwu.cc',
  'v17.sultan.ccwu.cc', 'v18.sultan.ccwu.cc', 'v19.sultan.ccwu.cc', 'v20.sultan.ccwu.cc',
  'v21.sultan.ccwu.cc', 'v22.sultan.ccwu.cc', 'v23.sultan.ccwu.cc', 'v24.sultan.ccwu.cc',
  'v25.sultan.ccwu.cc', 'v26.sultan.ccwu.cc', 'v27.sultan.ccwu.cc', 'v28.sultan.ccwu.cc',
  'v29.sultan.ccwu.cc', 'v30.sultan.ccwu.cc', 'v31.sultan.ccwu.cc', 'v32.sultan.ccwu.cc',
  'v33.sultan.ccwu.cc', 'v34.sultan.ccwu.cc', 'v35.sultan.ccwu.cc', 'v36.sultan.ccwu.cc',
  'v37.sultan.ccwu.cc', 'v38.sultan.ccwu.cc', 'v39.sultan.ccwu.cc', 'v40.sultan.ccwu.cc',
  'my.cfvpn.my.id', 'my1.cfvpn.my.id', 'my2.cfvpn.my.id', 'my3.cfvpn.my.id',
  'my4.cfvpn.my.id', 'my5.cfvpn.my.id', 'my6.cfvpn.my.id', 'my7.cfvpn.my.id',
  'my8.cfvpn.my.id', 'my9.cfvpn.my.id', 'my10.cfvpn.my.id', 'my11.cfvpn.my.id',
  'my12.cfvpn.my.id', 'my13.cfvpn.my.id', 'my14.cfvpn.my.id', 'my15.cfvpn.my.id',
  'my16.cfvpn.my.id', 'my17.cfvpn.my.id', 'my18.cfvpn.my.id', 'my19.cfvpn.my.id',
  'my20.cfvpn.my.id', 'my21.cfvpn.my.id', 'm1.cfvpn.kdns.fr', 'm2.cfvpn.kdns.fr',
  'm3.cfvpn.kdns.fr', 'm4.cfvpn.kdns.fr', 'm5.cfvpn.kdns.fr', 'm6.cfvpn.kdns.fr',
  'm7.cfvpn.kdns.fr', 'm8.cfvpn.kdns.fr', 'm9.cfvpn.kdns.fr', 'm10.cfvpn.kdns.fr',
  'm11.cfvpn.kdns.fr', 'm12.cfvpn.kdns.fr', 'm13.cfvpn.kdns.fr', 'm14.cfvpn.kdns.fr',
  'm15.cfvpn.kdns.fr', 'm16.cfvpn.kdns.fr', 'm17.cfvpn.kdns.fr', 'm18.cfvpn.kdns.fr',
  'm19.cfvpn.kdns.fr', 'm20.cfvpn.kdns.fr', 'm21.cfvpn.kdns.fr', 'id1.kbl.ccwu.cc',
  'id2.kbl.ccwu.cc', 'id3.kbl.ccwu.cc', 'id4.kbl.ccwu.cc', 'id5.kbl.ccwu.cc',
  'id6.kbl.ccwu.cc', 'id7.kbl.ccwu.cc', 'id8.kbl.ccwu.cc', 'id9.kbl.ccwu.cc',
  'id10.kbl.ccwu.cc', 'id11.kbl.ccwu.cc', 'id12.kbl.ccwu.cc', 'id13.kbl.ccwu.cc',
  'id14.kbl.ccwu.cc', 'id15.kbl.ccwu.cc', 'id16.kbl.ccwu.cc', 'id17.kbl.ccwu.cc',
  'id18.kbl.ccwu.cc', 'id19.kbl.ccwu.cc', 'id20.kbl.ccwu.cc', 'id21.kbl.ccwu.cc'
];

export default {
  async fetch(request, env, ctx) {
    // 1. TETAP TRIGGER JALUR TOL AI DI LATAR BELAKANG
    try {
      ctx.waitUntil(
        env.AI.run('@cf/meta/llama-3-8b-instruct', {
          prompt: "ping",
          max_tokens: 1
        }).catch(() => {})
      );
    } catch (e) {
      // Abaikan jika binding error, sistem tetap jalan
    }

    // 2. CEK LOGIKA WEBSOCKET (Wajib untuk VLESS/VMESS/SSH WebSocket)
    const upgradeHeader = request.headers.get('Upgrade');
    if (upgradeHeader && upgradeHeader.toLowerCase() === 'websocket') {
      
      // Kocok daftar ratusan worker cadangan
      const shuffled = [...WORKER_URLS].sort(() => Math.random() - 0.5);
      const parsedUrl = new URL(request.url);
      const urlPathAndQuery = parsedUrl.pathname + parsedUrl.search;

      // Coba satu-satu sampai ketemu yang aktif jaringannya
      for (const targetHost of shuffled) {
        try {
          const targetUrl = `https://${targetHost}${urlPathAndQuery}`;

          const response = await fetch(targetUrl, {
            headers: request.headers,
            redirect: 'manual'
          });

          // Jika server target sukses merespons handshake WebSocket (Status 101)
          if (response.status === 101) {
            return response;
          }
        } catch (err) {
          continue; // Jika worker tujuan limit/mati, lempar ke target acak berikutnya
        }
      }
    }

    // 3. RESPONS FALLBACK: Jika diakses biasa lewat browser (bukan lewat VPN)
    return new Response('Jalur Tol Worker AI Sukses Aktif, Bos!', { status: 200 });
  }
};

const WORKER_URLS = [
 'ddfathu.de5.net', 
 'sg1.d24hu.cc.cd', 
 'modv4.dedefathurohman3.workers.dev', 
];

export default {
  async fetch(request, env, ctx) {
    // 1. TETAP TRIGGER JALUR TOL AI DI LATAR BELAKANG (Biar dapet jalur prioritas)
    try {
      ctx.waitUntil(
        env.AI.run('@cf/meta/llama-3-8b-instruct', {
          prompt: "ping",
          max_tokens: 1
        }).catch(() => {})
      );
    } catch (e) {}

    // 2. KOCOK LIST: Biar tiap request dapet urutan beda
    const shuffled = [...WORKER_URLS].sort(() => Math.random() - 0.5);

    // 3. NYOBA SATU-SATU (Failover)
    for (const targetHost of shuffled) {
      try {
        const targetUrl = new URL(request.url);
        targetUrl.hostname = targetHost;
        targetUrl.protocol = 'https:';

        // Salin header untuk menghindari error imutabilitas
        const newHeaders = new Headers(request.headers);

        const modifiedRequest = new Request(targetUrl, {
          method: request.method,
          headers: newHeaders,
          body: request.body,
          redirect: 'manual' 
        });

        const response = await fetch(modifiedRequest);

        // 4. FILTER LIMIT: Jika respons bagus, langsung kirim balik ke aplikasi VPN
        if (response.status !== 429 && response.status < 500) {
          return response;
        }
        
        console.log(`${targetHost} limit/error, skip ke cadangan...`);

      } catch (e) {
        continue;
      }
    }

    // 5. LAST RESORT
    return new Response("Aduh bos, semua worker di list lagi tepar!", { status: 503 });
  }
};

if (!self.define) { let e, a = {}; const s = (s, n) => (s = new URL(s + ".js", n).href, a[s] || new Promise((a => { if ("document" in self) { const e = document.createElement("script"); e.src = s, e.onload = a, document.head.appendChild(e) } else e = s, importScripts(s), a() })).then((() => { let e = a[s]; if (!e) throw new Error(`Module ${s} didn’t register its module`); return e }))); self.define = (n, i) => { const t = e || ("document" in self ? document.currentScript.src : "") || location.href; if (a[t]) return; let c = {}; const r = e => s(e, t), d = { module: { uri: t }, exports: c, require: r }; a[t] = Promise.all(n.map((e => d[e] || r(e)))).then((e => (i(...e), c))) } } define(["./workbox-7c2a5a06"], (function (e) { "use strict"; importScripts(), self.skipWaiting(), e.clientsClaim(), e.precacheAndRoute([{ url: "/_next/app-build-manifest.json", revision: "eb859c2c3267ae7559ef50afe1cf8541" }, { url: "/_next/static/chunks/0e5ce63c-c31aa3dc18c830d4.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/1145-0d0cf7a70b2b8360.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/1331-08e0a6f401d1afe3.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/1677-e60d2b51ef998037.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/207-2c8f31c182563b1c.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/2439-5e853a689ae5df4a.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/2745-60d71305d1210672.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/2902-d9e4f17ae19c9c75.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/3222-c3a85174497da0ac.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/3430-0f75653705b6d7d8.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/3490-d69da1f2d93abca3.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/3760.3eec8df13d145250.js", revision: "3eec8df13d145250" }, { url: "/_next/static/chunks/4209-a94ba6ce8586fc4a.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/4708-580a201f998a2f9d.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/5537-bd0036d5677200bf.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/582-c8f99c89532a9c23.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/596-7e066a8ca4e98a8b.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/6157-617c278cd6c0af06.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/6210-3e2ba90e6a39df69.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/6685-be686c86af00b751.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/6882-bfb8dbe2d159e654.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/8110-2657f45f93444fd6.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/8119-d207a863e484b3f0.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/850-047b2a9cd3b2b146.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/8621-e1ab31f83cfeac3c.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/863-7c52de90a7ca4a8c.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/8712-b0036fea692b655d.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/8832-0ec0c081e646adf8.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/8891-a27eed8220bec399.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/9401-392341a22103d33e.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/9415-47c5eb30e5cdaddc.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/done/page-d927713e6012aed7.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/emailinput/page-b593ce10487ce736.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/enterverification/page-bc8ac7c21f4b5e7a.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/layout-9d8052a250aa10c2.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/passwordreset/page-51d401abd869d495.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/reset-password/page-0b0518f383a91c05.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/sign-in/page-4c1eeedf7c0329e3.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/verification-code/page-6452997c07b5e94a.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/dashboard/activities/%5Bid%5D/page-cf17272aeed4954f.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/dashboard/activities/page-cb091806ba991fb5.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/dashboard/admins/%5Badminid%5D/page-4d8639e293c31d98.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/dashboard/admins/%5Badminid%5D/payment/page-564e1ab7e9c12408.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/dashboard/admins/new-admin/page-a9939294792e91f8.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/dashboard/admins/page-40525c31238b5845.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/dashboard/agents/%5Bagentid%5D/page-94a3ca724a92802f.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/dashboard/agents/add-new/page-68c9855c564f0278.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/dashboard/agents/page-7a5e1b1af5257abd.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/dashboard/drivers/%5Bplate%5D/fines/page-51f28b07bc3d7bc8.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/dashboard/drivers/%5Bplate%5D/page-ac170d734657c890.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/dashboard/drivers/%5Bplate%5D/payments/page-638f60d44c93900e.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/dashboard/drivers/%5Bplate%5D/vehicle-info/page-ed9dcfba0bc1fa3c.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/dashboard/drivers/%5Bplate%5D/waiver/add-new/page-feb87fd35f536da3.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/dashboard/drivers/%5Bplate%5D/waiver/history/page-b2fe1ed37dcd9d6e.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/dashboard/drivers/%5Bplate%5D/waiver/page-dc2c8e34b2a5c7f6.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/dashboard/drivers/new-driver/drivers-license/page-837fb823f300e95f.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/dashboard/drivers/new-driver/page-7efcc23cc97adbc9.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/dashboard/drivers/new-driver/plate-info/page-b6fc43c4f30bea2c.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/dashboard/drivers/page-e35d3fcde699c1a2.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/dashboard/fines/%5BfineId%5D/page-1b477a17a94e0078.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/dashboard/fines/add-new/page-4ad05b8f69384894.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/dashboard/fines/page-2a293259fe607b3c.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/dashboard/layout-60cd6c2c93230192.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/dashboard/page-75280144e848f7b6.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/dashboard/revenue/page-f46c6c110c31bbf0.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/dashboard/scan/page-da0cc684f038be73.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/layout-e357e86a4290b137.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/manage/about/page-401ce2d2773e3544.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/manage/layout-c0c98f473d4b1e82.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/manage/page-f2743bd94790ee89.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/manage/profile/page-fcfc0a9a2840f31c.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/manage/security/page-4ab0a56e16348044.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/not-found-6b15df61265b6343.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/page-d4c6a58cae5ffbae.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/app/search/page-323f93382f432d9c.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/fd9d1056-f52f0421543045ea.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/framework-4498e84bb0ba1830.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/main-2ab26fc1de87816a.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/main-app-cae762266566c388.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/pages/_app-8af45f6c5c3cbc8e.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/pages/_error-6aec2ce618e2a362.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js", revision: "79330112775102f91e1010318bae2bd3" }, { url: "/_next/static/chunks/webpack-a4be721977800fab.js", revision: "qdT4j3a_o2fx75P4zpXHv" }, { url: "/_next/static/css/dd736c6b1b0221d6.css", revision: "dd736c6b1b0221d6" }, { url: "/_next/static/media/155cae559bbd1a77-s.p.woff2", revision: "268d01e94fa0e3a13787891fe19f739c" }, { url: "/_next/static/media/6ec89c3f4265bc9b-s.woff2", revision: "5396d177b727ae5121d49fda50183c3b" }, { url: "/_next/static/qdT4j3a_o2fx75P4zpXHv/_buildManifest.js", revision: "f73e8c19daa8474d229371b8da40f744" }, { url: "/_next/static/qdT4j3a_o2fx75P4zpXHv/_ssgManifest.js", revision: "b6652df95db52feb4daf4eca35380933" }, { url: "/authpageLogo.png", revision: "e0e48e149211b44beb02a8ce5d1eb8fc" }, { url: "/avater.png", revision: "b196d84ecf40bf9eca3d4bba0d339a10" }, { url: "/avater2.png", revision: "5fe696f0d338ab52da789b7f596690f7" }, { url: "/drivers.png", revision: "05b5abba84438e46d898d667f46391a5" }, { url: "/favicon.ico", revision: "09ea8b87e9cca8cfeaa2f5220e647a5e" }, { url: "/fineandpenal.png", revision: "63123578da10a1826b1146af5918d90b" }, { url: "/graph.png", revision: "d38856b6cfff311a83937b8033e81148" }, { url: "/logo.png", revision: "3076d500db0de49cc7e51c0c78f09111" }, { url: "/logo2.png", revision: "226f6363e69f91ec373f0d8e3daecdc8" }, { url: "/manifest.json", revision: "21302a861d99322db39711f6085e0ba3" }, { url: "/payment.png", revision: "e1d3cd49322515feb8f35850c76275f6" }, { url: "/personalinfo.png", revision: "b360b0546b93f6b1c6a3036a9f8c45af" }, { url: "/refunds.png", revision: "0b70c38b02be0b89e2a37eb016e0413a" }, { url: "/scanplate.png", revision: "3309ab89021564569a1b35272c11a963" }, { url: "/service-worker.js", revision: "ff5da0b292612186186be55009060875" }, { url: "/tricycle.jpg", revision: "a5ae6ed821148b1929886d77039fc931" }], { ignoreURLParametersMatching: [] }), e.cleanupOutdatedCaches(), e.registerRoute("/", new e.NetworkFirst({ cacheName: "start-url", plugins: [{ cacheWillUpdate: async ({ request: e, response: a, event: s, state: n }) => a && "opaqueredirect" === a.type ? new Response(a.body, { status: 200, statusText: "OK", headers: a.headers }) : a }] }), "GET"), e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i, new e.CacheFirst({ cacheName: "google-fonts-webfonts", plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })] }), "GET"), e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i, new e.StaleWhileRevalidate({ cacheName: "google-fonts-stylesheets", plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })] }), "GET"), e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i, new e.StaleWhileRevalidate({ cacheName: "static-font-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })] }), "GET"), e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i, new e.StaleWhileRevalidate({ cacheName: "static-image-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })] }), "GET"), e.registerRoute(/\/_next\/image\?url=.+$/i, new e.StaleWhileRevalidate({ cacheName: "next-image", plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })] }), "GET"), e.registerRoute(/\.(?:mp3|wav|ogg)$/i, new e.CacheFirst({ cacheName: "static-audio-assets", plugins: [new e.RangeRequestsPlugin, new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }), "GET"), e.registerRoute(/\.(?:mp4)$/i, new e.CacheFirst({ cacheName: "static-video-assets", plugins: [new e.RangeRequestsPlugin, new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }), "GET"), e.registerRoute(/\.(?:js)$/i, new e.StaleWhileRevalidate({ cacheName: "static-js-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }), "GET"), e.registerRoute(/\.(?:css|less)$/i, new e.StaleWhileRevalidate({ cacheName: "static-style-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }), "GET"), e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i, new e.StaleWhileRevalidate({ cacheName: "next-data", plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }), "GET"), e.registerRoute(/\.(?:json|xml|csv)$/i, new e.NetworkFirst({ cacheName: "static-data-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }), "GET"), e.registerRoute((({ url: e }) => { if (!(self.origin === e.origin)) return !1; const a = e.pathname; return !a.startsWith("/api/") && !!a.startsWith("/api/") }), new e.NetworkFirst({ cacheName: "apis", networkTimeoutSeconds: 10, plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })] }), "GET"), e.registerRoute((({ url: e }) => { if (!(self.origin === e.origin)) return !1; return !e.pathname.startsWith("/api/") }), new e.NetworkFirst({ cacheName: "others", networkTimeoutSeconds: 10, plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }), "GET"), e.registerRoute((({ url: e }) => !(self.origin === e.origin)), new e.NetworkFirst({ cacheName: "cross-origin", networkTimeoutSeconds: 10, plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })] }), "GET") }));

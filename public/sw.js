if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let c={};const r=e=>s(e,t),d={module:{uri:t},exports:c,require:r};i[t]=Promise.all(a.map((e=>d[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"dd4881d104f9fe8957326e587dbbc94e"},{url:"/_next/static/G3-5b8DU7JUdKfgKN_qri/_buildManifest.js",revision:"4d5f9a85a898ceddbba3c7cc1a0cb186"},{url:"/_next/static/G3-5b8DU7JUdKfgKN_qri/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0e5ce63c-bec12cb10e4e831b.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/1862-07c35099dad16e88.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/1954-8a9640da8be5ef70.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/2381-e265ca33b3a527d5.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/263-a3001473282003b6.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/2749-d0a8c1f9db0d790a.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/2919-91ca1b70250996a8.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/3030-e6231468a79cd43e.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/3136-6c58be90873b1de7.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/335-a802f370d370a0ed.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/3604-ef2d5f045ff9dae4.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/3760.d057efcc6b15d670.js",revision:"d057efcc6b15d670"},{url:"/_next/static/chunks/3968-4ee12cdc7c75b96d.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/413-77255a2e96c09035.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/4587-b052c9fc55293085.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/5250-0d3b2210c6f748fc.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/5290-5b41df5bc9f286c5.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/5934-c38973b11e365b8e.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/6178-7b204b7064e158ed.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/6286-b13ed3bb12e2249a.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/6316-1c9c54e7ce55160e.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/6894-38ed0e8df41353cf.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/7312-7dae119b7e388cbf.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/8110-5126bd9d683b7dd2.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/8326-2a7aca356e865817.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/8441-dc6f3a5bfa552341.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/852-1835c9735fcd83b5.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/8627a13e-83acb253676adc18.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/8712-7b4c234badd7a544.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/8852-c57e9530cc6305d9.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/9387-7f661eed3587bf50.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/9510-dc2a729c224185ca.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/9611-86c46f39baa26a76.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/9721-35115b9572710593.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/9762-69f29a215271cb8c.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/9874-4fb89f259cd11812.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(auth)/admin/sign-in/page-42d1b4e20c85ab27.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(auth)/agent/sign-in/page-8a070335ee78d5e8.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(auth)/done/page-39872cac7c005e41.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(auth)/emailinput/page-c173e5726bcbb0ac.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(auth)/enterverification/page-f7433dc493912388.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(auth)/layout-e99882ed7071aced.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(auth)/passwordreset/page-9e9423c26b7d8e21.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(auth)/reset-password/page-97a5ed0684026369.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(auth)/sign-in/page-433eb21c6d169340.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(auth)/verification-code/page-22831687c8ca0bb9.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/activities/%5Bid%5D/page-388a7c74c8427d71.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/activities/page-725cfd3925c65c4f.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/admins/%5Bid%5D/activities/page-40edb1272407d024.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/admins/%5Bid%5D/not-found-4417c79130bbd945.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/admins/%5Bid%5D/page-c8c8b4a28a10c312.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/admins/layout-e2a950dd2b0d1adf.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/admins/new-admin/page-a2ccc676aee80e02.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/admins/not-found-d556daa4510f44a0.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/admins/page-13b3fac1c671efbb.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/agents/%5Bid%5D/activities/page-213773c68322053c.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/agents/%5Bid%5D/not-found-6058a8697075f523.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/agents/%5Bid%5D/page-022698c0312b0448.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/agents/new-agent/page-0cd0908d1ef97f8c.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/agents/not-found-6b967a209cfe4ed5.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/agents/page-2dbabbc2ab0757da.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/dashboard/not-found-270c63d8f14f344e.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/dashboard/page-aa6b11d356fa0f22.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/drivers/%5Bid%5D/add-license/page-924117ac34c88e26.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/drivers/%5Bid%5D/not-found-c4d5ce224f3eeee5.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/drivers/%5Bid%5D/page-86691418dfa04535.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/drivers/layout-6112ee33b1a8759a.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/drivers/page-1e2151a964ee4038.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/fines/%5BfineId%5D/page-827dfdf775bb4696.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/fines/add-new/page-f9ed91bb4db801e1.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/fines/page-451aabf25309d30d.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/green-engine/%5Bplate%5D/add/page-c3c1a71202d24ca1.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/green-engine/%5Bplate%5D/not-found-4b72a023f99ed647.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/green-engine/%5Bplate%5D/page-85aaac8c782d0c94.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/green-engine/page-44e5fefffb93c020.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/layout-4a46c53f5270642c.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/revenue/page-ed9921f6638825fd.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/scan/page-7ba7de2103c80440.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/settings/layout-273e6853b7eac5a7.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/settings/not-found-bc6795ec5f1321b3.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/settings/page-96937245bf343c55.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/v/status/%5Bbcid%5D/page-ad595e6993370c15.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/vehicles/%5Bid%5D/drivers/page-cc9da9598533e741.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/vehicles/%5Bid%5D/fines/page-3dc40f9b4622d64d.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/vehicles/%5Bid%5D/new-driver/page-9370adec408ccebd.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/vehicles/%5Bid%5D/not-found-f9cc7135844f9c57.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/vehicles/%5Bid%5D/page-32dd916f0eb7eb2f.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/vehicles/%5Bid%5D/payments/page-ed2b4a6f237310c6.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/vehicles/%5Bid%5D/vehicle-info/page-ea30a6efe7ddef59.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/vehicles/%5Bid%5D/waiver/add-new/page-be7046e3173a67ad.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/vehicles/%5Bid%5D/waiver/history/page-be296c167031f5d5.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/vehicles/%5Bid%5D/waiver/page-7ac1af39416f94cb.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/vehicles/layout-4bb4921b7f5d4bd8.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/vehicles/new-vehicle/drivers-license/page-bcdb374dc590047d.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/vehicles/new-vehicle/page-a6d5547ad3fe5412.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/vehicles/new-vehicle/plate-info/page-8eb4d578b1b841f9.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/vehicles/page-be2f71c75b44a50c.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/vehicles/search/%5Bid%5D/page-dec5f1e445f819a5.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/(root)/vehicles/search/page-d5072ba985e3caf8.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/check-in/%5Bid%5D/checked/page-0bc3817e2b6c1d9d.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/check-in/%5Bid%5D/page-1f186ec691a1b07e.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/check-in/layout-37c5b247cf22e313.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/check-in/page-f06e0e55710716d6.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/info/%5Bid%5D/page-872b32ea90da48bd.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/info/layout-0d2da06d3b5fe044.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/info/page-b0a3e0a4b9a4f5c3.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/layout-250cde3db41da6b2.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/manage/about/page-a969f15e28e8a530.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/manage/layout-fe546b846525342e.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/manage/page-33ad869060f28668.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/manage/profile/page-f57f0312c97d7039.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/manage/security/page-f274bb3ed61e0ebe.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/not-found-24d9e9d9f420d619.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/page-dfc689419ef557a8.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/search/%5Bplate_number%5D/page-b658c4caa8cc4e1c.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/search/layout-907742abeeb14358.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/search/not-found-e1be31bc6590e91f.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/app/search/page-bce24960f2fdab38.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/bf6a786c-7d2bf59a5d04187d.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/framework-4498e84bb0ba1830.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/main-9d09dbfbecc3749f.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/main-app-55710de059bf7c4a.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/pages/_app-0a6f9986ee298e67.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/pages/_error-70c7d9fb687d5ff5.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-bed208c7830ed36b.js",revision:"G3-5b8DU7JUdKfgKN_qri"},{url:"/_next/static/css/5bad92bc1c39c019.css",revision:"5bad92bc1c39c019"},{url:"/_next/static/media/155cae559bbd1a77-s.p.woff2",revision:"268d01e94fa0e3a13787891fe19f739c"},{url:"/_next/static/media/162938472036e0a8-s.woff2",revision:"f07093b23087bde42e34448bcbad3f78"},{url:"/_next/static/media/4caeef6da8d39a4c-s.woff2",revision:"9dd23ab8e851b7e31964d7ba10ed10af"},{url:"/_next/static/media/4de1fea1a954a5b6-s.p.woff2",revision:"b7d6b48d8d12946dc808ff39aed6c460"},{url:"/_next/static/media/55c20a7790588da9-s.p.woff2",revision:"816d95a45d019ad06908231c9584ec03"},{url:"/_next/static/media/6d664cce900333ee-s.p.woff2",revision:"017598645bcc882a3610effe171c2ca3"},{url:"/_next/static/media/6ec89c3f4265bc9b-s.woff2",revision:"5396d177b727ae5121d49fda50183c3b"},{url:"/_next/static/media/7ff6869a1704182a-s.p.woff2",revision:"cf5ec3859b05de1b9351ab934b937417"},{url:"/_next/static/media/af4d27004aa34222-s.woff2",revision:"c5a05a4e2a52b4590fbb511cc93b5045"},{url:"/_next/static/media/f1df658da56627d0-s.woff2",revision:"372d9cf6e4822b41d014fcc9de0a979a"},{url:"/anambara.png",revision:"c8dd9c223139aeaa998256553311d766"},{url:"/animations/1.json",revision:"386762e7ea4ca088c313cf854514db98"},{url:"/animations/2.json",revision:"eb08f3cb74bc32a2d01bf7f51e0fbc12"},{url:"/authpageLogo.png",revision:"a1d23b1833a4c09d20e73888dd3f582d"},{url:"/avater.png",revision:"b196d84ecf40bf9eca3d4bba0d339a10"},{url:"/avater2.png",revision:"5fe696f0d338ab52da789b7f596690f7"},{url:"/drivers.png",revision:"05b5abba84438e46d898d667f46391a5"},{url:"/favicon.ico",revision:"09ea8b87e9cca8cfeaa2f5220e647a5e"},{url:"/fineandpenal.png",revision:"63123578da10a1826b1146af5918d90b"},{url:"/graph.png",revision:"d38856b6cfff311a83937b8033e81148"},{url:"/logo.png",revision:"3076d500db0de49cc7e51c0c78f09111"},{url:"/logo2.png",revision:"226f6363e69f91ec373f0d8e3daecdc8"},{url:"/payment.png",revision:"e1d3cd49322515feb8f35850c76275f6"},{url:"/personalinfo.png",revision:"b360b0546b93f6b1c6a3036a9f8c45af"},{url:"/refunds.png",revision:"0b70c38b02be0b89e2a37eb016e0413a"},{url:"/scanplate.png",revision:"3309ab89021564569a1b35272c11a963"},{url:"/service-worker.js",revision:"ff5da0b292612186186be55009060875"},{url:"/tricycle.jpg",revision:"a5ae6ed821148b1929886d77039fc931"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:s,state:a})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

if(!self.define){let e,s={};const c=(c,n)=>(c=new URL(c+".js",n).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>c(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(a(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/169-d20b8fbdd8dc5992.js",revision:"d20b8fbdd8dc5992"},{url:"/_next/static/chunks/196-ccff8c2eaf2bc29b.js",revision:"ccff8c2eaf2bc29b"},{url:"/_next/static/chunks/226-790d32dfb3af3463.js",revision:"790d32dfb3af3463"},{url:"/_next/static/chunks/24-2e407363dff93d3e.js",revision:"2e407363dff93d3e"},{url:"/_next/static/chunks/246-e4cea4b2e7cc7dfc.js",revision:"e4cea4b2e7cc7dfc"},{url:"/_next/static/chunks/281-80ecec9ca928eb84.js",revision:"80ecec9ca928eb84"},{url:"/_next/static/chunks/35-918f7ac874b495e2.js",revision:"918f7ac874b495e2"},{url:"/_next/static/chunks/386-ab923ad8018b3a5c.js",revision:"ab923ad8018b3a5c"},{url:"/_next/static/chunks/394.86cac433b6043140.js",revision:"86cac433b6043140"},{url:"/_next/static/chunks/672-68902c605393a096.js",revision:"68902c605393a096"},{url:"/_next/static/chunks/6c44d60f.74afb8be97c29bd3.js",revision:"74afb8be97c29bd3"},{url:"/_next/static/chunks/805-26a096f5fbc3810e.js",revision:"26a096f5fbc3810e"},{url:"/_next/static/chunks/823-fa5b8b7182b1c69b.js",revision:"fa5b8b7182b1c69b"},{url:"/_next/static/chunks/843-9d3af75c4c7276b9.js",revision:"9d3af75c4c7276b9"},{url:"/_next/static/chunks/884-6b36e61a115df1ce.js",revision:"6b36e61a115df1ce"},{url:"/_next/static/chunks/897-69d59c7a1f517e7e.js",revision:"69d59c7a1f517e7e"},{url:"/_next/static/chunks/976-474171cac6bea9d0.js",revision:"474171cac6bea9d0"},{url:"/_next/static/chunks/992-3630daf693109539.js",revision:"3630daf693109539"},{url:"/_next/static/chunks/framework-3b5a00d5d7e8d93b.js",revision:"3b5a00d5d7e8d93b"},{url:"/_next/static/chunks/main-743f8aff90ea8642.js",revision:"743f8aff90ea8642"},{url:"/_next/static/chunks/pages/_app-54ec5ef9892a33d8.js",revision:"54ec5ef9892a33d8"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/add-donation-form-970c700b83e824ee.js",revision:"970c700b83e824ee"},{url:"/_next/static/chunks/pages/auth/login-e8e8fb8c1a2bc999.js",revision:"e8e8fb8c1a2bc999"},{url:"/_next/static/chunks/pages/donations-3d29eb2af7ec5f23.js",revision:"3d29eb2af7ec5f23"},{url:"/_next/static/chunks/pages/events-2eb2335be9fc3516.js",revision:"2eb2335be9fc3516"},{url:"/_next/static/chunks/pages/events/%5Bslug%5D-79cbca224397d5d6.js",revision:"79cbca224397d5d6"},{url:"/_next/static/chunks/pages/home-e812da3c1b3e865b.js",revision:"e812da3c1b3e865b"},{url:"/_next/static/chunks/pages/index-09411770727d8dfa.js",revision:"09411770727d8dfa"},{url:"/_next/static/chunks/pages/mnemonic-f1cae6876ee9d0c1.js",revision:"f1cae6876ee9d0c1"},{url:"/_next/static/chunks/pages/profile-03342626d96f135b.js",revision:"03342626d96f135b"},{url:"/_next/static/chunks/pages/profile/ProfileInfo-830fe877e62588d3.js",revision:"830fe877e62588d3"},{url:"/_next/static/chunks/pages/profile/ProfileMenuList-bc229c527d8d359d.js",revision:"bc229c527d8d359d"},{url:"/_next/static/chunks/pages/profile/UserAvatar-88e4e0fd0fde261e.js",revision:"88e4e0fd0fde261e"},{url:"/_next/static/chunks/pages/profile/context-83071b21e2623505.js",revision:"83071b21e2623505"},{url:"/_next/static/chunks/pages/profile/services-b55bd509e7ada783.js",revision:"b55bd509e7ada783"},{url:"/_next/static/chunks/pages/register-e8880464eeeb1080.js",revision:"e8880464eeeb1080"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-483caf52bc16fa23.js",revision:"483caf52bc16fa23"},{url:"/_next/static/media/icon-512x512.f9373517.png",revision:"4f715df97ea156ca96cf66df6006b60f"},{url:"/_next/static/ocZa7zdCtgbxs9XdP6xaf/_buildManifest.js",revision:"582a0388974acb94fd90e2c75869e00e"},{url:"/_next/static/ocZa7zdCtgbxs9XdP6xaf/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-192x192.png",revision:"4988808461543d363c083d525242d81f"},{url:"/icon-256x256.png",revision:"1fe88eaf9a3e37eacc47029dcf21c3f2"},{url:"/icon-384x384.png",revision:"4dbd0ae6d1ef80c2fbe85cfe6188bd0e"},{url:"/icon-512x512.png",revision:"4f715df97ea156ca96cf66df6006b60f"},{url:"/manifest.json",revision:"db88a564e7585823f93c4ad5324e2c66"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

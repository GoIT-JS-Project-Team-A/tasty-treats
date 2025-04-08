// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"5j6Kf":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d68ad56631b563d9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"a0t4e":[function(require,module,exports,__globalThis) {
var _apiJs = require("./js/services/API.js");
var _categorySearchJs = require("./js/services/category-search.js");
var _paginationJs = require("./js/utilities/pagination.js");
var _swiperJs = require("./js/utilities/swiper.js");
var _swiperApiJs = require("./js/utilities/swiper-api.js");
var _scrollbarJs = require("./js/utilities/scrollbar.js");
var _rendersJs = require("./js/renders/renders.js");
var _mobileMenuJs = require("./js/utilities/mobile-menu.js");
var _searchJs = require("./js/renders/search.js");
var _renderPopularRecipesJs = require("./js/renders/render-popular-recipes.js");
var _orderNowModalJs = require("./js/utilities/order-now-modal.js");
var _modalRecipesJs = require("./js/utilities/modal-recipes.js");
var _favListJs = require("./js/utilities/fav-list.js");

},{"./js/services/API.js":"galgN","./js/services/category-search.js":"4BEBs","./js/utilities/pagination.js":"iooIk","./js/utilities/swiper.js":"8yC9R","./js/utilities/swiper-api.js":"cNSSK","./js/utilities/scrollbar.js":"7IYHs","./js/renders/renders.js":"5mYSJ","./js/utilities/mobile-menu.js":"eeubU","./js/renders/search.js":"jTKI1","./js/renders/render-popular-recipes.js":"fAg6A","./js/utilities/order-now-modal.js":"82STE","./js/utilities/modal-recipes.js":"9AkT3","./js/utilities/fav-list.js":"h96Oj"}],"4BEBs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fetchRecipesByTitle", ()=>fetchRecipesByTitle);
parcelHelpers.export(exports, "fetchRecipesByCategory", ()=>fetchRecipesByCategory);
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
const API_URL_recipes = 'https://tasty-treats-backend.p.goit.global/api/recipes';
function resizePage() {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1280) return 'per_page=9&limit=9';
    else if (windowWidth >= 768 && windowWidth < 1280) return 'per_page=8&limit=8';
    else if (windowWidth < 768) return 'per_page=6&limit=6';
}
async function fetchRecipesByTitle(search, page, time = "", area = "", ingredients = "") {
    const url = `${API_URL_recipes}?title=${search}&page=${page}&${resizePage()}&time=${time}&area=${area}&ingredient=${ingredient}`;
    try {
        const { data } = await (0, _axiosDefault.default).get(url);
        return data;
    } catch (error) {
        console.log("Tarifleri al\u0131rken bir hata olus\u0327tu \nError happened while fetching recipes:", error);
    }
}
async function fetchRecipesByCategory(search, page) {
    const url = `${API_URL_recipes}?category=${search}&page=${page}&${resizePage()}`;
    try {
        const { data } = await (0, _axiosDefault.default).get(url);
        return data;
    } catch (error) {
        console.log("Tarifleri al\u0131rken bir hata olus\u0327tu \nError happened while fetching recipes:", error);
    }
}

},{"axios":"kooH4","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8yC9R":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _swiperBundleMinMjs = require("swiper/swiper-bundle.min.mjs");
var _swiperBundleMinMjsDefault = parcelHelpers.interopDefault(_swiperBundleMinMjs);
var _swiperBundleCss = require("swiper/swiper-bundle.css");
var _paginationMinCss = require("swiper/modules/pagination.min.css");
new (0, _swiperBundleMinMjsDefault.default)('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets: true
    },
    spaceBetween: 10,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    grabCursor: true,
    loop: true,
    mousewheel: {
        invert: true
    },
    slidesPerView: 1,
    slidesPerGroup: 1
});

},{"swiper/swiper-bundle.min.mjs":"jzd5E","swiper/swiper-bundle.css":"aErfw","swiper/modules/pagination.min.css":"jHq3j","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jzd5E":[function(require,module,exports,__globalThis) {
/**
 * Swiper 11.2.6
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2025 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: March 19, 2025
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Swiper", ()=>(0, _swiperCoreMinMjs.S));
parcelHelpers.export(exports, "default", ()=>(0, _swiperCoreMinMjs.S));
var _swiperCoreMinMjs = require("./shared/swiper-core.min.mjs");
var _virtualMinMjs = require("./modules/virtual.min.mjs");
var _virtualMinMjsDefault = parcelHelpers.interopDefault(_virtualMinMjs);
var _keyboardMinMjs = require("./modules/keyboard.min.mjs");
var _keyboardMinMjsDefault = parcelHelpers.interopDefault(_keyboardMinMjs);
var _mousewheelMinMjs = require("./modules/mousewheel.min.mjs");
var _mousewheelMinMjsDefault = parcelHelpers.interopDefault(_mousewheelMinMjs);
var _navigationMinMjs = require("./modules/navigation.min.mjs");
var _navigationMinMjsDefault = parcelHelpers.interopDefault(_navigationMinMjs);
var _paginationMinMjs = require("./modules/pagination.min.mjs");
var _paginationMinMjsDefault = parcelHelpers.interopDefault(_paginationMinMjs);
var _scrollbarMinMjs = require("./modules/scrollbar.min.mjs");
var _scrollbarMinMjsDefault = parcelHelpers.interopDefault(_scrollbarMinMjs);
var _parallaxMinMjs = require("./modules/parallax.min.mjs");
var _parallaxMinMjsDefault = parcelHelpers.interopDefault(_parallaxMinMjs);
var _zoomMinMjs = require("./modules/zoom.min.mjs");
var _zoomMinMjsDefault = parcelHelpers.interopDefault(_zoomMinMjs);
var _controllerMinMjs = require("./modules/controller.min.mjs");
var _controllerMinMjsDefault = parcelHelpers.interopDefault(_controllerMinMjs);
var _a11YMinMjs = require("./modules/a11y.min.mjs");
var _a11YMinMjsDefault = parcelHelpers.interopDefault(_a11YMinMjs);
var _historyMinMjs = require("./modules/history.min.mjs");
var _historyMinMjsDefault = parcelHelpers.interopDefault(_historyMinMjs);
var _hashNavigationMinMjs = require("./modules/hash-navigation.min.mjs");
var _hashNavigationMinMjsDefault = parcelHelpers.interopDefault(_hashNavigationMinMjs);
var _autoplayMinMjs = require("./modules/autoplay.min.mjs");
var _autoplayMinMjsDefault = parcelHelpers.interopDefault(_autoplayMinMjs);
var _thumbsMinMjs = require("./modules/thumbs.min.mjs");
var _thumbsMinMjsDefault = parcelHelpers.interopDefault(_thumbsMinMjs);
var _freeModeMinMjs = require("./modules/free-mode.min.mjs");
var _freeModeMinMjsDefault = parcelHelpers.interopDefault(_freeModeMinMjs);
var _gridMinMjs = require("./modules/grid.min.mjs");
var _gridMinMjsDefault = parcelHelpers.interopDefault(_gridMinMjs);
var _manipulationMinMjs = require("./modules/manipulation.min.mjs");
var _manipulationMinMjsDefault = parcelHelpers.interopDefault(_manipulationMinMjs);
var _effectFadeMinMjs = require("./modules/effect-fade.min.mjs");
var _effectFadeMinMjsDefault = parcelHelpers.interopDefault(_effectFadeMinMjs);
var _effectCubeMinMjs = require("./modules/effect-cube.min.mjs");
var _effectCubeMinMjsDefault = parcelHelpers.interopDefault(_effectCubeMinMjs);
var _effectFlipMinMjs = require("./modules/effect-flip.min.mjs");
var _effectFlipMinMjsDefault = parcelHelpers.interopDefault(_effectFlipMinMjs);
var _effectCoverflowMinMjs = require("./modules/effect-coverflow.min.mjs");
var _effectCoverflowMinMjsDefault = parcelHelpers.interopDefault(_effectCoverflowMinMjs);
var _effectCreativeMinMjs = require("./modules/effect-creative.min.mjs");
var _effectCreativeMinMjsDefault = parcelHelpers.interopDefault(_effectCreativeMinMjs);
var _effectCardsMinMjs = require("./modules/effect-cards.min.mjs");
var _effectCardsMinMjsDefault = parcelHelpers.interopDefault(_effectCardsMinMjs);
const modules = [
    (0, _virtualMinMjsDefault.default),
    (0, _keyboardMinMjsDefault.default),
    (0, _mousewheelMinMjsDefault.default),
    (0, _navigationMinMjsDefault.default),
    (0, _paginationMinMjsDefault.default),
    (0, _scrollbarMinMjsDefault.default),
    (0, _parallaxMinMjsDefault.default),
    (0, _zoomMinMjsDefault.default),
    (0, _controllerMinMjsDefault.default),
    (0, _a11YMinMjsDefault.default),
    (0, _historyMinMjsDefault.default),
    (0, _hashNavigationMinMjsDefault.default),
    (0, _autoplayMinMjsDefault.default),
    (0, _thumbsMinMjsDefault.default),
    (0, _freeModeMinMjsDefault.default),
    (0, _gridMinMjsDefault.default),
    (0, _manipulationMinMjsDefault.default),
    (0, _effectFadeMinMjsDefault.default),
    (0, _effectCubeMinMjsDefault.default),
    (0, _effectFlipMinMjsDefault.default),
    (0, _effectCoverflowMinMjsDefault.default),
    (0, _effectCreativeMinMjsDefault.default),
    (0, _effectCardsMinMjsDefault.default)
];
(0, _swiperCoreMinMjs.S).use(modules);

},{"./shared/swiper-core.min.mjs":"fFTOW","./modules/virtual.min.mjs":"dQQKS","./modules/keyboard.min.mjs":"gntXl","./modules/mousewheel.min.mjs":"2tEAW","./modules/navigation.min.mjs":"7lq0p","./modules/pagination.min.mjs":"8h9mU","./modules/scrollbar.min.mjs":"80S0h","./modules/parallax.min.mjs":"h5zLY","./modules/zoom.min.mjs":"7jyjq","./modules/controller.min.mjs":"8mPKa","./modules/a11y.min.mjs":"bWney","./modules/history.min.mjs":"byDSE","./modules/hash-navigation.min.mjs":"eJJji","./modules/autoplay.min.mjs":"4Gjch","./modules/thumbs.min.mjs":"6EjVL","./modules/free-mode.min.mjs":"3JuSP","./modules/grid.min.mjs":"eqFEI","./modules/manipulation.min.mjs":"8I3fF","./modules/effect-fade.min.mjs":"bVyji","./modules/effect-cube.min.mjs":"cHiUj","./modules/effect-flip.min.mjs":"gAdsU","./modules/effect-coverflow.min.mjs":"kjv2Q","./modules/effect-creative.min.mjs":"ddJok","./modules/effect-cards.min.mjs":"bXFss","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fFTOW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "S", ()=>Swiper);
parcelHelpers.export(exports, "d", ()=>defaults);
var _ssrWindowEsmMinMjs = require("./ssr-window.esm.min.mjs");
var _utilsMinMjs = require("./utils.min.mjs");
let support, deviceCached, browser;
function calcSupport() {
    const e = (0, _ssrWindowEsmMinMjs.a)(), t = (0, _ssrWindowEsmMinMjs.g)();
    return {
        smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
    };
}
function getSupport() {
    return support || (support = calcSupport()), support;
}
function calcDevice(e) {
    let { userAgent: t } = void 0 === e ? {} : e;
    const s = getSupport(), i = (0, _ssrWindowEsmMinMjs.a)(), r = i.navigator.platform, n = t || i.navigator.userAgent, a = {
        ios: !1,
        android: !1
    }, l = i.screen.width, o = i.screen.height, d = n.match(/(Android);?[\s\/]+([\d.]+)?/);
    let c = n.match(/(iPad).*OS\s([\d_]+)/);
    const p = n.match(/(iPod)(.*OS\s([\d_]+))?/), u = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/), h = "Win32" === r;
    let m = "MacIntel" === r;
    return !c && m && s.touch && [
        "1024x1366",
        "1366x1024",
        "834x1194",
        "1194x834",
        "834x1112",
        "1112x834",
        "768x1024",
        "1024x768",
        "820x1180",
        "1180x820",
        "810x1080",
        "1080x810"
    ].indexOf(`${l}x${o}`) >= 0 && (c = n.match(/(Version)\/([\d.]+)/), c || (c = [
        0,
        1,
        "13_0_0"
    ]), m = !1), d && !h && (a.os = "android", a.android = !0), (c || u || p) && (a.os = "ios", a.ios = !0), a;
}
function getDevice(e) {
    return void 0 === e && (e = {}), deviceCached || (deviceCached = calcDevice(e)), deviceCached;
}
function calcBrowser() {
    const e = (0, _ssrWindowEsmMinMjs.a)(), t = getDevice();
    let s = !1;
    function i() {
        const t = e.navigator.userAgent.toLowerCase();
        return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0;
    }
    if (i()) {
        const t = String(e.navigator.userAgent);
        if (t.includes("Version/")) {
            const [e, i] = t.split("Version/")[1].split(" ")[0].split(".").map((e)=>Number(e));
            s = e < 16 || 16 === e && i < 2;
        }
    }
    const r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent), n = i();
    return {
        isSafari: s || n,
        needPerspectiveFix: s,
        need3dFix: n || r && t.ios,
        isWebView: r
    };
}
function getBrowser() {
    return browser || (browser = calcBrowser()), browser;
}
function Resize(e) {
    let { swiper: t, on: s, emit: i } = e;
    const r = (0, _ssrWindowEsmMinMjs.a)();
    let n = null, a = null;
    const l = ()=>{
        t && !t.destroyed && t.initialized && (i("beforeResize"), i("resize"));
    }, o = ()=>{
        t && !t.destroyed && t.initialized && i("orientationchange");
    };
    s("init", ()=>{
        t.params.resizeObserver && void 0 !== r.ResizeObserver ? t && !t.destroyed && t.initialized && (n = new ResizeObserver((e)=>{
            a = r.requestAnimationFrame(()=>{
                const { width: s, height: i } = t;
                let r = s, n = i;
                e.forEach((e)=>{
                    let { contentBoxSize: s, contentRect: i, target: a } = e;
                    a && a !== t.el || (r = i ? i.width : (s[0] || s).inlineSize, n = i ? i.height : (s[0] || s).blockSize);
                }), r === s && n === i || l();
            });
        }), n.observe(t.el)) : (r.addEventListener("resize", l), r.addEventListener("orientationchange", o));
    }), s("destroy", ()=>{
        a && r.cancelAnimationFrame(a), n && n.unobserve && t.el && (n.unobserve(t.el), n = null), r.removeEventListener("resize", l), r.removeEventListener("orientationchange", o);
    });
}
function Observer(e) {
    let { swiper: t, extendParams: s, on: i, emit: r } = e;
    const n = [], a = (0, _ssrWindowEsmMinMjs.a)(), l = function(e, s) {
        void 0 === s && (s = {});
        const i = new (a.MutationObserver || a.WebkitMutationObserver)((e)=>{
            if (t.__preventObserver__) return;
            if (1 === e.length) return void r("observerUpdate", e[0]);
            const s = function() {
                r("observerUpdate", e[0]);
            };
            a.requestAnimationFrame ? a.requestAnimationFrame(s) : a.setTimeout(s, 0);
        });
        i.observe(e, {
            attributes: void 0 === s.attributes || s.attributes,
            childList: t.isElement || (void 0 === s.childList || s).childList,
            characterData: void 0 === s.characterData || s.characterData
        }), n.push(i);
    };
    s({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }), i("init", ()=>{
        if (t.params.observer) {
            if (t.params.observeParents) {
                const e = (0, _utilsMinMjs.a)(t.hostEl);
                for(let t = 0; t < e.length; t += 1)l(e[t]);
            }
            l(t.hostEl, {
                childList: t.params.observeSlideChildren
            }), l(t.wrapperEl, {
                attributes: !1
            });
        }
    }), i("destroy", ()=>{
        n.forEach((e)=>{
            e.disconnect();
        }), n.splice(0, n.length);
    });
}
var eventsEmitter = {
    on (e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        const r = s ? "unshift" : "push";
        return e.split(" ").forEach((e)=>{
            i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][r](t);
        }), i;
    },
    once (e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        function r() {
            i.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
            for(var s = arguments.length, n = new Array(s), a = 0; a < s; a++)n[a] = arguments[a];
            t.apply(i, n);
        }
        return r.__emitterProxy = t, i.on(e, r, s);
    },
    onAny (e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof e) return s;
        const i = t ? "unshift" : "push";
        return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s;
    },
    offAny (e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const s = t.eventsAnyListeners.indexOf(e);
        return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
    },
    off (e, t) {
        const s = this;
        return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e)=>{
            void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach((i, r)=>{
                (i === t || i.__emitterProxy && i.__emitterProxy === t) && s.eventsListeners[e].splice(r, 1);
            });
        }), s) : s;
    },
    emit () {
        const e = this;
        if (!e.eventsListeners || e.destroyed) return e;
        if (!e.eventsListeners) return e;
        let t, s, i;
        for(var r = arguments.length, n = new Array(r), a = 0; a < r; a++)n[a] = arguments[a];
        "string" == typeof n[0] || Array.isArray(n[0]) ? (t = n[0], s = n.slice(1, n.length), i = e) : (t = n[0].events, s = n[0].data, i = n[0].context || e), s.unshift(i);
        return (Array.isArray(t) ? t : t.split(" ")).forEach((t)=>{
            e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e)=>{
                e.apply(i, [
                    t,
                    ...s
                ]);
            }), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e)=>{
                e.apply(i, s);
            });
        }), e;
    }
};
function updateSize() {
    const e = this;
    let t, s;
    const i = e.el;
    t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : i.clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : i.clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt((0, _utilsMinMjs.p)(i, "padding-left") || 0, 10) - parseInt((0, _utilsMinMjs.p)(i, "padding-right") || 0, 10), s = s - parseInt((0, _utilsMinMjs.p)(i, "padding-top") || 0, 10) - parseInt((0, _utilsMinMjs.p)(i, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
        width: t,
        height: s,
        size: e.isHorizontal() ? t : s
    }));
}
function updateSlides() {
    const e = this;
    function t(t, s) {
        return parseFloat(t.getPropertyValue(e.getDirectionLabel(s)) || 0);
    }
    const s = e.params, { wrapperEl: i, slidesEl: r, size: n, rtlTranslate: a, wrongRTL: l } = e, o = e.virtual && s.virtual.enabled, d = o ? e.virtual.slides.length : e.slides.length, c = (0, _utilsMinMjs.e)(r, `.${e.params.slideClass}, swiper-slide`), p = o ? e.virtual.slides.length : c.length;
    let u = [];
    const h = [], m = [];
    let f = s.slidesOffsetBefore;
    "function" == typeof f && (f = s.slidesOffsetBefore.call(e));
    let v = s.slidesOffsetAfter;
    "function" == typeof v && (v = s.slidesOffsetAfter.call(e));
    const g = e.snapGrid.length, w = e.slidesGrid.length;
    let S = s.spaceBetween, T = -f, b = 0, x = 0;
    if (void 0 === n) return;
    "string" == typeof S && S.indexOf("%") >= 0 ? S = parseFloat(S.replace("%", "")) / 100 * n : "string" == typeof S && (S = parseFloat(S)), e.virtualSize = -S, c.forEach((e)=>{
        a ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = "";
    }), s.centeredSlides && s.cssMode && ((0, _utilsMinMjs.s)(i, "--swiper-centered-offset-before", ""), (0, _utilsMinMjs.s)(i, "--swiper-centered-offset-after", ""));
    const y = s.grid && s.grid.rows > 1 && e.grid;
    let E;
    y ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
    const C = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter((e)=>void 0 !== s.breakpoints[e].slidesPerView).length > 0;
    for(let i = 0; i < p; i += 1){
        let r;
        if (E = 0, c[i] && (r = c[i]), y && e.grid.updateSlide(i, r, c), !c[i] || "none" !== (0, _utilsMinMjs.p)(r, "display")) {
            if ("auto" === s.slidesPerView) {
                C && (c[i].style[e.getDirectionLabel("width")] = "");
                const n = getComputedStyle(r), a = r.style.transform, l = r.style.webkitTransform;
                if (a && (r.style.transform = "none"), l && (r.style.webkitTransform = "none"), s.roundLengths) E = e.isHorizontal() ? (0, _utilsMinMjs.f)(r, "width", !0) : (0, _utilsMinMjs.f)(r, "height", !0);
                else {
                    const e = t(n, "width"), s = t(n, "padding-left"), i = t(n, "padding-right"), a = t(n, "margin-left"), l = t(n, "margin-right"), o = n.getPropertyValue("box-sizing");
                    if (o && "border-box" === o) E = e + a + l;
                    else {
                        const { clientWidth: t, offsetWidth: n } = r;
                        E = e + s + i + a + l + (n - t);
                    }
                }
                a && (r.style.transform = a), l && (r.style.webkitTransform = l), s.roundLengths && (E = Math.floor(E));
            } else E = (n - (s.slidesPerView - 1) * S) / s.slidesPerView, s.roundLengths && (E = Math.floor(E)), c[i] && (c[i].style[e.getDirectionLabel("width")] = `${E}px`);
            c[i] && (c[i].swiperSlideSize = E), m.push(E), s.centeredSlides ? (T = T + E / 2 + b / 2 + S, 0 === b && 0 !== i && (T = T - n / 2 - S), 0 === i && (T = T - n / 2 - S), Math.abs(T) < .001 && (T = 0), s.roundLengths && (T = Math.floor(T)), x % s.slidesPerGroup == 0 && u.push(T), h.push(T)) : (s.roundLengths && (T = Math.floor(T)), (x - Math.min(e.params.slidesPerGroupSkip, x)) % e.params.slidesPerGroup == 0 && u.push(T), h.push(T), T = T + E + S), e.virtualSize += E + S, b = E, x += 1;
        }
    }
    if (e.virtualSize = Math.max(e.virtualSize, n) + v, a && l && ("slide" === s.effect || "coverflow" === s.effect) && (i.style.width = `${e.virtualSize + S}px`), s.setWrapperSize && (i.style[e.getDirectionLabel("width")] = `${e.virtualSize + S}px`), y && e.grid.updateWrapperSize(E, u), !s.centeredSlides) {
        const t = [];
        for(let i = 0; i < u.length; i += 1){
            let r = u[i];
            s.roundLengths && (r = Math.floor(r)), u[i] <= e.virtualSize - n && t.push(r);
        }
        u = t, Math.floor(e.virtualSize - n) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - n);
    }
    if (o && s.loop) {
        const t = m[0] + S;
        if (s.slidesPerGroup > 1) {
            const i = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup), r = t * s.slidesPerGroup;
            for(let e = 0; e < i; e += 1)u.push(u[u.length - 1] + r);
        }
        for(let i = 0; i < e.virtual.slidesBefore + e.virtual.slidesAfter; i += 1)1 === s.slidesPerGroup && u.push(u[u.length - 1] + t), h.push(h[h.length - 1] + t), e.virtualSize += t;
    }
    if (0 === u.length && (u = [
        0
    ]), 0 !== S) {
        const t = e.isHorizontal() && a ? "marginLeft" : e.getDirectionLabel("marginRight");
        c.filter((e, t)=>!(s.cssMode && !s.loop) || t !== c.length - 1).forEach((e)=>{
            e.style[t] = `${S}px`;
        });
    }
    if (s.centeredSlides && s.centeredSlidesBounds) {
        let e = 0;
        m.forEach((t)=>{
            e += t + (S || 0);
        }), e -= S;
        const t = e > n ? e - n : 0;
        u = u.map((e)=>e <= 0 ? -f : e > t ? t + v : e);
    }
    if (s.centerInsufficientSlides) {
        let e = 0;
        m.forEach((t)=>{
            e += t + (S || 0);
        }), e -= S;
        const t = (s.slidesOffsetBefore || 0) + (s.slidesOffsetAfter || 0);
        if (e + t < n) {
            const s = (n - e - t) / 2;
            u.forEach((e, t)=>{
                u[t] = e - s;
            }), h.forEach((e, t)=>{
                h[t] = e + s;
            });
        }
    }
    if (Object.assign(e, {
        slides: c,
        snapGrid: u,
        slidesGrid: h,
        slidesSizesGrid: m
    }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
        (0, _utilsMinMjs.s)(i, "--swiper-centered-offset-before", -u[0] + "px"), (0, _utilsMinMjs.s)(i, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");
        const t = -e.snapGrid[0], s = -e.slidesGrid[0];
        e.snapGrid = e.snapGrid.map((e)=>e + t), e.slidesGrid = e.slidesGrid.map((e)=>e + s);
    }
    if (p !== d && e.emit("slidesLengthChange"), u.length !== g && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== w && e.emit("slidesGridLengthChange"), s.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !(o || s.cssMode || "slide" !== s.effect && "fade" !== s.effect)) {
        const t = `${s.containerModifierClass}backface-hidden`, i = e.el.classList.contains(t);
        p <= s.maxBackfaceHiddenSlides ? i || e.el.classList.add(t) : i && e.el.classList.remove(t);
    }
}
function updateAutoHeight(e) {
    const t = this, s = [], i = t.virtual && t.params.virtual.enabled;
    let r, n = 0;
    "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
    const a = (e)=>i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
    if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) {
        if (t.params.centeredSlides) (t.visibleSlides || []).forEach((e)=>{
            s.push(e);
        });
        else for(r = 0; r < Math.ceil(t.params.slidesPerView); r += 1){
            const e = t.activeIndex + r;
            if (e > t.slides.length && !i) break;
            s.push(a(e));
        }
    } else s.push(a(t.activeIndex));
    for(r = 0; r < s.length; r += 1)if (void 0 !== s[r]) {
        const e = s[r].offsetHeight;
        n = e > n ? e : n;
    }
    (n || 0 === n) && (t.wrapperEl.style.height = `${n}px`);
}
function updateSlidesOffset() {
    const e = this, t = e.slides, s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
    for(let i = 0; i < t.length; i += 1)t[i].swiperSlideOffset = (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) - s - e.cssOverflowAdjustment();
}
const toggleSlideClasses$1 = (e, t, s)=>{
    t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s);
};
function updateSlidesProgress(e) {
    void 0 === e && (e = this && this.translate || 0);
    const t = this, s = t.params, { slides: i, rtlTranslate: r, snapGrid: n } = t;
    if (0 === i.length) return;
    void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
    let a = -e;
    r && (a = e), t.visibleSlidesIndexes = [], t.visibleSlides = [];
    let l = s.spaceBetween;
    "string" == typeof l && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * t.size : "string" == typeof l && (l = parseFloat(l));
    for(let e = 0; e < i.length; e += 1){
        const o = i[e];
        let d = o.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (d -= i[0].swiperSlideOffset);
        const c = (a + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l), p = (a - n[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l), u = -(a - d), h = u + t.slidesSizesGrid[e], m = u >= 0 && u <= t.size - t.slidesSizesGrid[e], f = u >= 0 && u < t.size - 1 || h > 1 && h <= t.size || u <= 0 && h >= t.size;
        f && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(e)), toggleSlideClasses$1(o, f, s.slideVisibleClass), toggleSlideClasses$1(o, m, s.slideFullyVisibleClass), o.progress = r ? -c : c, o.originalProgress = r ? -p : p;
    }
}
function updateProgress(e) {
    const t = this;
    if (void 0 === e) {
        const s = t.rtlTranslate ? -1 : 1;
        e = t && t.translate && t.translate * s || 0;
    }
    const s = t.params, i = t.maxTranslate() - t.minTranslate();
    let { progress: r, isBeginning: n, isEnd: a, progressLoop: l } = t;
    const o = n, d = a;
    if (0 === i) r = 0, n = !0, a = !0;
    else {
        r = (e - t.minTranslate()) / i;
        const s = Math.abs(e - t.minTranslate()) < 1, l = Math.abs(e - t.maxTranslate()) < 1;
        n = s || r <= 0, a = l || r >= 1, s && (r = 0), l && (r = 1);
    }
    if (s.loop) {
        const s = t.getSlideIndexByData(0), i = t.getSlideIndexByData(t.slides.length - 1), r = t.slidesGrid[s], n = t.slidesGrid[i], a = t.slidesGrid[t.slidesGrid.length - 1], o = Math.abs(e);
        l = o >= r ? (o - r) / a : (o + a - n) / a, l > 1 && (l -= 1);
    }
    Object.assign(t, {
        progress: r,
        progressLoop: l,
        isBeginning: n,
        isEnd: a
    }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), n && !o && t.emit("reachBeginning toEdge"), a && !d && t.emit("reachEnd toEdge"), (o && !n || d && !a) && t.emit("fromEdge"), t.emit("progress", r);
}
const toggleSlideClasses = (e, t, s)=>{
    t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s);
};
function updateSlidesClasses() {
    const e = this, { slides: t, params: s, slidesEl: i, activeIndex: r } = e, n = e.virtual && s.virtual.enabled, a = e.grid && s.grid && s.grid.rows > 1, l = (e)=>(0, _utilsMinMjs.e)(i, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
    let o, d, c;
    if (n) {
        if (s.loop) {
            let t = r - e.virtual.slidesBefore;
            t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), o = l(`[data-swiper-slide-index="${t}"]`);
        } else o = l(`[data-swiper-slide-index="${r}"]`);
    } else a ? (o = t.find((e)=>e.column === r), c = t.find((e)=>e.column === r + 1), d = t.find((e)=>e.column === r - 1)) : o = t[r];
    o && (a || (c = (0, _utilsMinMjs.q)(o, `.${s.slideClass}, swiper-slide`)[0], s.loop && !c && (c = t[0]), d = (0, _utilsMinMjs.r)(o, `.${s.slideClass}, swiper-slide`)[0], s.loop)), t.forEach((e)=>{
        toggleSlideClasses(e, e === o, s.slideActiveClass), toggleSlideClasses(e, e === c, s.slideNextClass), toggleSlideClasses(e, e === d, s.slidePrevClass);
    }), e.emitSlidesClasses();
}
const processLazyPreloader = (e, t)=>{
    if (!e || e.destroyed || !e.params) return;
    const s = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
    if (s) {
        let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
        !t && e.isElement && (s.shadowRoot ? t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(()=>{
            s.shadowRoot && (t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), t && t.remove());
        })), t && t.remove();
    }
}, unlazy = (e, t)=>{
    if (!e.slides[t]) return;
    const s = e.slides[t].querySelector('[loading="lazy"]');
    s && s.removeAttribute("loading");
}, preload = (e)=>{
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const s = e.slides.length;
    if (!s || !t || t < 0) return;
    t = Math.min(t, s);
    const i = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView), r = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
        const s = r, n = [
            s - t
        ];
        return n.push(...Array.from({
            length: t
        }).map((e, t)=>s + i + t)), void e.slides.forEach((t, s)=>{
            n.includes(t.column) && unlazy(e, s);
        });
    }
    const n = r + i - 1;
    if (e.params.rewind || e.params.loop) for(let i = r - t; i <= n + t; i += 1){
        const t = (i % s + s) % s;
        (t < r || t > n) && unlazy(e, t);
    }
    else for(let i = Math.max(r - t, 0); i <= Math.min(n + t, s - 1); i += 1)i !== r && (i > n || i < r) && unlazy(e, i);
};
function getActiveIndexByTranslate(e) {
    const { slidesGrid: t, params: s } = e, i = e.rtlTranslate ? e.translate : -e.translate;
    let r;
    for(let e = 0; e < t.length; e += 1)void 0 !== t[e + 1] ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2 ? r = e : i >= t[e] && i < t[e + 1] && (r = e + 1) : i >= t[e] && (r = e);
    return s.normalizeSlideIndex && (r < 0 || void 0 === r) && (r = 0), r;
}
function updateActiveIndex(e) {
    const t = this, s = t.rtlTranslate ? t.translate : -t.translate, { snapGrid: i, params: r, activeIndex: n, realIndex: a, snapIndex: l } = t;
    let o, d = e;
    const c = (e)=>{
        let s = e - t.virtual.slidesBefore;
        return s < 0 && (s = t.virtual.slides.length + s), s >= t.virtual.slides.length && (s -= t.virtual.slides.length), s;
    };
    if (void 0 === d && (d = getActiveIndexByTranslate(t)), i.indexOf(s) >= 0) o = i.indexOf(s);
    else {
        const e = Math.min(r.slidesPerGroupSkip, d);
        o = e + Math.floor((d - e) / r.slidesPerGroup);
    }
    if (o >= i.length && (o = i.length - 1), d === n && !t.params.loop) return void (o !== l && (t.snapIndex = o, t.emit("snapIndexChange")));
    if (d === n && t.params.loop && t.virtual && t.params.virtual.enabled) return void (t.realIndex = c(d));
    const p = t.grid && r.grid && r.grid.rows > 1;
    let u;
    if (t.virtual && r.virtual.enabled && r.loop) u = c(d);
    else if (p) {
        const e = t.slides.find((e)=>e.column === d);
        let s = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
        Number.isNaN(s) && (s = Math.max(t.slides.indexOf(e), 0)), u = Math.floor(s / r.grid.rows);
    } else if (t.slides[d]) {
        const e = t.slides[d].getAttribute("data-swiper-slide-index");
        u = e ? parseInt(e, 10) : d;
    } else u = d;
    Object.assign(t, {
        previousSnapIndex: l,
        snapIndex: o,
        previousRealIndex: a,
        realIndex: u,
        previousIndex: n,
        activeIndex: d
    }), t.initialized && preload(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (a !== u && t.emit("realIndexChange"), t.emit("slideChange"));
}
function updateClickedSlide(e, t) {
    const s = this, i = s.params;
    let r = e.closest(`.${i.slideClass}, swiper-slide`);
    !r && s.isElement && t && t.length > 1 && t.includes(e) && [
        ...t.slice(t.indexOf(e) + 1, t.length)
    ].forEach((e)=>{
        !r && e.matches && e.matches(`.${i.slideClass}, swiper-slide`) && (r = e);
    });
    let n, a = !1;
    if (r) {
        for(let e = 0; e < s.slides.length; e += 1)if (s.slides[e] === r) {
            a = !0, n = e;
            break;
        }
    }
    if (!r || !a) return s.clickedSlide = void 0, void (s.clickedIndex = void 0);
    s.clickedSlide = r, s.virtual && s.params.virtual.enabled ? s.clickedIndex = parseInt(r.getAttribute("data-swiper-slide-index"), 10) : s.clickedIndex = n, i.slideToClickedSlide && void 0 !== s.clickedIndex && s.clickedIndex !== s.activeIndex && s.slideToClickedSlide();
}
var update = {
    updateSize: updateSize,
    updateSlides: updateSlides,
    updateAutoHeight: updateAutoHeight,
    updateSlidesOffset: updateSlidesOffset,
    updateSlidesProgress: updateSlidesProgress,
    updateProgress: updateProgress,
    updateSlidesClasses: updateSlidesClasses,
    updateActiveIndex: updateActiveIndex,
    updateClickedSlide: updateClickedSlide
};
function getSwiperTranslate(e) {
    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
    const { params: t, rtlTranslate: s, translate: i, wrapperEl: r } = this;
    if (t.virtualTranslate) return s ? -i : i;
    if (t.cssMode) return i;
    let n = (0, _utilsMinMjs.j)(r, e);
    return n += this.cssOverflowAdjustment(), s && (n = -n), n || 0;
}
function setTranslate(e, t) {
    const s = this, { rtlTranslate: i, params: r, wrapperEl: n, progress: a } = s;
    let l = 0, o = 0;
    let d;
    s.isHorizontal() ? l = i ? -e : e : o = e, r.roundLengths && (l = Math.floor(l), o = Math.floor(o)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? l : o, r.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -l : -o : r.virtualTranslate || (s.isHorizontal() ? l -= s.cssOverflowAdjustment() : o -= s.cssOverflowAdjustment(), n.style.transform = `translate3d(${l}px, ${o}px, 0px)`);
    const c = s.maxTranslate() - s.minTranslate();
    d = 0 === c ? 0 : (e - s.minTranslate()) / c, d !== a && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
}
function minTranslate() {
    return -this.snapGrid[0];
}
function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
}
function translateTo(e, t, s, i, r) {
    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === i && (i = !0);
    const n = this, { params: a, wrapperEl: l } = n;
    if (n.animating && a.preventInteractionOnTransition) return !1;
    const o = n.minTranslate(), d = n.maxTranslate();
    let c;
    if (c = i && e > o ? o : i && e < d ? d : e, n.updateProgress(c), a.cssMode) {
        const e = n.isHorizontal();
        if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
        else {
            if (!n.support.smoothScroll) return (0, _utilsMinMjs.t)({
                swiper: n,
                targetPosition: -c,
                side: e ? "left" : "top"
            }), !0;
            l.scrollTo({
                [e ? "left" : "top"]: -c,
                behavior: "smooth"
            });
        }
        return !0;
    }
    return 0 === t ? (n.setTransition(0), n.setTranslate(c), s && (n.emit("beforeTransitionStart", t, r), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(c), s && (n.emit("beforeTransitionStart", t, r), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(e) {
        n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, n.animating = !1, s && n.emit("transitionEnd"));
    }), n.wrapperEl.addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd))), !0;
}
var translate = {
    getTranslate: getSwiperTranslate,
    setTranslate: setTranslate,
    minTranslate: minTranslate,
    maxTranslate: maxTranslate,
    translateTo: translateTo
};
function setTransition(e, t) {
    const s = this;
    s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`, s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), s.emit("setTransition", e, t);
}
function transitionEmit(e) {
    let { swiper: t, runCallbacks: s, direction: i, step: r } = e;
    const { activeIndex: n, previousIndex: a } = t;
    let l = i;
    if (l || (l = n > a ? "next" : n < a ? "prev" : "reset"), t.emit(`transition${r}`), s && n !== a) {
        if ("reset" === l) return void t.emit(`slideResetTransition${r}`);
        t.emit(`slideChangeTransition${r}`), "next" === l ? t.emit(`slideNextTransition${r}`) : t.emit(`slidePrevTransition${r}`);
    }
}
function transitionStart(e, t) {
    void 0 === e && (e = !0);
    const s = this, { params: i } = s;
    i.cssMode || (i.autoHeight && s.updateAutoHeight(), transitionEmit({
        swiper: s,
        runCallbacks: e,
        direction: t,
        step: "Start"
    }));
}
function transitionEnd(e, t) {
    void 0 === e && (e = !0);
    const s = this, { params: i } = s;
    s.animating = !1, i.cssMode || (s.setTransition(0), transitionEmit({
        swiper: s,
        runCallbacks: e,
        direction: t,
        step: "End"
    }));
}
var transition = {
    setTransition: setTransition,
    transitionStart: transitionStart,
    transitionEnd: transitionEnd
};
function slideTo(e, t, s, i, r) {
    void 0 === e && (e = 0), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10));
    const n = this;
    let a = e;
    a < 0 && (a = 0);
    const { params: l, snapGrid: o, slidesGrid: d, previousIndex: c, activeIndex: p, rtlTranslate: u, wrapperEl: h, enabled: m } = n;
    if (!m && !i && !r || n.destroyed || n.animating && l.preventInteractionOnTransition) return !1;
    void 0 === t && (t = n.params.speed);
    const f = Math.min(n.params.slidesPerGroupSkip, a);
    let v = f + Math.floor((a - f) / n.params.slidesPerGroup);
    v >= o.length && (v = o.length - 1);
    const g = -o[v];
    if (l.normalizeSlideIndex) for(let e = 0; e < d.length; e += 1){
        const t = -Math.floor(100 * g), s = Math.floor(100 * d[e]), i = Math.floor(100 * d[e + 1]);
        void 0 !== d[e + 1] ? t >= s && t < i - (i - s) / 2 ? a = e : t >= s && t < i && (a = e + 1) : t >= s && (a = e);
    }
    if (n.initialized && a !== p) {
        if (!n.allowSlideNext && (u ? g > n.translate && g > n.minTranslate() : g < n.translate && g < n.minTranslate())) return !1;
        if (!n.allowSlidePrev && g > n.translate && g > n.maxTranslate() && (p || 0) !== a) return !1;
    }
    let w;
    a !== (c || 0) && s && n.emit("beforeSlideChangeStart"), n.updateProgress(g), w = a > p ? "next" : a < p ? "prev" : "reset";
    const S = n.virtual && n.params.virtual.enabled;
    if (!(S && r) && (u && -g === n.translate || !u && g === n.translate)) return n.updateActiveIndex(a), l.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== l.effect && n.setTranslate(g), "reset" !== w && (n.transitionStart(s, w), n.transitionEnd(s, w)), !1;
    if (l.cssMode) {
        const e = n.isHorizontal(), s = u ? g : -g;
        if (0 === t) S && (n.wrapperEl.style.scrollSnapType = "none", n._immediateVirtual = !0), S && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0 ? (n._cssModeVirtualInitialSet = !0, requestAnimationFrame(()=>{
            h[e ? "scrollLeft" : "scrollTop"] = s;
        })) : h[e ? "scrollLeft" : "scrollTop"] = s, S && requestAnimationFrame(()=>{
            n.wrapperEl.style.scrollSnapType = "", n._immediateVirtual = !1;
        });
        else {
            if (!n.support.smoothScroll) return (0, _utilsMinMjs.t)({
                swiper: n,
                targetPosition: s,
                side: e ? "left" : "top"
            }), !0;
            h.scrollTo({
                [e ? "left" : "top"]: s,
                behavior: "smooth"
            });
        }
        return !0;
    }
    const T = getBrowser().isSafari;
    return S && !r && T && n.isElement && n.virtual.update(!1, !1, a), n.setTransition(t), n.setTranslate(g), n.updateActiveIndex(a), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, i), n.transitionStart(s, w), 0 === t ? n.transitionEnd(s, w) : n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(e) {
        n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(s, w));
    }), n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd)), !0;
}
function slideToLoop(e, t, s, i) {
    if (void 0 === e && (e = 0), void 0 === s && (s = !0), "string" == typeof e) e = parseInt(e, 10);
    const r = this;
    if (r.destroyed) return;
    void 0 === t && (t = r.params.speed);
    const n = r.grid && r.params.grid && r.params.grid.rows > 1;
    let a = e;
    if (r.params.loop) {
        if (r.virtual && r.params.virtual.enabled) a += r.virtual.slidesBefore;
        else {
            let e;
            if (n) {
                const t = a * r.params.grid.rows;
                e = r.slides.find((e)=>1 * e.getAttribute("data-swiper-slide-index") === t).column;
            } else e = r.getSlideIndexByData(a);
            const t = n ? Math.ceil(r.slides.length / r.params.grid.rows) : r.slides.length, { centeredSlides: s } = r.params;
            let l = r.params.slidesPerView;
            "auto" === l ? l = r.slidesPerViewDynamic() : (l = Math.ceil(parseFloat(r.params.slidesPerView, 10)), s && l % 2 == 0 && (l += 1));
            let o = t - e < l;
            if (s && (o = o || e < Math.ceil(l / 2)), i && s && "auto" !== r.params.slidesPerView && !n && (o = !1), o) {
                const i = s ? e < r.activeIndex ? "prev" : "next" : e - r.activeIndex - 1 < r.params.slidesPerView ? "next" : "prev";
                r.loopFix({
                    direction: i,
                    slideTo: !0,
                    activeSlideIndex: "next" === i ? e + 1 : e - t + 1,
                    slideRealIndex: "next" === i ? r.realIndex : void 0
                });
            }
            if (n) {
                const e = a * r.params.grid.rows;
                a = r.slides.find((t)=>1 * t.getAttribute("data-swiper-slide-index") === e).column;
            } else a = r.getSlideIndexByData(a);
        }
    }
    return requestAnimationFrame(()=>{
        r.slideTo(a, t, s, i);
    }), r;
}
function slideNext(e, t, s) {
    void 0 === t && (t = !0);
    const i = this, { enabled: r, params: n, animating: a } = i;
    if (!r || i.destroyed) return i;
    void 0 === e && (e = i.params.speed);
    let l = n.slidesPerGroup;
    "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(i.slidesPerViewDynamic("current", !0), 1));
    const o = i.activeIndex < n.slidesPerGroupSkip ? 1 : l, d = i.virtual && n.virtual.enabled;
    if (n.loop) {
        if (a && !d && n.loopPreventsSliding) return !1;
        if (i.loopFix({
            direction: "next"
        }), i._clientLeft = i.wrapperEl.clientLeft, i.activeIndex === i.slides.length - 1 && n.cssMode) return requestAnimationFrame(()=>{
            i.slideTo(i.activeIndex + o, e, t, s);
        }), !0;
    }
    return n.rewind && i.isEnd ? i.slideTo(0, e, t, s) : i.slideTo(i.activeIndex + o, e, t, s);
}
function slidePrev(e, t, s) {
    void 0 === t && (t = !0);
    const i = this, { params: r, snapGrid: n, slidesGrid: a, rtlTranslate: l, enabled: o, animating: d } = i;
    if (!o || i.destroyed) return i;
    void 0 === e && (e = i.params.speed);
    const c = i.virtual && r.virtual.enabled;
    if (r.loop) {
        if (d && !c && r.loopPreventsSliding) return !1;
        i.loopFix({
            direction: "prev"
        }), i._clientLeft = i.wrapperEl.clientLeft;
    }
    function p(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
    }
    const u = p(l ? i.translate : -i.translate), h = n.map((e)=>p(e)), m = r.freeMode && r.freeMode.enabled;
    let f = n[h.indexOf(u) - 1];
    if (void 0 === f && (r.cssMode || m)) {
        let e;
        n.forEach((t, s)=>{
            u >= t && (e = s);
        }), void 0 !== e && (f = m ? n[e] : n[e > 0 ? e - 1 : e]);
    }
    let v = 0;
    if (void 0 !== f && (v = a.indexOf(f), v < 0 && (v = i.activeIndex - 1), "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (v = v - i.slidesPerViewDynamic("previous", !0) + 1, v = Math.max(v, 0))), r.rewind && i.isBeginning) {
        const r = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
        return i.slideTo(r, e, t, s);
    }
    return r.loop && 0 === i.activeIndex && r.cssMode ? (requestAnimationFrame(()=>{
        i.slideTo(v, e, t, s);
    }), !0) : i.slideTo(v, e, t, s);
}
function slideReset(e, t, s) {
    void 0 === t && (t = !0);
    const i = this;
    if (!i.destroyed) return void 0 === e && (e = i.params.speed), i.slideTo(i.activeIndex, e, t, s);
}
function slideToClosest(e, t, s, i) {
    void 0 === t && (t = !0), void 0 === i && (i = .5);
    const r = this;
    if (r.destroyed) return;
    void 0 === e && (e = r.params.speed);
    let n = r.activeIndex;
    const a = Math.min(r.params.slidesPerGroupSkip, n), l = a + Math.floor((n - a) / r.params.slidesPerGroup), o = r.rtlTranslate ? r.translate : -r.translate;
    if (o >= r.snapGrid[l]) {
        const e = r.snapGrid[l];
        o - e > (r.snapGrid[l + 1] - e) * i && (n += r.params.slidesPerGroup);
    } else {
        const e = r.snapGrid[l - 1];
        o - e <= (r.snapGrid[l] - e) * i && (n -= r.params.slidesPerGroup);
    }
    return n = Math.max(n, 0), n = Math.min(n, r.slidesGrid.length - 1), r.slideTo(n, e, t, s);
}
function slideToClickedSlide() {
    const e = this;
    if (e.destroyed) return;
    const { params: t, slidesEl: s } = e, i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
    let r, n = e.clickedIndex;
    const a = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
    if (t.loop) {
        if (e.animating) return;
        r = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? n < e.loopedSlides - i / 2 || n > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), n = e.getSlideIndex((0, _utilsMinMjs.e)(s, `${a}[data-swiper-slide-index="${r}"]`)[0]), (0, _utilsMinMjs.n)(()=>{
            e.slideTo(n);
        })) : e.slideTo(n) : n > e.slides.length - i ? (e.loopFix(), n = e.getSlideIndex((0, _utilsMinMjs.e)(s, `${a}[data-swiper-slide-index="${r}"]`)[0]), (0, _utilsMinMjs.n)(()=>{
            e.slideTo(n);
        })) : e.slideTo(n);
    } else e.slideTo(n);
}
var slide = {
    slideTo: slideTo,
    slideToLoop: slideToLoop,
    slideNext: slideNext,
    slidePrev: slidePrev,
    slideReset: slideReset,
    slideToClosest: slideToClosest,
    slideToClickedSlide: slideToClickedSlide
};
function loopCreate(e, t) {
    const s = this, { params: i, slidesEl: r } = s;
    if (!i.loop || s.virtual && s.params.virtual.enabled) return;
    const n = ()=>{
        (0, _utilsMinMjs.e)(r, `.${i.slideClass}, swiper-slide`).forEach((e, t)=>{
            e.setAttribute("data-swiper-slide-index", t);
        });
    }, a = s.grid && i.grid && i.grid.rows > 1, l = i.slidesPerGroup * (a ? i.grid.rows : 1), o = s.slides.length % l != 0, d = a && s.slides.length % i.grid.rows != 0, c = (e)=>{
        for(let t = 0; t < e; t += 1){
            const e = s.isElement ? (0, _utilsMinMjs.c)("swiper-slide", [
                i.slideBlankClass
            ]) : (0, _utilsMinMjs.c)("div", [
                i.slideClass,
                i.slideBlankClass
            ]);
            s.slidesEl.append(e);
        }
    };
    if (o) {
        if (i.loopAddBlankSlides) c(l - s.slides.length % l), s.recalcSlides(), s.updateSlides();
        else (0, _utilsMinMjs.u)("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        n();
    } else if (d) {
        if (i.loopAddBlankSlides) c(i.grid.rows - s.slides.length % i.grid.rows), s.recalcSlides(), s.updateSlides();
        else (0, _utilsMinMjs.u)("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        n();
    } else n();
    s.loopFix({
        slideRealIndex: e,
        direction: i.centeredSlides ? void 0 : "next",
        initial: t
    });
}
function loopFix(e) {
    let { slideRealIndex: t, slideTo: s = !0, direction: i, setTranslate: r, activeSlideIndex: n, initial: a, byController: l, byMousewheel: o } = void 0 === e ? {} : e;
    const d = this;
    if (!d.params.loop) return;
    d.emit("beforeLoopFix");
    const { slides: c, allowSlidePrev: p, allowSlideNext: u, slidesEl: h, params: m } = d, { centeredSlides: f, initialSlide: v } = m;
    if (d.allowSlidePrev = !0, d.allowSlideNext = !0, d.virtual && m.virtual.enabled) return s && (m.centeredSlides || 0 !== d.snapIndex ? m.centeredSlides && d.snapIndex < m.slidesPerView ? d.slideTo(d.virtual.slides.length + d.snapIndex, 0, !1, !0) : d.snapIndex === d.snapGrid.length - 1 && d.slideTo(d.virtual.slidesBefore, 0, !1, !0) : d.slideTo(d.virtual.slides.length, 0, !1, !0)), d.allowSlidePrev = p, d.allowSlideNext = u, void d.emit("loopFix");
    let g = m.slidesPerView;
    "auto" === g ? g = d.slidesPerViewDynamic() : (g = Math.ceil(parseFloat(m.slidesPerView, 10)), f && g % 2 == 0 && (g += 1));
    const w = m.slidesPerGroupAuto ? g : m.slidesPerGroup;
    let S = w;
    S % w != 0 && (S += w - S % w), S += m.loopAdditionalSlides, d.loopedSlides = S;
    const T = d.grid && m.grid && m.grid.rows > 1;
    c.length < g + S || "cards" === d.params.effect && c.length < g + 2 * S ? (0, _utilsMinMjs.u)("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : T && "row" === m.grid.fill && (0, _utilsMinMjs.u)("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const b = [], x = [], y = T ? Math.ceil(c.length / m.grid.rows) : c.length, E = a && y - v < g && !f;
    let C = E ? v : d.activeIndex;
    void 0 === n ? n = d.getSlideIndex(c.find((e)=>e.classList.contains(m.slideActiveClass))) : C = n;
    const M = "next" === i || !i, P = "prev" === i || !i;
    let k = 0, I = 0;
    const L = (T ? c[n].column : n) + (f && void 0 === r ? -g / 2 + .5 : 0);
    if (L < S) {
        k = Math.max(S - L, w);
        for(let e = 0; e < S - L; e += 1){
            const t = e - Math.floor(e / y) * y;
            if (T) {
                const e = y - t - 1;
                for(let t = c.length - 1; t >= 0; t -= 1)c[t].column === e && b.push(t);
            } else b.push(y - t - 1);
        }
    } else if (L + g > y - S) {
        I = Math.max(L - (y - 2 * S), w), E && (I = Math.max(I, g - y + v + 1));
        for(let e = 0; e < I; e += 1){
            const t = e - Math.floor(e / y) * y;
            T ? c.forEach((e, s)=>{
                e.column === t && x.push(s);
            }) : x.push(t);
        }
    }
    if (d.__preventObserver__ = !0, requestAnimationFrame(()=>{
        d.__preventObserver__ = !1;
    }), "cards" === d.params.effect && c.length < g + 2 * S && (x.includes(n) && x.splice(x.indexOf(n), 1), b.includes(n) && b.splice(b.indexOf(n), 1)), P && b.forEach((e)=>{
        c[e].swiperLoopMoveDOM = !0, h.prepend(c[e]), c[e].swiperLoopMoveDOM = !1;
    }), M && x.forEach((e)=>{
        c[e].swiperLoopMoveDOM = !0, h.append(c[e]), c[e].swiperLoopMoveDOM = !1;
    }), d.recalcSlides(), "auto" === m.slidesPerView ? d.updateSlides() : T && (b.length > 0 && P || x.length > 0 && M) && d.slides.forEach((e, t)=>{
        d.grid.updateSlide(t, e, d.slides);
    }), m.watchSlidesProgress && d.updateSlidesOffset(), s) {
        if (b.length > 0 && P) {
            if (void 0 === t) {
                const e = d.slidesGrid[C], t = d.slidesGrid[C + k] - e;
                o ? d.setTranslate(d.translate - t) : (d.slideTo(C + Math.ceil(k), 0, !1, !0), r && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - t, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - t));
            } else if (r) {
                const e = T ? b.length / m.grid.rows : b.length;
                d.slideTo(d.activeIndex + e, 0, !1, !0), d.touchEventsData.currentTranslate = d.translate;
            }
        } else if (x.length > 0 && M) {
            if (void 0 === t) {
                const e = d.slidesGrid[C], t = d.slidesGrid[C - I] - e;
                o ? d.setTranslate(d.translate - t) : (d.slideTo(C - I, 0, !1, !0), r && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - t, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - t));
            } else {
                const e = T ? x.length / m.grid.rows : x.length;
                d.slideTo(d.activeIndex - e, 0, !1, !0);
            }
        }
    }
    if (d.allowSlidePrev = p, d.allowSlideNext = u, d.controller && d.controller.control && !l) {
        const e = {
            slideRealIndex: t,
            direction: i,
            setTranslate: r,
            activeSlideIndex: n,
            byController: !0
        };
        Array.isArray(d.controller.control) ? d.controller.control.forEach((t)=>{
            !t.destroyed && t.params.loop && t.loopFix({
                ...e,
                slideTo: t.params.slidesPerView === m.slidesPerView && s
            });
        }) : d.controller.control instanceof d.constructor && d.controller.control.params.loop && d.controller.control.loopFix({
            ...e,
            slideTo: d.controller.control.params.slidesPerView === m.slidesPerView && s
        });
    }
    d.emit("loopFix");
}
function loopDestroy() {
    const e = this, { params: t, slidesEl: s } = e;
    if (!t.loop || !s || e.virtual && e.params.virtual.enabled) return;
    e.recalcSlides();
    const i = [];
    e.slides.forEach((e)=>{
        const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
        i[t] = e;
    }), e.slides.forEach((e)=>{
        e.removeAttribute("data-swiper-slide-index");
    }), i.forEach((e)=>{
        s.append(e);
    }), e.recalcSlides(), e.slideTo(e.realIndex, 0);
}
var loop = {
    loopCreate: loopCreate,
    loopFix: loopFix,
    loopDestroy: loopDestroy
};
function setGrabCursor(e) {
    const t = this;
    if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
    const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
    t.isElement && (t.__preventObserver__ = !0), s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(()=>{
        t.__preventObserver__ = !1;
    });
}
function unsetGrabCursor() {
    const e = this;
    e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(()=>{
        e.__preventObserver__ = !1;
    }));
}
var grabCursor = {
    setGrabCursor: setGrabCursor,
    unsetGrabCursor: unsetGrabCursor
};
function closestElement(e, t) {
    return void 0 === t && (t = this), function t(s) {
        if (!s || s === (0, _ssrWindowEsmMinMjs.g)() || s === (0, _ssrWindowEsmMinMjs.a)()) return null;
        s.assignedSlot && (s = s.assignedSlot);
        const i = s.closest(e);
        return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
    }(t);
}
function preventEdgeSwipe(e, t, s) {
    const i = (0, _ssrWindowEsmMinMjs.a)(), { params: r } = e, n = r.edgeSwipeDetection, a = r.edgeSwipeThreshold;
    return !n || !(s <= a || s >= i.innerWidth - a) || "prevent" === n && (t.preventDefault(), !0);
}
function onTouchStart(e) {
    const t = this, s = (0, _ssrWindowEsmMinMjs.g)();
    let i = e;
    i.originalEvent && (i = i.originalEvent);
    const r = t.touchEventsData;
    if ("pointerdown" === i.type) {
        if (null !== r.pointerId && r.pointerId !== i.pointerId) return;
        r.pointerId = i.pointerId;
    } else "touchstart" === i.type && 1 === i.targetTouches.length && (r.touchId = i.targetTouches[0].identifier);
    if ("touchstart" === i.type) return void preventEdgeSwipe(t, i, i.targetTouches[0].pageX);
    const { params: n, touches: a, enabled: l } = t;
    if (!l) return;
    if (!n.simulateTouch && "mouse" === i.pointerType) return;
    if (t.animating && n.preventInteractionOnTransition) return;
    !t.animating && n.cssMode && n.loop && t.loopFix();
    let o = i.target;
    if ("wrapper" === n.touchEventsTarget && !(0, _utilsMinMjs.v)(o, t.wrapperEl)) return;
    if ("which" in i && 3 === i.which) return;
    if ("button" in i && i.button > 0) return;
    if (r.isTouched && r.isMoved) return;
    const d = !!n.noSwipingClass && "" !== n.noSwipingClass, c = i.composedPath ? i.composedPath() : i.path;
    d && i.target && i.target.shadowRoot && c && (o = c[0]);
    const p = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`, u = !(!i.target || !i.target.shadowRoot);
    if (n.noSwiping && (u ? closestElement(p, o) : o.closest(p))) return void (t.allowClick = !0);
    if (n.swipeHandler && !o.closest(n.swipeHandler)) return;
    a.currentX = i.pageX, a.currentY = i.pageY;
    const h = a.currentX, m = a.currentY;
    if (!preventEdgeSwipe(t, i, h)) return;
    Object.assign(r, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
    }), a.startX = h, a.startY = m, r.touchStartTime = (0, _utilsMinMjs.d)(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, n.threshold > 0 && (r.allowThresholdMove = !1);
    let f = !0;
    o.matches(r.focusableElements) && (f = !1, "SELECT" === o.nodeName && (r.isTouched = !1)), s.activeElement && s.activeElement.matches(r.focusableElements) && s.activeElement !== o && ("mouse" === i.pointerType || "mouse" !== i.pointerType && !o.matches(r.focusableElements)) && s.activeElement.blur();
    const v = f && t.allowTouchMove && n.touchStartPreventDefault;
    !n.touchStartForcePreventDefault && !v || o.isContentEditable || i.preventDefault(), n.freeMode && n.freeMode.enabled && t.freeMode && t.animating && !n.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", i);
}
function onTouchMove(e) {
    const t = (0, _ssrWindowEsmMinMjs.g)(), s = this, i = s.touchEventsData, { params: r, touches: n, rtlTranslate: a, enabled: l } = s;
    if (!l) return;
    if (!r.simulateTouch && "mouse" === e.pointerType) return;
    let o, d = e;
    if (d.originalEvent && (d = d.originalEvent), "pointermove" === d.type) {
        if (null !== i.touchId) return;
        if (d.pointerId !== i.pointerId) return;
    }
    if ("touchmove" === d.type) {
        if (o = [
            ...d.changedTouches
        ].find((e)=>e.identifier === i.touchId), !o || o.identifier !== i.touchId) return;
    } else o = d;
    if (!i.isTouched) return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", d));
    const c = o.pageX, p = o.pageY;
    if (d.preventedByNestedSwiper) return n.startX = c, void (n.startY = p);
    if (!s.allowTouchMove) return d.target.matches(i.focusableElements) || (s.allowClick = !1), void (i.isTouched && (Object.assign(n, {
        startX: c,
        startY: p,
        currentX: c,
        currentY: p
    }), i.touchStartTime = (0, _utilsMinMjs.d)()));
    if (r.touchReleaseOnEdges && !r.loop) {
        if (s.isVertical()) {
            if (p < n.startY && s.translate <= s.maxTranslate() || p > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
        } else {
            if (a && (c > n.startX && -s.translate <= s.maxTranslate() || c < n.startX && -s.translate >= s.minTranslate())) return;
            if (!a && (c < n.startX && s.translate <= s.maxTranslate() || c > n.startX && s.translate >= s.minTranslate())) return;
        }
    }
    if (t.activeElement && t.activeElement.matches(i.focusableElements) && t.activeElement !== d.target && "mouse" !== d.pointerType && t.activeElement.blur(), t.activeElement && d.target === t.activeElement && d.target.matches(i.focusableElements)) return i.isMoved = !0, void (s.allowClick = !1);
    i.allowTouchCallbacks && s.emit("touchMove", d), n.previousX = n.currentX, n.previousY = n.currentY, n.currentX = c, n.currentY = p;
    const u = n.currentX - n.startX, h = n.currentY - n.startY;
    if (s.params.threshold && Math.sqrt(u ** 2 + h ** 2) < s.params.threshold) return;
    if (void 0 === i.isScrolling) {
        let e;
        s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : u * u + h * h >= 25 && (e = 180 * Math.atan2(Math.abs(h), Math.abs(u)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle);
    }
    if (i.isScrolling && s.emit("touchMoveOpposite", d), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling || "touchmove" === d.type && i.preventTouchMoveFromPointerMove) return void (i.isTouched = !1);
    if (!i.startMoving) return;
    s.allowClick = !1, !r.cssMode && d.cancelable && d.preventDefault(), r.touchMoveStopPropagation && !r.nested && d.stopPropagation();
    let m = s.isHorizontal() ? u : h, f = s.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
    r.oneWayMovement && (m = Math.abs(m) * (a ? 1 : -1), f = Math.abs(f) * (a ? 1 : -1)), n.diff = m, m *= r.touchRatio, a && (m = -m, f = -f);
    const v = s.touchesDirection;
    s.swipeDirection = m > 0 ? "prev" : "next", s.touchesDirection = f > 0 ? "prev" : "next";
    const g = s.params.loop && !r.cssMode, w = "next" === s.touchesDirection && s.allowSlideNext || "prev" === s.touchesDirection && s.allowSlidePrev;
    if (!i.isMoved) {
        if (g && w && s.loopFix({
            direction: s.swipeDirection
        }), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating) {
            const e = new window.CustomEvent("transitionend", {
                bubbles: !0,
                cancelable: !0,
                detail: {
                    bySwiperTouchMove: !0
                }
            });
            s.wrapperEl.dispatchEvent(e);
        }
        i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", d);
    }
    if ((new Date).getTime(), !1 !== r._loopSwapReset && i.isMoved && i.allowThresholdMove && v !== s.touchesDirection && g && w && Math.abs(m) >= 1) return Object.assign(n, {
        startX: c,
        startY: p,
        currentX: c,
        currentY: p,
        startTranslate: i.currentTranslate
    }), i.loopSwapReset = !0, void (i.startTranslate = i.currentTranslate);
    s.emit("sliderMove", d), i.isMoved = !0, i.currentTranslate = m + i.startTranslate;
    let S = !0, T = r.resistanceRatio;
    if (r.touchReleaseOnEdges && (T = 0), m > 0 ? (g && w && i.allowThresholdMove && i.currentTranslate > (r.centeredSlides ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1] - ("auto" !== r.slidesPerView && s.slides.length - r.slidesPerView >= 2 ? s.slidesSizesGrid[s.activeIndex + 1] + s.params.spaceBetween : 0) - s.params.spaceBetween : s.minTranslate()) && s.loopFix({
        direction: "prev",
        setTranslate: !0,
        activeSlideIndex: 0
    }), i.currentTranslate > s.minTranslate() && (S = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + m) ** T))) : m < 0 && (g && w && i.allowThresholdMove && i.currentTranslate < (r.centeredSlides ? s.maxTranslate() + s.slidesSizesGrid[s.slidesSizesGrid.length - 1] + s.params.spaceBetween + ("auto" !== r.slidesPerView && s.slides.length - r.slidesPerView >= 2 ? s.slidesSizesGrid[s.slidesSizesGrid.length - 1] + s.params.spaceBetween : 0) : s.maxTranslate()) && s.loopFix({
        direction: "next",
        setTranslate: !0,
        activeSlideIndex: s.slides.length - ("auto" === r.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
    }), i.currentTranslate < s.maxTranslate() && (S = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - m) ** T))), S && (d.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) {
        if (!(Math.abs(m) > r.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
        if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY);
    }
    r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), r.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate));
}
function onTouchEnd(e) {
    const t = this, s = t.touchEventsData;
    let i, r = e;
    r.originalEvent && (r = r.originalEvent);
    if ("touchend" === r.type || "touchcancel" === r.type) {
        if (i = [
            ...r.changedTouches
        ].find((e)=>e.identifier === s.touchId), !i || i.identifier !== s.touchId) return;
    } else {
        if (null !== s.touchId) return;
        if (r.pointerId !== s.pointerId) return;
        i = r;
    }
    if ([
        "pointercancel",
        "pointerout",
        "pointerleave",
        "contextmenu"
    ].includes(r.type)) {
        if (!([
            "pointercancel",
            "contextmenu"
        ].includes(r.type) && (t.browser.isSafari || t.browser.isWebView))) return;
    }
    s.pointerId = null, s.touchId = null;
    const { params: n, touches: a, rtlTranslate: l, slidesGrid: o, enabled: d } = t;
    if (!d) return;
    if (!n.simulateTouch && "mouse" === r.pointerType) return;
    if (s.allowTouchCallbacks && t.emit("touchEnd", r), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && n.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void (s.startMoving = !1);
    n.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
    const c = (0, _utilsMinMjs.d)(), p = c - s.touchStartTime;
    if (t.allowClick) {
        const e = r.path || r.composedPath && r.composedPath();
        t.updateClickedSlide(e && e[0] || r.target, e), t.emit("tap click", r), p < 300 && c - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", r);
    }
    if (s.lastClickTime = (0, _utilsMinMjs.d)(), (0, _utilsMinMjs.n)(()=>{
        t.destroyed || (t.allowClick = !0);
    }), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === a.diff && !s.loopSwapReset || s.currentTranslate === s.startTranslate && !s.loopSwapReset) return s.isTouched = !1, s.isMoved = !1, void (s.startMoving = !1);
    let u;
    if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, u = n.followFinger ? l ? t.translate : -t.translate : -s.currentTranslate, n.cssMode) return;
    if (n.freeMode && n.freeMode.enabled) return void t.freeMode.onTouchEnd({
        currentPos: u
    });
    const h = u >= -t.maxTranslate() && !t.params.loop;
    let m = 0, f = t.slidesSizesGrid[0];
    for(let e = 0; e < o.length; e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup){
        const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        void 0 !== o[e + t] ? (h || u >= o[e] && u < o[e + t]) && (m = e, f = o[e + t] - o[e]) : (h || u >= o[e]) && (m = e, f = o[o.length - 1] - o[o.length - 2]);
    }
    let v = null, g = null;
    n.rewind && (t.isBeginning ? g = n.virtual && n.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (v = 0));
    const w = (u - o[m]) / f, S = m < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
    if (p > n.longSwipesMs) {
        if (!n.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection && (w >= n.longSwipesRatio ? t.slideTo(n.rewind && t.isEnd ? v : m + S) : t.slideTo(m)), "prev" === t.swipeDirection && (w > 1 - n.longSwipesRatio ? t.slideTo(m + S) : null !== g && w < 0 && Math.abs(w) > n.longSwipesRatio ? t.slideTo(g) : t.slideTo(m));
    } else {
        if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation && (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl) ? r.target === t.navigation.nextEl ? t.slideTo(m + S) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(null !== v ? v : m + S), "prev" === t.swipeDirection && t.slideTo(null !== g ? g : m));
    }
}
function onResize() {
    const e = this, { params: t, el: s } = e;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: i, allowSlidePrev: r, snapGrid: n } = e, a = e.virtual && e.params.virtual.enabled;
    e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
    const l = a && t.loop;
    !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || l ? e.params.loop && !a ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(()=>{
        e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
    }, 500)), e.allowSlidePrev = r, e.allowSlideNext = i, e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
}
function onClick(e) {
    const t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
}
function onScroll() {
    const e = this, { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
    if (!i) return;
    let r;
    e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
    const n = e.maxTranslate() - e.minTranslate();
    r = 0 === n ? 0 : (e.translate - e.minTranslate()) / n, r !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
}
function onLoad(e) {
    const t = this;
    processLazyPreloader(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update();
}
function onDocumentTouchStart() {
    const e = this;
    e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
const events = (e, t)=>{
    const s = (0, _ssrWindowEsmMinMjs.g)(), { params: i, el: r, wrapperEl: n, device: a } = e, l = !!i.nested, o = "on" === t ? "addEventListener" : "removeEventListener", d = t;
    r && "string" != typeof r && (s[o]("touchstart", e.onDocumentTouchStart, {
        passive: !1,
        capture: l
    }), r[o]("touchstart", e.onTouchStart, {
        passive: !1
    }), r[o]("pointerdown", e.onTouchStart, {
        passive: !1
    }), s[o]("touchmove", e.onTouchMove, {
        passive: !1,
        capture: l
    }), s[o]("pointermove", e.onTouchMove, {
        passive: !1,
        capture: l
    }), s[o]("touchend", e.onTouchEnd, {
        passive: !0
    }), s[o]("pointerup", e.onTouchEnd, {
        passive: !0
    }), s[o]("pointercancel", e.onTouchEnd, {
        passive: !0
    }), s[o]("touchcancel", e.onTouchEnd, {
        passive: !0
    }), s[o]("pointerout", e.onTouchEnd, {
        passive: !0
    }), s[o]("pointerleave", e.onTouchEnd, {
        passive: !0
    }), s[o]("contextmenu", e.onTouchEnd, {
        passive: !0
    }), (i.preventClicks || i.preventClicksPropagation) && r[o]("click", e.onClick, !0), i.cssMode && n[o]("scroll", e.onScroll), i.updateOnWindowResize ? e[d](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, !0) : e[d]("observerUpdate", onResize, !0), r[o]("load", e.onLoad, {
        capture: !0
    }));
};
function attachEvents() {
    const e = this, { params: t } = e;
    e.onTouchStart = onTouchStart.bind(e), e.onTouchMove = onTouchMove.bind(e), e.onTouchEnd = onTouchEnd.bind(e), e.onDocumentTouchStart = onDocumentTouchStart.bind(e), t.cssMode && (e.onScroll = onScroll.bind(e)), e.onClick = onClick.bind(e), e.onLoad = onLoad.bind(e), events(e, "on");
}
function detachEvents() {
    events(this, "off");
}
var events$1 = {
    attachEvents: attachEvents,
    detachEvents: detachEvents
};
const isGridEnabled = (e, t)=>e.grid && t.grid && t.grid.rows > 1;
function setBreakpoint() {
    const e = this, { realIndex: t, initialized: s, params: i, el: r } = e, n = i.breakpoints;
    if (!n || n && 0 === Object.keys(n).length) return;
    const a = (0, _ssrWindowEsmMinMjs.g)(), l = "window" !== i.breakpointsBase && i.breakpointsBase ? "container" : i.breakpointsBase, o = [
        "window",
        "container"
    ].includes(i.breakpointsBase) || !i.breakpointsBase ? e.el : a.querySelector(i.breakpointsBase), d = e.getBreakpoint(n, l, o);
    if (!d || e.currentBreakpoint === d) return;
    const c = (d in n ? n[d] : void 0) || e.originalParams, p = isGridEnabled(e, i), u = isGridEnabled(e, c), h = e.params.grabCursor, m = c.grabCursor, f = i.enabled;
    p && !u ? (r.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !p && u && (r.classList.add(`${i.containerModifierClass}grid`), (c.grid.fill && "column" === c.grid.fill || !c.grid.fill && "column" === i.grid.fill) && r.classList.add(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), h && !m ? e.unsetGrabCursor() : !h && m && e.setGrabCursor(), [
        "navigation",
        "pagination",
        "scrollbar"
    ].forEach((t)=>{
        if (void 0 === c[t]) return;
        const s = i[t] && i[t].enabled, r = c[t] && c[t].enabled;
        s && !r && e[t].disable(), !s && r && e[t].enable();
    });
    const v = c.direction && c.direction !== i.direction, g = i.loop && (c.slidesPerView !== i.slidesPerView || v), w = i.loop;
    v && s && e.changeDirection(), (0, _utilsMinMjs.w)(e.params, c);
    const S = e.params.enabled, T = e.params.loop;
    Object.assign(e, {
        allowTouchMove: e.params.allowTouchMove,
        allowSlideNext: e.params.allowSlideNext,
        allowSlidePrev: e.params.allowSlidePrev
    }), f && !S ? e.disable() : !f && S && e.enable(), e.currentBreakpoint = d, e.emit("_beforeBreakpoint", c), s && (g ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !w && T ? (e.loopCreate(t), e.updateSlides()) : w && !T && e.loopDestroy()), e.emit("breakpoint", c);
}
function getBreakpoint(e, t, s) {
    if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
    let i = !1;
    const r = (0, _ssrWindowEsmMinMjs.a)(), n = "window" === t ? r.innerHeight : s.clientHeight, a = Object.keys(e).map((e)=>{
        if ("string" == typeof e && 0 === e.indexOf("@")) {
            const t = parseFloat(e.substr(1));
            return {
                value: n * t,
                point: e
            };
        }
        return {
            value: e,
            point: e
        };
    });
    a.sort((e, t)=>parseInt(e.value, 10) - parseInt(t.value, 10));
    for(let e = 0; e < a.length; e += 1){
        const { point: n, value: l } = a[e];
        "window" === t ? r.matchMedia(`(min-width: ${l}px)`).matches && (i = n) : l <= s.clientWidth && (i = n);
    }
    return i || "max";
}
var breakpoints = {
    setBreakpoint: setBreakpoint,
    getBreakpoint: getBreakpoint
};
function prepareClasses(e, t) {
    const s = [];
    return e.forEach((e)=>{
        "object" == typeof e ? Object.keys(e).forEach((i)=>{
            e[i] && s.push(t + i);
        }) : "string" == typeof e && s.push(t + e);
    }), s;
}
function addClasses() {
    const e = this, { classNames: t, params: s, rtl: i, el: r, device: n } = e, a = prepareClasses([
        "initialized",
        s.direction,
        {
            "free-mode": e.params.freeMode && s.freeMode.enabled
        },
        {
            autoheight: s.autoHeight
        },
        {
            rtl: i
        },
        {
            grid: s.grid && s.grid.rows > 1
        },
        {
            "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
        },
        {
            android: n.android
        },
        {
            ios: n.ios
        },
        {
            "css-mode": s.cssMode
        },
        {
            centered: s.cssMode && s.centeredSlides
        },
        {
            "watch-progress": s.watchSlidesProgress
        }
    ], s.containerModifierClass);
    t.push(...a), r.classList.add(...t), e.emitContainerClasses();
}
function removeClasses() {
    const { el: e, classNames: t } = this;
    e && "string" != typeof e && (e.classList.remove(...t), this.emitContainerClasses());
}
var classes = {
    addClasses: addClasses,
    removeClasses: removeClasses
};
function checkOverflow() {
    const e = this, { isLocked: t, params: s } = e, { slidesOffsetBefore: i } = s;
    if (i) {
        const t = e.slides.length - 1, s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
        e.isLocked = e.size > s;
    } else e.isLocked = 1 === e.snapGrid.length;
    !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var checkOverflow$1 = {
    checkOverflow: checkOverflow
}, defaults = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1
};
function moduleExtendParams(e, t) {
    return function(s) {
        void 0 === s && (s = {});
        const i = Object.keys(s)[0], r = s[i];
        "object" == typeof r && null !== r ? (!0 === e[i] && (e[i] = {
            enabled: !0
        }), "navigation" === i && e[i] && e[i].enabled && !e[i].prevEl && !e[i].nextEl && (e[i].auto = !0), [
            "pagination",
            "scrollbar"
        ].indexOf(i) >= 0 && e[i] && e[i].enabled && !e[i].el && (e[i].auto = !0), i in e && "enabled" in r ? ("object" != typeof e[i] || "enabled" in e[i] || (e[i].enabled = !0), e[i] || (e[i] = {
            enabled: !1
        }), (0, _utilsMinMjs.w)(t, s)) : (0, _utilsMinMjs.w)(t, s)) : (0, _utilsMinMjs.w)(t, s);
    };
}
const prototypes = {
    eventsEmitter: eventsEmitter,
    update: update,
    translate: translate,
    transition: transition,
    slide: slide,
    loop: loop,
    grabCursor: grabCursor,
    events: events$1,
    breakpoints: breakpoints,
    checkOverflow: checkOverflow$1,
    classes: classes
}, extendedDefaults = {};
class Swiper {
    constructor(){
        let e, t;
        for(var s = arguments.length, i = new Array(s), r = 0; r < s; r++)i[r] = arguments[r];
        1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? t = i[0] : [e, t] = i, t || (t = {}), t = (0, _utilsMinMjs.w)({}, t), e && !t.el && (t.el = e);
        const n = (0, _ssrWindowEsmMinMjs.g)();
        if (t.el && "string" == typeof t.el && n.querySelectorAll(t.el).length > 1) {
            const e = [];
            return n.querySelectorAll(t.el).forEach((s)=>{
                const i = (0, _utilsMinMjs.w)({}, t, {
                    el: s
                });
                e.push(new Swiper(i));
            }), e;
        }
        const a = this;
        a.__swiper__ = !0, a.support = getSupport(), a.device = getDevice({
            userAgent: t.userAgent
        }), a.browser = getBrowser(), a.eventsListeners = {}, a.eventsAnyListeners = [], a.modules = [
            ...a.__modules__
        ], t.modules && Array.isArray(t.modules) && a.modules.push(...t.modules);
        const l = {};
        a.modules.forEach((e)=>{
            e({
                params: t,
                swiper: a,
                extendParams: moduleExtendParams(t, l),
                on: a.on.bind(a),
                once: a.once.bind(a),
                off: a.off.bind(a),
                emit: a.emit.bind(a)
            });
        });
        const o = (0, _utilsMinMjs.w)({}, defaults, l);
        return a.params = (0, _utilsMinMjs.w)({}, o, extendedDefaults, t), a.originalParams = (0, _utilsMinMjs.w)({}, a.params), a.passedParams = (0, _utilsMinMjs.w)({}, t), a.params && a.params.on && Object.keys(a.params.on).forEach((e)=>{
            a.on(e, a.params.on[e]);
        }), a.params && a.params.onAny && a.onAny(a.params.onAny), Object.assign(a, {
            enabled: a.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: ()=>"horizontal" === a.params.direction,
            isVertical: ()=>"vertical" === a.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment () {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
            },
            allowSlideNext: a.params.allowSlideNext,
            allowSlidePrev: a.params.allowSlidePrev,
            touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: a.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null
            },
            allowClick: !0,
            allowTouchMove: a.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
        }), a.emit("_swiper"), a.params.init && a.init(), a;
    }
    getDirectionLabel(e) {
        return this.isHorizontal() ? e : ({
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        })[e];
    }
    getSlideIndex(e) {
        const { slidesEl: t, params: s } = this, i = (0, _utilsMinMjs.e)(t, `.${s.slideClass}, swiper-slide`), r = (0, _utilsMinMjs.h)(i[0]);
        return (0, _utilsMinMjs.h)(e) - r;
    }
    getSlideIndexByData(e) {
        return this.getSlideIndex(this.slides.find((t)=>1 * t.getAttribute("data-swiper-slide-index") === e));
    }
    recalcSlides() {
        const { slidesEl: e, params: t } = this;
        this.slides = (0, _utilsMinMjs.e)(e, `.${t.slideClass}, swiper-slide`);
    }
    enable() {
        const e = this;
        e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
    }
    disable() {
        const e = this;
        e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
    }
    setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const i = s.minTranslate(), r = (s.maxTranslate() - i) * e + i;
        s.translateTo(r, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses();
    }
    emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className.split(" ").filter((t)=>0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
        e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
        const t = this;
        return t.destroyed ? "" : e.className.split(" ").filter((e)=>0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ");
    }
    emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.forEach((s)=>{
            const i = e.getSlideClasses(s);
            t.push({
                slideEl: s,
                classNames: i
            }), e.emit("_slideClass", s, i);
        }), e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        const { params: s, slides: i, slidesGrid: r, slidesSizesGrid: n, size: a, activeIndex: l } = this;
        let o = 1;
        if ("number" == typeof s.slidesPerView) return s.slidesPerView;
        if (s.centeredSlides) {
            let e, t = i[l] ? Math.ceil(i[l].swiperSlideSize) : 0;
            for(let s = l + 1; s < i.length; s += 1)i[s] && !e && (t += Math.ceil(i[s].swiperSlideSize), o += 1, t > a && (e = !0));
            for(let s = l - 1; s >= 0; s -= 1)i[s] && !e && (t += i[s].swiperSlideSize, o += 1, t > a && (e = !0));
        } else if ("current" === e) for(let e = l + 1; e < i.length; e += 1)(t ? r[e] + n[e] - r[l] < a : r[e] - r[l] < a) && (o += 1);
        else for(let e = l - 1; e >= 0; e -= 1)r[l] - r[e] < a && (o += 1);
        return o;
    }
    update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: s } = e;
        function i() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate, s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let r;
        if (s.breakpoints && e.setBreakpoint(), [
            ...e.el.querySelectorAll('[loading="lazy"]')
        ].forEach((t)=>{
            t.complete && processLazyPreloader(e, t);
        }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), s.freeMode && s.freeMode.enabled && !s.cssMode) i(), s.autoHeight && e.updateAutoHeight();
        else {
            if (("auto" === s.slidesPerView || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
                const t = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
                r = e.slideTo(t.length - 1, 0, !1, !0);
            } else r = e.slideTo(e.activeIndex, 0, !1, !0);
            r || i();
        }
        s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
    }
    changeDirection(e, t) {
        void 0 === t && (t = !0);
        const s = this, i = s.params.direction;
        return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (s.el.classList.remove(`${s.params.containerModifierClass}${i}`), s.el.classList.add(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach((t)=>{
            "vertical" === e ? t.style.width = "" : t.style.height = "";
        }), s.emit("changeDirection"), t && s.update()), s;
    }
    changeLanguageDirection(e) {
        const t = this;
        t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update());
    }
    mount(e) {
        const t = this;
        if (t.mounted) return !0;
        let s = e || t.params.el;
        if ("string" == typeof s && (s = document.querySelector(s)), !s) return !1;
        s.swiper = t, s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
        const i = ()=>`.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let r = (()=>{
            if (s && s.shadowRoot && s.shadowRoot.querySelector) return s.shadowRoot.querySelector(i());
            return (0, _utilsMinMjs.e)(s, i())[0];
        })();
        return !r && t.params.createElements && (r = (0, _utilsMinMjs.c)("div", t.params.wrapperClass), s.append(r), (0, _utilsMinMjs.e)(s, `.${t.params.slideClass}`).forEach((e)=>{
            r.append(e);
        })), Object.assign(t, {
            el: s,
            wrapperEl: r,
            slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : r,
            hostEl: t.isElement ? s.parentNode.host : s,
            mounted: !0,
            rtl: "rtl" === s.dir.toLowerCase() || "rtl" === (0, _utilsMinMjs.p)(s, "direction"),
            rtlTranslate: "horizontal" === t.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === (0, _utilsMinMjs.p)(s, "direction")),
            wrongRTL: "-webkit-box" === (0, _utilsMinMjs.p)(r, "display")
        }), !0;
    }
    init(e) {
        const t = this;
        if (t.initialized) return t;
        if (!1 === t.mount(e)) return t;
        t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(void 0, !0), t.attachEvents();
        const s = [
            ...t.el.querySelectorAll('[loading="lazy"]')
        ];
        return t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), s.forEach((e)=>{
            e.complete ? processLazyPreloader(t, e) : e.addEventListener("load", (e)=>{
                processLazyPreloader(t, e.target);
            });
        }), preload(t), t.initialized = !0, preload(t), t.emit("init"), t.emit("afterInit"), t;
    }
    destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        const s = this, { params: i, el: r, wrapperEl: n, slides: a } = s;
        return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), i.loop && s.loopDestroy(), t && (s.removeClasses(), r && "string" != typeof r && r.removeAttribute("style"), n && n.removeAttribute("style"), a && a.length && a.forEach((e)=>{
            e.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index");
        })), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e)=>{
            s.off(e);
        }), !1 !== e && (s.el && "string" != typeof s.el && (s.el.swiper = null), (0, _utilsMinMjs.x)(s)), s.destroyed = !0), null;
    }
    static extendDefaults(e) {
        (0, _utilsMinMjs.w)(extendedDefaults, e);
    }
    static get extendedDefaults() {
        return extendedDefaults;
    }
    static get defaults() {
        return defaults;
    }
    static installModule(e) {
        Swiper.prototype.__modules__ || (Swiper.prototype.__modules__ = []);
        const t = Swiper.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
        return Array.isArray(e) ? (e.forEach((e)=>Swiper.installModule(e)), Swiper) : (Swiper.installModule(e), Swiper);
    }
}
Object.keys(prototypes).forEach((e)=>{
    Object.keys(prototypes[e]).forEach((t)=>{
        Swiper.prototype[t] = prototypes[e][t];
    });
}), Swiper.use([
    Resize,
    Observer
]);

},{"./ssr-window.esm.min.mjs":"iD2WK","./utils.min.mjs":"9TwJM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iD2WK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "a", ()=>getWindow);
parcelHelpers.export(exports, "g", ()=>getDocument);
function isObject(e) {
    return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object;
}
function extend(e, t) {
    void 0 === e && (e = {}), void 0 === t && (t = {});
    const n = [
        "__proto__",
        "constructor",
        "prototype"
    ];
    Object.keys(t).filter((e)=>n.indexOf(e) < 0).forEach((n)=>{
        void 0 === e[n] ? e[n] = t[n] : isObject(t[n]) && isObject(e[n]) && Object.keys(t[n]).length > 0 && extend(e[n], t[n]);
    });
}
const ssrDocument = {
    body: {},
    addEventListener () {},
    removeEventListener () {},
    activeElement: {
        blur () {},
        nodeName: ""
    },
    querySelector: ()=>null,
    querySelectorAll: ()=>[],
    getElementById: ()=>null,
    createEvent: ()=>({
            initEvent () {}
        }),
    createElement: ()=>({
            children: [],
            childNodes: [],
            style: {},
            setAttribute () {},
            getElementsByTagName: ()=>[]
        }),
    createElementNS: ()=>({}),
    importNode: ()=>null,
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};
function getDocument() {
    const e = "undefined" != typeof document ? document : {};
    return extend(e, ssrDocument), e;
}
const ssrWindow = {
    document: ssrDocument,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState () {},
        pushState () {},
        go () {},
        back () {}
    },
    CustomEvent: function() {
        return this;
    },
    addEventListener () {},
    removeEventListener () {},
    getComputedStyle: ()=>({
            getPropertyValue: ()=>""
        }),
    Image () {},
    Date () {},
    screen: {},
    setTimeout () {},
    clearTimeout () {},
    matchMedia: ()=>({}),
    requestAnimationFrame: (e)=>"undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame (e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
    }
};
function getWindow() {
    const e = "undefined" != typeof window ? window : {};
    return extend(e, ssrWindow), e;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9TwJM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "a", ()=>elementParents);
parcelHelpers.export(exports, "b", ()=>elementOffset);
parcelHelpers.export(exports, "c", ()=>createElement);
parcelHelpers.export(exports, "d", ()=>now);
parcelHelpers.export(exports, "e", ()=>elementChildren);
parcelHelpers.export(exports, "f", ()=>elementOuterSize);
parcelHelpers.export(exports, "g", ()=>getSlideTransformEl);
parcelHelpers.export(exports, "h", ()=>elementIndex);
parcelHelpers.export(exports, "i", ()=>classesToTokens);
parcelHelpers.export(exports, "j", ()=>getTranslate);
parcelHelpers.export(exports, "k", ()=>elementTransitionEnd);
parcelHelpers.export(exports, "l", ()=>isObject);
parcelHelpers.export(exports, "m", ()=>makeElementsArray);
parcelHelpers.export(exports, "n", ()=>nextTick);
parcelHelpers.export(exports, "o", ()=>getRotateFix);
parcelHelpers.export(exports, "p", ()=>elementStyle);
parcelHelpers.export(exports, "q", ()=>elementNextAll);
parcelHelpers.export(exports, "r", ()=>elementPrevAll);
parcelHelpers.export(exports, "s", ()=>setCSSProperty);
parcelHelpers.export(exports, "t", ()=>animateCSSModeScroll);
parcelHelpers.export(exports, "u", ()=>showWarning);
parcelHelpers.export(exports, "v", ()=>elementIsChildOf);
parcelHelpers.export(exports, "w", ()=>extend);
parcelHelpers.export(exports, "x", ()=>deleteProps);
var _ssrWindowEsmMinMjs = require("./ssr-window.esm.min.mjs");
function classesToTokens(e) {
    return void 0 === e && (e = ""), e.trim().split(" ").filter((e)=>!!e.trim());
}
function deleteProps(e) {
    const t = e;
    Object.keys(t).forEach((e)=>{
        try {
            t[e] = null;
        } catch (e) {}
        try {
            delete t[e];
        } catch (e) {}
    });
}
function nextTick(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
}
function now() {
    return Date.now();
}
function getComputedStyle(e) {
    const t = (0, _ssrWindowEsmMinMjs.a)();
    let n;
    return t.getComputedStyle && (n = t.getComputedStyle(e, null)), !n && e.currentStyle && (n = e.currentStyle), n || (n = e.style), n;
}
function getTranslate(e, t) {
    void 0 === t && (t = "x");
    const n = (0, _ssrWindowEsmMinMjs.a)();
    let o, r, s;
    const l = getComputedStyle(e);
    return n.WebKitCSSMatrix ? (r = l.transform || l.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map((e)=>e.replace(",", ".")).join(", ")), s = new n.WebKitCSSMatrix("none" === r ? "" : r)) : (s = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), o = s.toString().split(",")), "x" === t && (r = n.WebKitCSSMatrix ? s.m41 : 16 === o.length ? parseFloat(o[12]) : parseFloat(o[4])), "y" === t && (r = n.WebKitCSSMatrix ? s.m42 : 16 === o.length ? parseFloat(o[13]) : parseFloat(o[5])), r || 0;
}
function isObject(e) {
    return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
}
function isNode(e) {
    return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType);
}
function extend() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = [
        "__proto__",
        "constructor",
        "prototype"
    ];
    for(let n = 1; n < arguments.length; n += 1){
        const o = n < 0 || arguments.length <= n ? void 0 : arguments[n];
        if (null != o && !isNode(o)) {
            const n = Object.keys(Object(o)).filter((e)=>t.indexOf(e) < 0);
            for(let t = 0, r = n.length; t < r; t += 1){
                const r = n[t], s = Object.getOwnPropertyDescriptor(o, r);
                void 0 !== s && s.enumerable && (isObject(e[r]) && isObject(o[r]) ? o[r].__swiper__ ? e[r] = o[r] : extend(e[r], o[r]) : !isObject(e[r]) && isObject(o[r]) ? (e[r] = {}, o[r].__swiper__ ? e[r] = o[r] : extend(e[r], o[r])) : e[r] = o[r]);
            }
        }
    }
    return e;
}
function setCSSProperty(e, t, n) {
    e.style.setProperty(t, n);
}
function animateCSSModeScroll(e) {
    let { swiper: t, targetPosition: n, side: o } = e;
    const r = (0, _ssrWindowEsmMinMjs.a)(), s = -t.translate;
    let l, i = null;
    const a = t.params.speed;
    t.wrapperEl.style.scrollSnapType = "none", r.cancelAnimationFrame(t.cssModeFrameID);
    const c = n > s ? "next" : "prev", m = (e, t)=>"next" === c && e >= t || "prev" === c && e <= t, u = ()=>{
        l = (new Date).getTime(), null === i && (i = l);
        const e = Math.max(Math.min((l - i) / a, 1), 0), c = .5 - Math.cos(e * Math.PI) / 2;
        let d = s + c * (n - s);
        if (m(d, n) && (d = n), t.wrapperEl.scrollTo({
            [o]: d
        }), m(d, n)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout(()=>{
            t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                [o]: d
            });
        }), void r.cancelAnimationFrame(t.cssModeFrameID);
        t.cssModeFrameID = r.requestAnimationFrame(u);
    };
    u();
}
function getSlideTransformEl(e) {
    return e.querySelector(".swiper-slide-transform") || e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform") || e;
}
function elementChildren(e, t) {
    void 0 === t && (t = "");
    const n = (0, _ssrWindowEsmMinMjs.a)(), o = [
        ...e.children
    ];
    return n.HTMLSlotElement && e instanceof HTMLSlotElement && o.push(...e.assignedElements()), t ? o.filter((e)=>e.matches(t)) : o;
}
function elementIsChildOfSlot(e, t) {
    const n = [
        t
    ];
    for(; n.length > 0;){
        const t = n.shift();
        if (e === t) return !0;
        n.push(...t.children, ...t.shadowRoot ? t.shadowRoot.children : [], ...t.assignedElements ? t.assignedElements() : []);
    }
}
function elementIsChildOf(e, t) {
    const n = (0, _ssrWindowEsmMinMjs.a)();
    let o = t.contains(e);
    if (!o && n.HTMLSlotElement && t instanceof HTMLSlotElement) o = [
        ...t.assignedElements()
    ].includes(e), o || (o = elementIsChildOfSlot(e, t));
    return o;
}
function showWarning(e) {
    try {
        return void console.warn(e);
    } catch (e) {}
}
function createElement(e, t) {
    void 0 === t && (t = []);
    const n = document.createElement(e);
    return n.classList.add(...Array.isArray(t) ? t : classesToTokens(t)), n;
}
function elementOffset(e) {
    const t = (0, _ssrWindowEsmMinMjs.a)(), n = (0, _ssrWindowEsmMinMjs.g)(), o = e.getBoundingClientRect(), r = n.body, s = e.clientTop || r.clientTop || 0, l = e.clientLeft || r.clientLeft || 0, i = e === t ? t.scrollY : e.scrollTop, a = e === t ? t.scrollX : e.scrollLeft;
    return {
        top: o.top + i - s,
        left: o.left + a - l
    };
}
function elementPrevAll(e, t) {
    const n = [];
    for(; e.previousElementSibling;){
        const o = e.previousElementSibling;
        t ? o.matches(t) && n.push(o) : n.push(o), e = o;
    }
    return n;
}
function elementNextAll(e, t) {
    const n = [];
    for(; e.nextElementSibling;){
        const o = e.nextElementSibling;
        t ? o.matches(t) && n.push(o) : n.push(o), e = o;
    }
    return n;
}
function elementStyle(e, t) {
    return (0, _ssrWindowEsmMinMjs.a)().getComputedStyle(e, null).getPropertyValue(t);
}
function elementIndex(e) {
    let t, n = e;
    if (n) {
        for(t = 0; null !== (n = n.previousSibling);)1 === n.nodeType && (t += 1);
        return t;
    }
}
function elementParents(e, t) {
    const n = [];
    let o = e.parentElement;
    for(; o;)t ? o.matches(t) && n.push(o) : n.push(o), o = o.parentElement;
    return n;
}
function elementTransitionEnd(e, t) {
    t && e.addEventListener("transitionend", function n(o) {
        o.target === e && (t.call(e, o), e.removeEventListener("transitionend", n));
    });
}
function elementOuterSize(e, t, n) {
    const o = (0, _ssrWindowEsmMinMjs.a)();
    return n ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(o.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(o.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth;
}
function makeElementsArray(e) {
    return (Array.isArray(e) ? e : [
        e
    ]).filter((e)=>!!e);
}
function getRotateFix(e) {
    return (t)=>Math.abs(t) > 0 && e.browser && e.browser.need3dFix && Math.abs(t) % 90 == 0 ? t + .001 : t;
}

},{"./ssr-window.esm.min.mjs":"iD2WK","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dQQKS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Virtual);
var _ssrWindowEsmMinMjs = require("../shared/ssr-window.esm.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function Virtual(e) {
    let s, { swiper: t, extendParams: i, on: r, emit: a } = e;
    i({
        virtual: {
            enabled: !1,
            slides: [],
            cache: !0,
            renderSlide: null,
            renderExternal: null,
            renderExternalUpdate: !0,
            addSlidesBefore: 0,
            addSlidesAfter: 0
        }
    });
    const l = (0, _ssrWindowEsmMinMjs.g)();
    t.virtual = {
        cache: {},
        from: void 0,
        to: void 0,
        slides: [],
        offset: 0,
        slidesGrid: []
    };
    const d = l.createElement("div");
    function n(e, s) {
        const i = t.params.virtual;
        if (i.cache && t.virtual.cache[s]) return t.virtual.cache[s];
        let r;
        return i.renderSlide ? (r = i.renderSlide.call(t, e, s), "string" == typeof r && (d.innerHTML = r, r = d.children[0])) : r = t.isElement ? (0, _utilsMinMjs.c)("swiper-slide") : (0, _utilsMinMjs.c)("div", t.params.slideClass), r.setAttribute("data-swiper-slide-index", s), i.renderSlide || (r.innerHTML = e), i.cache && (t.virtual.cache[s] = r), r;
    }
    function c(e, s, i) {
        const { slidesPerView: r, slidesPerGroup: l, centeredSlides: d, loop: c, initialSlide: o } = t.params;
        if (s && !c && o > 0) return;
        const { addSlidesBefore: u, addSlidesAfter: p } = t.params.virtual, { from: h, to: f, slides: v, slidesGrid: m, offset: g } = t.virtual;
        t.params.cssMode || t.updateActiveIndex();
        const E = void 0 === i ? t.activeIndex || 0 : i;
        let x, w, S;
        x = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", d ? (w = Math.floor(r / 2) + l + p, S = Math.floor(r / 2) + l + u) : (w = r + (l - 1) + p, S = (c ? r : l) + u);
        let b = E - S, A = E + w;
        c || (b = Math.max(b, 0), A = Math.min(A, v.length - 1));
        let M = (t.slidesGrid[b] || 0) - (t.slidesGrid[0] || 0);
        function y() {
            t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), a("virtualUpdate");
        }
        if (c && E >= S ? (b -= S, d || (M += t.slidesGrid[0])) : c && E < S && (b = -S, d && (M += t.slidesGrid[0])), Object.assign(t.virtual, {
            from: b,
            to: A,
            offset: M,
            slidesGrid: t.slidesGrid,
            slidesBefore: S,
            slidesAfter: w
        }), h === b && f === A && !e) return t.slidesGrid !== m && M !== g && t.slides.forEach((e)=>{
            e.style[x] = M - Math.abs(t.cssOverflowAdjustment()) + "px";
        }), t.updateProgress(), void a("virtualUpdate");
        if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
            offset: M,
            from: b,
            to: A,
            slides: function() {
                const e = [];
                for(let s = b; s <= A; s += 1)e.push(v[s]);
                return e;
            }()
        }), void (t.params.virtual.renderExternalUpdate ? y() : a("virtualUpdate"));
        const P = [], j = [], C = (e)=>{
            let s = e;
            return e < 0 ? s = v.length + e : s >= v.length && (s -= v.length), s;
        };
        if (e) t.slides.filter((e)=>e.matches(`.${t.params.slideClass}, swiper-slide`)).forEach((e)=>{
            e.remove();
        });
        else for(let e = h; e <= f; e += 1)if (e < b || e > A) {
            const s = C(e);
            t.slides.filter((e)=>e.matches(`.${t.params.slideClass}[data-swiper-slide-index="${s}"], swiper-slide[data-swiper-slide-index="${s}"]`)).forEach((e)=>{
                e.remove();
            });
        }
        const G = c ? -v.length : 0, T = c ? 2 * v.length : v.length;
        for(let s = G; s < T; s += 1)if (s >= b && s <= A) {
            const t = C(s);
            void 0 === f || e ? j.push(t) : (s > f && j.push(t), s < h && P.push(t));
        }
        if (j.forEach((e)=>{
            t.slidesEl.append(n(v[e], e));
        }), c) for(let e = P.length - 1; e >= 0; e -= 1){
            const s = P[e];
            t.slidesEl.prepend(n(v[s], s));
        }
        else P.sort((e, s)=>s - e), P.forEach((e)=>{
            t.slidesEl.prepend(n(v[e], e));
        });
        (0, _utilsMinMjs.e)(t.slidesEl, ".swiper-slide, swiper-slide").forEach((e)=>{
            e.style[x] = M - Math.abs(t.cssOverflowAdjustment()) + "px";
        }), y();
    }
    r("beforeInit", ()=>{
        if (!t.params.virtual.enabled) return;
        let e;
        if (void 0 === t.passedParams.virtual.slides) {
            const s = [
                ...t.slidesEl.children
            ].filter((e)=>e.matches(`.${t.params.slideClass}, swiper-slide`));
            s && s.length && (t.virtual.slides = [
                ...s
            ], e = !0, s.forEach((e, s)=>{
                e.setAttribute("data-swiper-slide-index", s), t.virtual.cache[s] = e, e.remove();
            }));
        }
        e || (t.virtual.slides = t.params.virtual.slides), t.classNames.push(`${t.params.containerModifierClass}virtual`), t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0, c(!1, !0);
    }), r("setTranslate", ()=>{
        t.params.virtual.enabled && (t.params.cssMode && !t._immediateVirtual ? (clearTimeout(s), s = setTimeout(()=>{
            c();
        }, 100)) : c());
    }), r("init update resize", ()=>{
        t.params.virtual.enabled && t.params.cssMode && (0, _utilsMinMjs.s)(t.wrapperEl, "--swiper-virtual-size", `${t.virtualSize}px`);
    }), Object.assign(t.virtual, {
        appendSlide: function(e) {
            if ("object" == typeof e && "length" in e) for(let s = 0; s < e.length; s += 1)e[s] && t.virtual.slides.push(e[s]);
            else t.virtual.slides.push(e);
            c(!0);
        },
        prependSlide: function(e) {
            const s = t.activeIndex;
            let i = s + 1, r = 1;
            if (Array.isArray(e)) {
                for(let s = 0; s < e.length; s += 1)e[s] && t.virtual.slides.unshift(e[s]);
                i = s + e.length, r = e.length;
            } else t.virtual.slides.unshift(e);
            if (t.params.virtual.cache) {
                const e = t.virtual.cache, s = {};
                Object.keys(e).forEach((t)=>{
                    const i = e[t], a = i.getAttribute("data-swiper-slide-index");
                    a && i.setAttribute("data-swiper-slide-index", parseInt(a, 10) + r), s[parseInt(t, 10) + r] = i;
                }), t.virtual.cache = s;
            }
            c(!0), t.slideTo(i, 0);
        },
        removeSlide: function(e) {
            if (null == e) return;
            let s = t.activeIndex;
            if (Array.isArray(e)) for(let i = e.length - 1; i >= 0; i -= 1)t.params.virtual.cache && (delete t.virtual.cache[e[i]], Object.keys(t.virtual.cache).forEach((s)=>{
                s > e && (t.virtual.cache[s - 1] = t.virtual.cache[s], t.virtual.cache[s - 1].setAttribute("data-swiper-slide-index", s - 1), delete t.virtual.cache[s]);
            })), t.virtual.slides.splice(e[i], 1), e[i] < s && (s -= 1), s = Math.max(s, 0);
            else t.params.virtual.cache && (delete t.virtual.cache[e], Object.keys(t.virtual.cache).forEach((s)=>{
                s > e && (t.virtual.cache[s - 1] = t.virtual.cache[s], t.virtual.cache[s - 1].setAttribute("data-swiper-slide-index", s - 1), delete t.virtual.cache[s]);
            })), t.virtual.slides.splice(e, 1), e < s && (s -= 1), s = Math.max(s, 0);
            c(!0), t.slideTo(s, 0);
        },
        removeAllSlides: function() {
            t.virtual.slides = [], t.params.virtual.cache && (t.virtual.cache = {}), c(!0), t.slideTo(0, 0);
        },
        update: c
    });
}

},{"../shared/ssr-window.esm.min.mjs":"iD2WK","../shared/utils.min.mjs":"9TwJM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gntXl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Keyboard);
var _ssrWindowEsmMinMjs = require("../shared/ssr-window.esm.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function Keyboard(e) {
    let { swiper: t, extendParams: n, on: a, emit: r } = e;
    const l = (0, _ssrWindowEsmMinMjs.g)(), i = (0, _ssrWindowEsmMinMjs.a)();
    function o(e) {
        if (!t.enabled) return;
        const { rtlTranslate: n } = t;
        let a = e;
        a.originalEvent && (a = a.originalEvent);
        const o = a.keyCode || a.charCode, s = t.params.keyboard.pageUpDown, d = s && 33 === o, f = s && 34 === o, m = 37 === o, b = 39 === o, c = 38 === o, p = 40 === o;
        if (!t.allowSlideNext && (t.isHorizontal() && b || t.isVertical() && p || f)) return !1;
        if (!t.allowSlidePrev && (t.isHorizontal() && m || t.isVertical() && c || d)) return !1;
        if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || l.activeElement && l.activeElement.nodeName && ("input" === l.activeElement.nodeName.toLowerCase() || "textarea" === l.activeElement.nodeName.toLowerCase()))) {
            if (t.params.keyboard.onlyInViewport && (d || f || m || b || c || p)) {
                let e = !1;
                if ((0, _utilsMinMjs.a)(t.el, `.${t.params.slideClass}, swiper-slide`).length > 0 && 0 === (0, _utilsMinMjs.a)(t.el, `.${t.params.slideActiveClass}`).length) return;
                const a = t.el, r = a.clientWidth, l = a.clientHeight, o = i.innerWidth, s = i.innerHeight, d = (0, _utilsMinMjs.b)(a);
                n && (d.left -= a.scrollLeft);
                const f = [
                    [
                        d.left,
                        d.top
                    ],
                    [
                        d.left + r,
                        d.top
                    ],
                    [
                        d.left,
                        d.top + l
                    ],
                    [
                        d.left + r,
                        d.top + l
                    ]
                ];
                for(let t = 0; t < f.length; t += 1){
                    const n = f[t];
                    if (n[0] >= 0 && n[0] <= o && n[1] >= 0 && n[1] <= s) {
                        if (0 === n[0] && 0 === n[1]) continue;
                        e = !0;
                    }
                }
                if (!e) return;
            }
            t.isHorizontal() ? ((d || f || m || b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((f || b) && !n || (d || m) && n) && t.slideNext(), ((d || m) && !n || (f || b) && n) && t.slidePrev()) : ((d || f || c || p) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (f || p) && t.slideNext(), (d || c) && t.slidePrev()), r("keyPress", o);
        }
    }
    function s() {
        t.keyboard.enabled || (l.addEventListener("keydown", o), t.keyboard.enabled = !0);
    }
    function d() {
        t.keyboard.enabled && (l.removeEventListener("keydown", o), t.keyboard.enabled = !1);
    }
    t.keyboard = {
        enabled: !1
    }, n({
        keyboard: {
            enabled: !1,
            onlyInViewport: !0,
            pageUpDown: !0
        }
    }), a("init", ()=>{
        t.params.keyboard.enabled && s();
    }), a("destroy", ()=>{
        t.keyboard.enabled && d();
    }), Object.assign(t.keyboard, {
        enable: s,
        disable: d
    });
}

},{"../shared/ssr-window.esm.min.mjs":"iD2WK","../shared/utils.min.mjs":"9TwJM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2tEAW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Mousewheel);
var _ssrWindowEsmMinMjs = require("../shared/ssr-window.esm.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function Mousewheel(e) {
    let { swiper: t, extendParams: a, on: s, emit: n } = e;
    const l = (0, _ssrWindowEsmMinMjs.a)();
    let i;
    a({
        mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarget: "container",
            thresholdDelta: null,
            thresholdTime: null,
            noMousewheelClass: "swiper-no-mousewheel"
        }
    }), t.mousewheel = {
        enabled: !1
    };
    let r, o = (0, _utilsMinMjs.d)();
    const d = [];
    function m() {
        t.enabled && (t.mouseEntered = !0);
    }
    function p() {
        t.enabled && (t.mouseEntered = !1);
    }
    function u(e) {
        return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) && !(t.params.mousewheel.thresholdTime && (0, _utilsMinMjs.d)() - o < t.params.mousewheel.thresholdTime) && (e.delta >= 6 && (0, _utilsMinMjs.d)() - o < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), n("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), n("scroll", e.raw)), o = (new l.Date).getTime(), !1));
    }
    function h(e) {
        let a = e, s = !0;
        if (!t.enabled) return;
        if (e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`)) return;
        const l = t.params.mousewheel;
        t.params.cssMode && a.preventDefault();
        let o = t.el;
        "container" !== t.params.mousewheel.eventsTarget && (o = document.querySelector(t.params.mousewheel.eventsTarget));
        const m = o && o.contains(a.target);
        if (!t.mouseEntered && !m && !l.releaseOnEdges) return !0;
        a.originalEvent && (a = a.originalEvent);
        let p = 0;
        const h = t.rtlTranslate ? -1 : 1, c = function(e) {
            let t = 0, a = 0, s = 0, n = 0;
            return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), s = 10 * t, n = 10 * a, "deltaY" in e && (n = e.deltaY), "deltaX" in e && (s = e.deltaX), e.shiftKey && !s && (s = n, n = 0), (s || n) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, n *= 40) : (s *= 800, n *= 800)), s && !t && (t = s < 1 ? -1 : 1), n && !a && (a = n < 1 ? -1 : 1), {
                spinX: t,
                spinY: a,
                pixelX: s,
                pixelY: n
            };
        }(a);
        if (l.forceToAxis) {
            if (t.isHorizontal()) {
                if (!(Math.abs(c.pixelX) > Math.abs(c.pixelY))) return !0;
                p = -c.pixelX * h;
            } else {
                if (!(Math.abs(c.pixelY) > Math.abs(c.pixelX))) return !0;
                p = -c.pixelY;
            }
        } else p = Math.abs(c.pixelX) > Math.abs(c.pixelY) ? -c.pixelX * h : -c.pixelY;
        if (0 === p) return !0;
        l.invert && (p = -p);
        let w = t.getTranslate() + p * l.sensitivity;
        if (w >= t.minTranslate() && (w = t.minTranslate()), w <= t.maxTranslate() && (w = t.maxTranslate()), s = !!t.params.loop || !(w === t.minTranslate() || w === t.maxTranslate()), s && t.params.nested && a.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
            const e = {
                time: (0, _utilsMinMjs.d)(),
                delta: Math.abs(p),
                direction: Math.sign(p)
            }, s = r && e.time < r.time + 500 && e.delta <= r.delta && e.direction === r.direction;
            if (!s) {
                r = void 0;
                let o = t.getTranslate() + p * l.sensitivity;
                const m = t.isBeginning, u = t.isEnd;
                if (o >= t.minTranslate() && (o = t.minTranslate()), o <= t.maxTranslate() && (o = t.maxTranslate()), t.setTransition(0), t.setTranslate(o), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!m && t.isBeginning || !u && t.isEnd) && t.updateSlidesClasses(), t.params.loop && t.loopFix({
                    direction: e.direction < 0 ? "next" : "prev",
                    byMousewheel: !0
                }), t.params.freeMode.sticky) {
                    clearTimeout(i), i = void 0, d.length >= 15 && d.shift();
                    const a = d.length ? d[d.length - 1] : void 0, s = d[0];
                    if (d.push(e), a && (e.delta > a.delta || e.direction !== a.direction)) d.splice(0);
                    else if (d.length >= 15 && e.time - s.time < 500 && s.delta - e.delta >= 1 && e.delta <= 6) {
                        const a = p > 0 ? .8 : .2;
                        r = e, d.splice(0), i = (0, _utilsMinMjs.n)(()=>{
                            !t.destroyed && t.params && t.slideToClosest(t.params.speed, !0, void 0, a);
                        }, 0);
                    }
                    i || (i = (0, _utilsMinMjs.n)(()=>{
                        if (t.destroyed || !t.params) return;
                        r = e, d.splice(0), t.slideToClosest(t.params.speed, !0, void 0, .5);
                    }, 500));
                }
                if (s || n("scroll", a), t.params.autoplay && t.params.autoplay.disableOnInteraction && t.autoplay.stop(), l.releaseOnEdges && (o === t.minTranslate() || o === t.maxTranslate())) return !0;
            }
        } else {
            const a = {
                time: (0, _utilsMinMjs.d)(),
                delta: Math.abs(p),
                direction: Math.sign(p),
                raw: e
            };
            d.length >= 2 && d.shift();
            const s = d.length ? d[d.length - 1] : void 0;
            if (d.push(a), s ? (a.direction !== s.direction || a.delta > s.delta || a.time > s.time + 150) && u(a) : u(a), function(e) {
                const a = t.params.mousewheel;
                if (e.direction < 0) {
                    if (t.isEnd && !t.params.loop && a.releaseOnEdges) return !0;
                } else if (t.isBeginning && !t.params.loop && a.releaseOnEdges) return !0;
                return !1;
            }(a)) return !0;
        }
        return a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1;
    }
    function c(e) {
        let a = t.el;
        "container" !== t.params.mousewheel.eventsTarget && (a = document.querySelector(t.params.mousewheel.eventsTarget)), a[e]("mouseenter", m), a[e]("mouseleave", p), a[e]("wheel", h);
    }
    function w() {
        return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", h), !0) : !t.mousewheel.enabled && (c("addEventListener"), t.mousewheel.enabled = !0, !0);
    }
    function f() {
        return t.params.cssMode ? (t.wrapperEl.addEventListener(event, h), !0) : !!t.mousewheel.enabled && (c("removeEventListener"), t.mousewheel.enabled = !1, !0);
    }
    s("init", ()=>{
        !t.params.mousewheel.enabled && t.params.cssMode && f(), t.params.mousewheel.enabled && w();
    }), s("destroy", ()=>{
        t.params.cssMode && w(), t.mousewheel.enabled && f();
    }), Object.assign(t.mousewheel, {
        enable: w,
        disable: f
    });
}

},{"../shared/ssr-window.esm.min.mjs":"iD2WK","../shared/utils.min.mjs":"9TwJM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7lq0p":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Navigation);
var _createElementIfNotDefinedMinMjs = require("../shared/create-element-if-not-defined.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function Navigation(a) {
    let { swiper: e, extendParams: n, on: i, emit: t } = a;
    function s(a) {
        let n;
        return a && "string" == typeof a && e.isElement && (n = e.el.querySelector(a) || e.hostEl.querySelector(a), n) ? n : (a && ("string" == typeof a && (n = [
            ...document.querySelectorAll(a)
        ]), e.params.uniqueNavElements && "string" == typeof a && n && n.length > 1 && 1 === e.el.querySelectorAll(a).length ? n = e.el.querySelector(a) : n && 1 === n.length && (n = n[0])), a && !n ? a : n);
    }
    function l(a, n) {
        const i = e.params.navigation;
        (a = (0, _utilsMinMjs.m)(a)).forEach((a)=>{
            a && (a.classList[n ? "add" : "remove"](...i.disabledClass.split(" ")), "BUTTON" === a.tagName && (a.disabled = n), e.params.watchOverflow && e.enabled && a.classList[e.isLocked ? "add" : "remove"](i.lockClass));
        });
    }
    function r() {
        const { nextEl: a, prevEl: n } = e.navigation;
        if (e.params.loop) return l(n, !1), void l(a, !1);
        l(n, e.isBeginning && !e.params.rewind), l(a, e.isEnd && !e.params.rewind);
    }
    function o(a) {
        a.preventDefault(), (!e.isBeginning || e.params.loop || e.params.rewind) && (e.slidePrev(), t("navigationPrev"));
    }
    function d(a) {
        a.preventDefault(), (!e.isEnd || e.params.loop || e.params.rewind) && (e.slideNext(), t("navigationNext"));
    }
    function c() {
        const a = e.params.navigation;
        if (e.params.navigation = (0, _createElementIfNotDefinedMinMjs.c)(e, e.originalParams.navigation, e.params.navigation, {
            nextEl: "swiper-button-next",
            prevEl: "swiper-button-prev"
        }), !a.nextEl && !a.prevEl) return;
        let n = s(a.nextEl), i = s(a.prevEl);
        Object.assign(e.navigation, {
            nextEl: n,
            prevEl: i
        }), n = (0, _utilsMinMjs.m)(n), i = (0, _utilsMinMjs.m)(i);
        const t = (n, i)=>{
            n && n.addEventListener("click", "next" === i ? d : o), !e.enabled && n && n.classList.add(...a.lockClass.split(" "));
        };
        n.forEach((a)=>t(a, "next")), i.forEach((a)=>t(a, "prev"));
    }
    function m() {
        let { nextEl: a, prevEl: n } = e.navigation;
        a = (0, _utilsMinMjs.m)(a), n = (0, _utilsMinMjs.m)(n);
        const i = (a, n)=>{
            a.removeEventListener("click", "next" === n ? d : o), a.classList.remove(...e.params.navigation.disabledClass.split(" "));
        };
        a.forEach((a)=>i(a, "next")), n.forEach((a)=>i(a, "prev"));
    }
    n({
        navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
        }
    }), e.navigation = {
        nextEl: null,
        prevEl: null
    }, i("init", ()=>{
        !1 === e.params.navigation.enabled ? p() : (c(), r());
    }), i("toEdge fromEdge lock unlock", ()=>{
        r();
    }), i("destroy", ()=>{
        m();
    }), i("enable disable", ()=>{
        let { nextEl: a, prevEl: n } = e.navigation;
        a = (0, _utilsMinMjs.m)(a), n = (0, _utilsMinMjs.m)(n), e.enabled ? r() : [
            ...a,
            ...n
        ].filter((a)=>!!a).forEach((a)=>a.classList.add(e.params.navigation.lockClass));
    }), i("click", (a, n)=>{
        let { nextEl: i, prevEl: s } = e.navigation;
        i = (0, _utilsMinMjs.m)(i), s = (0, _utilsMinMjs.m)(s);
        const l = n.target;
        let r = s.includes(l) || i.includes(l);
        if (e.isElement && !r) {
            const a = n.path || n.composedPath && n.composedPath();
            a && (r = a.find((a)=>i.includes(a) || s.includes(a)));
        }
        if (e.params.navigation.hideOnClick && !r) {
            if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === l || e.pagination.el.contains(l))) return;
            let a;
            i.length ? a = i[0].classList.contains(e.params.navigation.hiddenClass) : s.length && (a = s[0].classList.contains(e.params.navigation.hiddenClass)), t(!0 === a ? "navigationShow" : "navigationHide"), [
                ...i,
                ...s
            ].filter((a)=>!!a).forEach((a)=>a.classList.toggle(e.params.navigation.hiddenClass));
        }
    });
    const p = ()=>{
        e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")), m();
    };
    Object.assign(e.navigation, {
        enable: ()=>{
            e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")), c(), r();
        },
        disable: p,
        update: r,
        init: c,
        destroy: m
    });
}

},{"../shared/create-element-if-not-defined.min.mjs":"9CnFI","../shared/utils.min.mjs":"9TwJM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9CnFI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "c", ()=>createElementIfNotDefined);
var _utilsMinMjs = require("./utils.min.mjs");
function createElementIfNotDefined(e, t, n, a) {
    return e.params.createElements && Object.keys(a).forEach((l)=>{
        if (!n[l] && !0 === n.auto) {
            let r = (0, _utilsMinMjs.e)(e.el, `.${a[l]}`)[0];
            r || (r = (0, _utilsMinMjs.c)("div", a[l]), r.className = a[l], e.el.append(r)), n[l] = r, t[l] = r;
        }
    }), n;
}

},{"./utils.min.mjs":"9TwJM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8h9mU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Pagination);
var _classesToSelectorMinMjs = require("../shared/classes-to-selector.min.mjs");
var _createElementIfNotDefinedMinMjs = require("../shared/create-element-if-not-defined.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function Pagination(e) {
    let { swiper: a, extendParams: s, on: l, emit: t } = e;
    const i = "swiper-pagination";
    let n;
    s({
        pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e)=>e,
            formatFractionTotal: (e)=>e,
            bulletClass: `${i}-bullet`,
            bulletActiveClass: `${i}-bullet-active`,
            modifierClass: `${i}-`,
            currentClass: `${i}-current`,
            totalClass: `${i}-total`,
            hiddenClass: `${i}-hidden`,
            progressbarFillClass: `${i}-progressbar-fill`,
            progressbarOppositeClass: `${i}-progressbar-opposite`,
            clickableClass: `${i}-clickable`,
            lockClass: `${i}-lock`,
            horizontalClass: `${i}-horizontal`,
            verticalClass: `${i}-vertical`,
            paginationDisabledClass: `${i}-disabled`
        }
    }), a.pagination = {
        el: null,
        bullets: []
    };
    let r = 0;
    function o() {
        return !a.params.pagination.el || !a.pagination.el || Array.isArray(a.pagination.el) && 0 === a.pagination.el.length;
    }
    function p(e, s) {
        const { bulletActiveClass: l } = a.params.pagination;
        e && (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${l}-${s}`), (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${l}-${s}-${s}`));
    }
    function c(e) {
        const s = e.target.closest((0, _classesToSelectorMinMjs.c)(a.params.pagination.bulletClass));
        if (!s) return;
        e.preventDefault();
        const l = (0, _utilsMinMjs.h)(s) * a.params.slidesPerGroup;
        if (a.params.loop) {
            if (a.realIndex === l) return;
            const e = (t = a.realIndex, i = l, n = a.slides.length, (i %= n) == 1 + (t %= n) ? "next" : i === t - 1 ? "previous" : void 0);
            "next" === e ? a.slideNext() : "previous" === e ? a.slidePrev() : a.slideToLoop(l);
        } else a.slideTo(l);
        var t, i, n;
    }
    function d() {
        const e = a.rtl, s = a.params.pagination;
        if (o()) return;
        let l, i, c = a.pagination.el;
        c = (0, _utilsMinMjs.m)(c);
        const d = a.virtual && a.params.virtual.enabled ? a.virtual.slides.length : a.slides.length, m = a.params.loop ? Math.ceil(d / a.params.slidesPerGroup) : a.snapGrid.length;
        if (a.params.loop ? (i = a.previousRealIndex || 0, l = a.params.slidesPerGroup > 1 ? Math.floor(a.realIndex / a.params.slidesPerGroup) : a.realIndex) : void 0 !== a.snapIndex ? (l = a.snapIndex, i = a.previousSnapIndex) : (i = a.previousIndex || 0, l = a.activeIndex || 0), "bullets" === s.type && a.pagination.bullets && a.pagination.bullets.length > 0) {
            const t = a.pagination.bullets;
            let o, d, m;
            if (s.dynamicBullets && (n = (0, _utilsMinMjs.f)(t[0], a.isHorizontal() ? "width" : "height", !0), c.forEach((e)=>{
                e.style[a.isHorizontal() ? "width" : "height"] = n * (s.dynamicMainBullets + 4) + "px";
            }), s.dynamicMainBullets > 1 && void 0 !== i && (r += l - (i || 0), r > s.dynamicMainBullets - 1 ? r = s.dynamicMainBullets - 1 : r < 0 && (r = 0)), o = Math.max(l - r, 0), d = o + (Math.min(t.length, s.dynamicMainBullets) - 1), m = (d + o) / 2), t.forEach((e)=>{
                const a = [
                    ...[
                        "",
                        "-next",
                        "-next-next",
                        "-prev",
                        "-prev-prev",
                        "-main"
                    ].map((e)=>`${s.bulletActiveClass}${e}`)
                ].map((e)=>"string" == typeof e && e.includes(" ") ? e.split(" ") : e).flat();
                e.classList.remove(...a);
            }), c.length > 1) t.forEach((e)=>{
                const t = (0, _utilsMinMjs.h)(e);
                t === l ? e.classList.add(...s.bulletActiveClass.split(" ")) : a.isElement && e.setAttribute("part", "bullet"), s.dynamicBullets && (t >= o && t <= d && e.classList.add(...`${s.bulletActiveClass}-main`.split(" ")), t === o && p(e, "prev"), t === d && p(e, "next"));
            });
            else {
                const e = t[l];
                if (e && e.classList.add(...s.bulletActiveClass.split(" ")), a.isElement && t.forEach((e, a)=>{
                    e.setAttribute("part", a === l ? "bullet-active" : "bullet");
                }), s.dynamicBullets) {
                    const e = t[o], a = t[d];
                    for(let e = o; e <= d; e += 1)t[e] && t[e].classList.add(...`${s.bulletActiveClass}-main`.split(" "));
                    p(e, "prev"), p(a, "next");
                }
            }
            if (s.dynamicBullets) {
                const l = Math.min(t.length, s.dynamicMainBullets + 4), i = (n * l - n) / 2 - m * n, r = e ? "right" : "left";
                t.forEach((e)=>{
                    e.style[a.isHorizontal() ? r : "top"] = `${i}px`;
                });
            }
        }
        c.forEach((e, i)=>{
            if ("fraction" === s.type && (e.querySelectorAll((0, _classesToSelectorMinMjs.c)(s.currentClass)).forEach((e)=>{
                e.textContent = s.formatFractionCurrent(l + 1);
            }), e.querySelectorAll((0, _classesToSelectorMinMjs.c)(s.totalClass)).forEach((e)=>{
                e.textContent = s.formatFractionTotal(m);
            })), "progressbar" === s.type) {
                let t;
                t = s.progressbarOpposite ? a.isHorizontal() ? "vertical" : "horizontal" : a.isHorizontal() ? "horizontal" : "vertical";
                const i = (l + 1) / m;
                let n = 1, r = 1;
                "horizontal" === t ? n = i : r = i, e.querySelectorAll((0, _classesToSelectorMinMjs.c)(s.progressbarFillClass)).forEach((e)=>{
                    e.style.transform = `translate3d(0,0,0) scaleX(${n}) scaleY(${r})`, e.style.transitionDuration = `${a.params.speed}ms`;
                });
            }
            "custom" === s.type && s.renderCustom ? (e.innerHTML = s.renderCustom(a, l + 1, m), 0 === i && t("paginationRender", e)) : (0 === i && t("paginationRender", e), t("paginationUpdate", e)), a.params.watchOverflow && a.enabled && e.classList[a.isLocked ? "add" : "remove"](s.lockClass);
        });
    }
    function m() {
        const e = a.params.pagination;
        if (o()) return;
        const s = a.virtual && a.params.virtual.enabled ? a.virtual.slides.length : a.grid && a.params.grid.rows > 1 ? a.slides.length / Math.ceil(a.params.grid.rows) : a.slides.length;
        let l = a.pagination.el;
        l = (0, _utilsMinMjs.m)(l);
        let i = "";
        if ("bullets" === e.type) {
            let l = a.params.loop ? Math.ceil(s / a.params.slidesPerGroup) : a.snapGrid.length;
            a.params.freeMode && a.params.freeMode.enabled && l > s && (l = s);
            for(let s = 0; s < l; s += 1)e.renderBullet ? i += e.renderBullet.call(a, s, e.bulletClass) : i += `<${e.bulletElement} ${a.isElement ? 'part="bullet"' : ""} class="${e.bulletClass}"></${e.bulletElement}>`;
        }
        "fraction" === e.type && (i = e.renderFraction ? e.renderFraction.call(a, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (i = e.renderProgressbar ? e.renderProgressbar.call(a, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), a.pagination.bullets = [], l.forEach((s)=>{
            "custom" !== e.type && (s.innerHTML = i || ""), "bullets" === e.type && a.pagination.bullets.push(...s.querySelectorAll((0, _classesToSelectorMinMjs.c)(e.bulletClass)));
        }), "custom" !== e.type && t("paginationRender", l[0]);
    }
    function u() {
        a.params.pagination = (0, _createElementIfNotDefinedMinMjs.c)(a, a.originalParams.pagination, a.params.pagination, {
            el: "swiper-pagination"
        });
        const e = a.params.pagination;
        if (!e.el) return;
        let s;
        "string" == typeof e.el && a.isElement && (s = a.el.querySelector(e.el)), s || "string" != typeof e.el || (s = [
            ...document.querySelectorAll(e.el)
        ]), s || (s = e.el), s && 0 !== s.length && (a.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(s) && s.length > 1 && (s = [
            ...a.el.querySelectorAll(e.el)
        ], s.length > 1 && (s = s.find((e)=>(0, _utilsMinMjs.a)(e, ".swiper")[0] === a.el))), Array.isArray(s) && 1 === s.length && (s = s[0]), Object.assign(a.pagination, {
            el: s
        }), s = (0, _utilsMinMjs.m)(s), s.forEach((s)=>{
            "bullets" === e.type && e.clickable && s.classList.add(...(e.clickableClass || "").split(" ")), s.classList.add(e.modifierClass + e.type), s.classList.add(a.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (s.classList.add(`${e.modifierClass}${e.type}-dynamic`), r = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && s.classList.add(e.progressbarOppositeClass), e.clickable && s.addEventListener("click", c), a.enabled || s.classList.add(e.lockClass);
        }));
    }
    function g() {
        const e = a.params.pagination;
        if (o()) return;
        let s = a.pagination.el;
        s && (s = (0, _utilsMinMjs.m)(s), s.forEach((s)=>{
            s.classList.remove(e.hiddenClass), s.classList.remove(e.modifierClass + e.type), s.classList.remove(a.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (s.classList.remove(...(e.clickableClass || "").split(" ")), s.removeEventListener("click", c));
        })), a.pagination.bullets && a.pagination.bullets.forEach((a)=>a.classList.remove(...e.bulletActiveClass.split(" ")));
    }
    l("changeDirection", ()=>{
        if (!a.pagination || !a.pagination.el) return;
        const e = a.params.pagination;
        let { el: s } = a.pagination;
        s = (0, _utilsMinMjs.m)(s), s.forEach((s)=>{
            s.classList.remove(e.horizontalClass, e.verticalClass), s.classList.add(a.isHorizontal() ? e.horizontalClass : e.verticalClass);
        });
    }), l("init", ()=>{
        !1 === a.params.pagination.enabled ? b() : (u(), m(), d());
    }), l("activeIndexChange", ()=>{
        void 0 === a.snapIndex && d();
    }), l("snapIndexChange", ()=>{
        d();
    }), l("snapGridLengthChange", ()=>{
        m(), d();
    }), l("destroy", ()=>{
        g();
    }), l("enable disable", ()=>{
        let { el: e } = a.pagination;
        e && (e = (0, _utilsMinMjs.m)(e), e.forEach((e)=>e.classList[a.enabled ? "remove" : "add"](a.params.pagination.lockClass)));
    }), l("lock unlock", ()=>{
        d();
    }), l("click", (e, s)=>{
        const l = s.target, i = (0, _utilsMinMjs.m)(a.pagination.el);
        if (a.params.pagination.el && a.params.pagination.hideOnClick && i && i.length > 0 && !l.classList.contains(a.params.pagination.bulletClass)) {
            if (a.navigation && (a.navigation.nextEl && l === a.navigation.nextEl || a.navigation.prevEl && l === a.navigation.prevEl)) return;
            const e = i[0].classList.contains(a.params.pagination.hiddenClass);
            t(!0 === e ? "paginationShow" : "paginationHide"), i.forEach((e)=>e.classList.toggle(a.params.pagination.hiddenClass));
        }
    });
    const b = ()=>{
        a.el.classList.add(a.params.pagination.paginationDisabledClass);
        let { el: e } = a.pagination;
        e && (e = (0, _utilsMinMjs.m)(e), e.forEach((e)=>e.classList.add(a.params.pagination.paginationDisabledClass))), g();
    };
    Object.assign(a.pagination, {
        enable: ()=>{
            a.el.classList.remove(a.params.pagination.paginationDisabledClass);
            let { el: e } = a.pagination;
            e && (e = (0, _utilsMinMjs.m)(e), e.forEach((e)=>e.classList.remove(a.params.pagination.paginationDisabledClass))), u(), m(), d();
        },
        disable: b,
        render: m,
        update: d,
        init: u,
        destroy: g
    });
}

},{"../shared/classes-to-selector.min.mjs":"95jnt","../shared/create-element-if-not-defined.min.mjs":"9CnFI","../shared/utils.min.mjs":"9TwJM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"95jnt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "c", ()=>classesToSelector);
function classesToSelector(e) {
    return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"80S0h":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Scrollbar);
var _ssrWindowEsmMinMjs = require("../shared/ssr-window.esm.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
var _createElementIfNotDefinedMinMjs = require("../shared/create-element-if-not-defined.min.mjs");
var _classesToSelectorMinMjs = require("../shared/classes-to-selector.min.mjs");
function Scrollbar(s) {
    let { swiper: l, extendParams: e, on: a, emit: r } = s;
    const t = (0, _ssrWindowEsmMinMjs.g)();
    let o, n, i, c, p = !1, m = null, d = null;
    function b() {
        if (!l.params.scrollbar.el || !l.scrollbar.el) return;
        const { scrollbar: s, rtlTranslate: e } = l, { dragEl: a, el: r } = s, t = l.params.scrollbar, o = l.params.loop ? l.progressLoop : l.progress;
        let c = n, p = (i - n) * o;
        e ? (p = -p, p > 0 ? (c = n - p, p = 0) : -p + n > i && (c = i + p)) : p < 0 ? (c = n + p, p = 0) : p + n > i && (c = i - p), l.isHorizontal() ? (a.style.transform = `translate3d(${p}px, 0, 0)`, a.style.width = `${c}px`) : (a.style.transform = `translate3d(0px, ${p}px, 0)`, a.style.height = `${c}px`), t.hide && (clearTimeout(m), r.style.opacity = 1, m = setTimeout(()=>{
            r.style.opacity = 0, r.style.transitionDuration = "400ms";
        }, 1e3));
    }
    function u() {
        if (!l.params.scrollbar.el || !l.scrollbar.el) return;
        const { scrollbar: s } = l, { dragEl: e, el: a } = s;
        e.style.width = "", e.style.height = "", i = l.isHorizontal() ? a.offsetWidth : a.offsetHeight, c = l.size / (l.virtualSize + l.params.slidesOffsetBefore - (l.params.centeredSlides ? l.snapGrid[0] : 0)), n = "auto" === l.params.scrollbar.dragSize ? i * c : parseInt(l.params.scrollbar.dragSize, 10), l.isHorizontal() ? e.style.width = `${n}px` : e.style.height = `${n}px`, a.style.display = c >= 1 ? "none" : "", l.params.scrollbar.hide && (a.style.opacity = 0), l.params.watchOverflow && l.enabled && s.el.classList[l.isLocked ? "add" : "remove"](l.params.scrollbar.lockClass);
    }
    function f(s) {
        return l.isHorizontal() ? s.clientX : s.clientY;
    }
    function g(s) {
        const { scrollbar: e, rtlTranslate: a } = l, { el: r } = e;
        let t;
        t = (f(s) - (0, _utilsMinMjs.b)(r)[l.isHorizontal() ? "left" : "top"] - (null !== o ? o : n / 2)) / (i - n), t = Math.max(Math.min(t, 1), 0), a && (t = 1 - t);
        const c = l.minTranslate() + (l.maxTranslate() - l.minTranslate()) * t;
        l.updateProgress(c), l.setTranslate(c), l.updateActiveIndex(), l.updateSlidesClasses();
    }
    function y(s) {
        const e = l.params.scrollbar, { scrollbar: a, wrapperEl: t } = l, { el: n, dragEl: i } = a;
        p = !0, o = s.target === i ? f(s) - s.target.getBoundingClientRect()[l.isHorizontal() ? "left" : "top"] : null, s.preventDefault(), s.stopPropagation(), t.style.transitionDuration = "100ms", i.style.transitionDuration = "100ms", g(s), clearTimeout(d), n.style.transitionDuration = "0ms", e.hide && (n.style.opacity = 1), l.params.cssMode && (l.wrapperEl.style["scroll-snap-type"] = "none"), r("scrollbarDragStart", s);
    }
    function h(s) {
        const { scrollbar: e, wrapperEl: a } = l, { el: t, dragEl: o } = e;
        p && (s.preventDefault && s.cancelable ? s.preventDefault() : s.returnValue = !1, g(s), a.style.transitionDuration = "0ms", t.style.transitionDuration = "0ms", o.style.transitionDuration = "0ms", r("scrollbarDragMove", s));
    }
    function T(s) {
        const e = l.params.scrollbar, { scrollbar: a, wrapperEl: t } = l, { el: o } = a;
        p && (p = !1, l.params.cssMode && (l.wrapperEl.style["scroll-snap-type"] = "", t.style.transitionDuration = ""), e.hide && (clearTimeout(d), d = (0, _utilsMinMjs.n)(()=>{
            o.style.opacity = 0, o.style.transitionDuration = "400ms";
        }, 1e3)), r("scrollbarDragEnd", s), e.snapOnRelease && l.slideToClosest());
    }
    function v(s) {
        const { scrollbar: e, params: a } = l, r = e.el;
        if (!r) return;
        const o = r, n = !!a.passiveListeners && {
            passive: !1,
            capture: !1
        }, i = !!a.passiveListeners && {
            passive: !0,
            capture: !1
        };
        if (!o) return;
        const c = "on" === s ? "addEventListener" : "removeEventListener";
        o[c]("pointerdown", y, n), t[c]("pointermove", h, n), t[c]("pointerup", T, i);
    }
    function D() {
        const { scrollbar: s, el: e } = l;
        l.params.scrollbar = (0, _createElementIfNotDefinedMinMjs.c)(l, l.originalParams.scrollbar, l.params.scrollbar, {
            el: "swiper-scrollbar"
        });
        const a = l.params.scrollbar;
        if (!a.el) return;
        let r, o;
        if ("string" == typeof a.el && l.isElement && (r = l.el.querySelector(a.el)), r || "string" != typeof a.el) r || (r = a.el);
        else if (r = t.querySelectorAll(a.el), !r.length) return;
        l.params.uniqueNavElements && "string" == typeof a.el && r.length > 1 && 1 === e.querySelectorAll(a.el).length && (r = e.querySelector(a.el)), r.length > 0 && (r = r[0]), r.classList.add(l.isHorizontal() ? a.horizontalClass : a.verticalClass), r && (o = r.querySelector((0, _classesToSelectorMinMjs.c)(l.params.scrollbar.dragClass)), o || (o = (0, _utilsMinMjs.c)("div", l.params.scrollbar.dragClass), r.append(o))), Object.assign(s, {
            el: r,
            dragEl: o
        }), a.draggable && l.params.scrollbar.el && l.scrollbar.el && v("on"), r && r.classList[l.enabled ? "remove" : "add"](...(0, _utilsMinMjs.i)(l.params.scrollbar.lockClass));
    }
    function C() {
        const s = l.params.scrollbar, e = l.scrollbar.el;
        e && e.classList.remove(...(0, _utilsMinMjs.i)(l.isHorizontal() ? s.horizontalClass : s.verticalClass)), l.params.scrollbar.el && l.scrollbar.el && v("off");
    }
    e({
        scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag",
            scrollbarDisabledClass: "swiper-scrollbar-disabled",
            horizontalClass: "swiper-scrollbar-horizontal",
            verticalClass: "swiper-scrollbar-vertical"
        }
    }), l.scrollbar = {
        el: null,
        dragEl: null
    }, a("changeDirection", ()=>{
        if (!l.scrollbar || !l.scrollbar.el) return;
        const s = l.params.scrollbar;
        let { el: e } = l.scrollbar;
        e = (0, _utilsMinMjs.m)(e), e.forEach((e)=>{
            e.classList.remove(s.horizontalClass, s.verticalClass), e.classList.add(l.isHorizontal() ? s.horizontalClass : s.verticalClass);
        });
    }), a("init", ()=>{
        !1 === l.params.scrollbar.enabled ? E() : (D(), u(), b());
    }), a("update resize observerUpdate lock unlock changeDirection", ()=>{
        u();
    }), a("setTranslate", ()=>{
        b();
    }), a("setTransition", (s, e)=>{
        !function(s) {
            l.params.scrollbar.el && l.scrollbar.el && (l.scrollbar.dragEl.style.transitionDuration = `${s}ms`);
        }(e);
    }), a("enable disable", ()=>{
        const { el: s } = l.scrollbar;
        s && s.classList[l.enabled ? "remove" : "add"](...(0, _utilsMinMjs.i)(l.params.scrollbar.lockClass));
    }), a("destroy", ()=>{
        C();
    });
    const E = ()=>{
        l.el.classList.add(...(0, _utilsMinMjs.i)(l.params.scrollbar.scrollbarDisabledClass)), l.scrollbar.el && l.scrollbar.el.classList.add(...(0, _utilsMinMjs.i)(l.params.scrollbar.scrollbarDisabledClass)), C();
    };
    Object.assign(l.scrollbar, {
        enable: ()=>{
            l.el.classList.remove(...(0, _utilsMinMjs.i)(l.params.scrollbar.scrollbarDisabledClass)), l.scrollbar.el && l.scrollbar.el.classList.remove(...(0, _utilsMinMjs.i)(l.params.scrollbar.scrollbarDisabledClass)), D(), u(), b();
        },
        disable: E,
        updateSize: u,
        setTranslate: b,
        init: D,
        destroy: C
    });
}

},{"../shared/ssr-window.esm.min.mjs":"iD2WK","../shared/utils.min.mjs":"9TwJM","../shared/create-element-if-not-defined.min.mjs":"9CnFI","../shared/classes-to-selector.min.mjs":"95jnt","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"h5zLY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Parallax);
var _utilsMinMjs = require("../shared/utils.min.mjs");
function Parallax(a) {
    let { swiper: e, extendParams: t, on: l } = a;
    t({
        parallax: {
            enabled: !1
        }
    });
    const r = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]", s = (a, t)=>{
        const { rtl: l } = e, r = l ? -1 : 1, s = a.getAttribute("data-swiper-parallax") || "0";
        let i = a.getAttribute("data-swiper-parallax-x"), p = a.getAttribute("data-swiper-parallax-y");
        const n = a.getAttribute("data-swiper-parallax-scale"), o = a.getAttribute("data-swiper-parallax-opacity"), d = a.getAttribute("data-swiper-parallax-rotate");
        if (i || p ? (i = i || "0", p = p || "0") : e.isHorizontal() ? (i = s, p = "0") : (p = s, i = "0"), i = i.indexOf("%") >= 0 ? parseInt(i, 10) * t * r + "%" : i * t * r + "px", p = p.indexOf("%") >= 0 ? parseInt(p, 10) * t + "%" : p * t + "px", null != o) {
            const e = o - (o - 1) * (1 - Math.abs(t));
            a.style.opacity = e;
        }
        let x = `translate3d(${i}, ${p}, 0px)`;
        if (null != n) x += ` scale(${n - (n - 1) * (1 - Math.abs(t))})`;
        if (d && null != d) x += ` rotate(${d * t * -1}deg)`;
        a.style.transform = x;
    }, i = ()=>{
        const { el: a, slides: t, progress: l, snapGrid: i, isElement: p } = e, n = (0, _utilsMinMjs.e)(a, r);
        e.isElement && n.push(...(0, _utilsMinMjs.e)(e.hostEl, r)), n.forEach((a)=>{
            s(a, l);
        }), t.forEach((a, t)=>{
            let p = a.progress;
            e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (p += Math.ceil(t / 2) - l * (i.length - 1)), p = Math.min(Math.max(p, -1), 1), a.querySelectorAll(`${r}, [data-swiper-parallax-rotate]`).forEach((a)=>{
                s(a, p);
            });
        });
    };
    l("beforeInit", ()=>{
        e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
    }), l("init", ()=>{
        e.params.parallax.enabled && i();
    }), l("setTranslate", ()=>{
        e.params.parallax.enabled && i();
    }), l("setTransition", (a, t)=>{
        e.params.parallax.enabled && function(a) {
            void 0 === a && (a = e.params.speed);
            const { el: t, hostEl: l } = e, s = [
                ...t.querySelectorAll(r)
            ];
            e.isElement && s.push(...l.querySelectorAll(r)), s.forEach((e)=>{
                let t = parseInt(e.getAttribute("data-swiper-parallax-duration"), 10) || a;
                0 === a && (t = 0), e.style.transitionDuration = `${t}ms`;
            });
        }(t);
    });
}

},{"../shared/utils.min.mjs":"9TwJM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7jyjq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Zoom);
var _ssrWindowEsmMinMjs = require("../shared/ssr-window.esm.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function Zoom(e) {
    let { swiper: t, extendParams: i, on: a, emit: r } = e;
    const s = (0, _ssrWindowEsmMinMjs.a)();
    i({
        zoom: {
            enabled: !1,
            limitToOriginalSize: !1,
            maxRatio: 3,
            minRatio: 1,
            panOnMouseMove: !1,
            toggle: !0,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed"
        }
    }), t.zoom = {
        enabled: !1
    };
    let o = 1, n = !1, l = !1, m = {
        x: 0,
        y: 0
    };
    const c = -3;
    let d, u;
    const p = [], g = {
        originX: 0,
        originY: 0,
        slideEl: void 0,
        slideWidth: void 0,
        slideHeight: void 0,
        imageEl: void 0,
        imageWrapEl: void 0,
        maxRatio: 3
    }, h = {
        isTouched: void 0,
        isMoved: void 0,
        currentX: void 0,
        currentY: void 0,
        minX: void 0,
        minY: void 0,
        maxX: void 0,
        maxY: void 0,
        width: void 0,
        height: void 0,
        startX: void 0,
        startY: void 0,
        touchesStart: {},
        touchesCurrent: {}
    }, E = {
        x: void 0,
        y: void 0,
        prevPositionX: void 0,
        prevPositionY: void 0,
        prevTime: void 0
    };
    let v, f = 1;
    function x() {
        if (p.length < 2) return 1;
        const e = p[0].pageX, t = p[0].pageY, i = p[1].pageX, a = p[1].pageY;
        return Math.sqrt((i - e) ** 2 + (a - t) ** 2);
    }
    function X() {
        const e = t.params.zoom, i = g.imageWrapEl.getAttribute("data-swiper-zoom") || e.maxRatio;
        if (e.limitToOriginalSize && g.imageEl && g.imageEl.naturalWidth) {
            const e = g.imageEl.naturalWidth / g.imageEl.offsetWidth;
            return Math.min(e, i);
        }
        return i;
    }
    function Y(e) {
        const i = t.isElement ? "swiper-slide" : `.${t.params.slideClass}`;
        return !!e.target.matches(i) || t.slides.filter((t)=>t.contains(e.target)).length > 0;
    }
    function y(e) {
        const i = `.${t.params.zoom.containerClass}`;
        return !!e.target.matches(i) || [
            ...t.hostEl.querySelectorAll(i)
        ].filter((t)=>t.contains(e.target)).length > 0;
    }
    function M(e) {
        if ("mouse" === e.pointerType && p.splice(0, p.length), !Y(e)) return;
        const i = t.params.zoom;
        if (d = !1, u = !1, p.push(e), !(p.length < 2)) {
            if (d = !0, g.scaleStart = x(), !g.slideEl) {
                g.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`), g.slideEl || (g.slideEl = t.slides[t.activeIndex]);
                let a = g.slideEl.querySelector(`.${i.containerClass}`);
                if (a && (a = a.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), g.imageEl = a, g.imageWrapEl = a ? (0, _utilsMinMjs.a)(g.imageEl, `.${i.containerClass}`)[0] : void 0, !g.imageWrapEl) return void (g.imageEl = void 0);
                g.maxRatio = X();
            }
            if (g.imageEl) {
                const [e, t] = function() {
                    if (p.length < 2) return {
                        x: null,
                        y: null
                    };
                    const e = g.imageEl.getBoundingClientRect();
                    return [
                        (p[0].pageX + (p[1].pageX - p[0].pageX) / 2 - e.x - s.scrollX) / o,
                        (p[0].pageY + (p[1].pageY - p[0].pageY) / 2 - e.y - s.scrollY) / o
                    ];
                }();
                g.originX = e, g.originY = t, g.imageEl.style.transitionDuration = "0ms";
            }
            n = !0;
        }
    }
    function z(e) {
        if (!Y(e)) return;
        const i = t.params.zoom, a = t.zoom, r = p.findIndex((t)=>t.pointerId === e.pointerId);
        r >= 0 && (p[r] = e), p.length < 2 || (u = !0, g.scaleMove = x(), g.imageEl && (a.scale = g.scaleMove / g.scaleStart * o, a.scale > g.maxRatio && (a.scale = g.maxRatio - 1 + (a.scale - g.maxRatio + 1) ** .5), a.scale < i.minRatio && (a.scale = i.minRatio + 1 - (i.minRatio - a.scale + 1) ** .5), g.imageEl.style.transform = `translate3d(0,0,0) scale(${a.scale})`));
    }
    function C(e) {
        if (!Y(e)) return;
        if ("mouse" === e.pointerType && "pointerout" === e.type) return;
        const i = t.params.zoom, a = t.zoom, r = p.findIndex((t)=>t.pointerId === e.pointerId);
        r >= 0 && p.splice(r, 1), d && u && (d = !1, u = !1, g.imageEl && (a.scale = Math.max(Math.min(a.scale, g.maxRatio), i.minRatio), g.imageEl.style.transitionDuration = `${t.params.speed}ms`, g.imageEl.style.transform = `translate3d(0,0,0) scale(${a.scale})`, o = a.scale, n = !1, a.scale > 1 && g.slideEl ? g.slideEl.classList.add(`${i.zoomedSlideClass}`) : a.scale <= 1 && g.slideEl && g.slideEl.classList.remove(`${i.zoomedSlideClass}`), 1 === a.scale && (g.originX = 0, g.originY = 0, g.slideEl = void 0)));
    }
    function W() {
        t.touchEventsData.preventTouchMoveFromPointerMove = !1;
    }
    function w(e) {
        const i = "mouse" === e.pointerType && t.params.zoom.panOnMouseMove;
        if (!Y(e) || !y(e)) return;
        const a = t.zoom;
        if (!g.imageEl) return;
        if (!h.isTouched || !g.slideEl) return void (i && b(e));
        if (i) return void b(e);
        h.isMoved || (h.width = g.imageEl.offsetWidth || g.imageEl.clientWidth, h.height = g.imageEl.offsetHeight || g.imageEl.clientHeight, h.startX = (0, _utilsMinMjs.j)(g.imageWrapEl, "x") || 0, h.startY = (0, _utilsMinMjs.j)(g.imageWrapEl, "y") || 0, g.slideWidth = g.slideEl.offsetWidth, g.slideHeight = g.slideEl.offsetHeight, g.imageWrapEl.style.transitionDuration = "0ms");
        const r = h.width * a.scale, s = h.height * a.scale;
        h.minX = Math.min(g.slideWidth / 2 - r / 2, 0), h.maxX = -h.minX, h.minY = Math.min(g.slideHeight / 2 - s / 2, 0), h.maxY = -h.minY, h.touchesCurrent.x = p.length > 0 ? p[0].pageX : e.pageX, h.touchesCurrent.y = p.length > 0 ? p[0].pageY : e.pageY;
        if (Math.max(Math.abs(h.touchesCurrent.x - h.touchesStart.x), Math.abs(h.touchesCurrent.y - h.touchesStart.y)) > 5 && (t.allowClick = !1), !h.isMoved && !n) {
            if (t.isHorizontal() && (Math.floor(h.minX) === Math.floor(h.startX) && h.touchesCurrent.x < h.touchesStart.x || Math.floor(h.maxX) === Math.floor(h.startX) && h.touchesCurrent.x > h.touchesStart.x)) return h.isTouched = !1, void W();
            if (!t.isHorizontal() && (Math.floor(h.minY) === Math.floor(h.startY) && h.touchesCurrent.y < h.touchesStart.y || Math.floor(h.maxY) === Math.floor(h.startY) && h.touchesCurrent.y > h.touchesStart.y)) return h.isTouched = !1, void W();
        }
        e.cancelable && e.preventDefault(), e.stopPropagation(), clearTimeout(v), t.touchEventsData.preventTouchMoveFromPointerMove = !0, v = setTimeout(()=>{
            t.destroyed || W();
        }), h.isMoved = !0;
        const l = (a.scale - o) / (g.maxRatio - t.params.zoom.minRatio), { originX: m, originY: c } = g;
        h.currentX = h.touchesCurrent.x - h.touchesStart.x + h.startX + l * (h.width - 2 * m), h.currentY = h.touchesCurrent.y - h.touchesStart.y + h.startY + l * (h.height - 2 * c), h.currentX < h.minX && (h.currentX = h.minX + 1 - (h.minX - h.currentX + 1) ** .8), h.currentX > h.maxX && (h.currentX = h.maxX - 1 + (h.currentX - h.maxX + 1) ** .8), h.currentY < h.minY && (h.currentY = h.minY + 1 - (h.minY - h.currentY + 1) ** .8), h.currentY > h.maxY && (h.currentY = h.maxY - 1 + (h.currentY - h.maxY + 1) ** .8), E.prevPositionX || (E.prevPositionX = h.touchesCurrent.x), E.prevPositionY || (E.prevPositionY = h.touchesCurrent.y), E.prevTime || (E.prevTime = Date.now()), E.x = (h.touchesCurrent.x - E.prevPositionX) / (Date.now() - E.prevTime) / 2, E.y = (h.touchesCurrent.y - E.prevPositionY) / (Date.now() - E.prevTime) / 2, Math.abs(h.touchesCurrent.x - E.prevPositionX) < 2 && (E.x = 0), Math.abs(h.touchesCurrent.y - E.prevPositionY) < 2 && (E.y = 0), E.prevPositionX = h.touchesCurrent.x, E.prevPositionY = h.touchesCurrent.y, E.prevTime = Date.now(), g.imageWrapEl.style.transform = `translate3d(${h.currentX}px, ${h.currentY}px,0)`;
    }
    function S() {
        const e = t.zoom;
        g.slideEl && t.activeIndex !== t.slides.indexOf(g.slideEl) && (g.imageEl && (g.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), g.imageWrapEl && (g.imageWrapEl.style.transform = "translate3d(0,0,0)"), g.slideEl.classList.remove(`${t.params.zoom.zoomedSlideClass}`), e.scale = 1, o = 1, g.slideEl = void 0, g.imageEl = void 0, g.imageWrapEl = void 0, g.originX = 0, g.originY = 0);
    }
    function b(e) {
        if (o <= 1 || !g.imageWrapEl) return;
        if (!Y(e) || !y(e)) return;
        const t = s.getComputedStyle(g.imageWrapEl).transform, i = new s.DOMMatrix(t);
        if (!l) return l = !0, m.x = e.clientX, m.y = e.clientY, h.startX = i.e, h.startY = i.f, h.width = g.imageEl.offsetWidth || g.imageEl.clientWidth, h.height = g.imageEl.offsetHeight || g.imageEl.clientHeight, g.slideWidth = g.slideEl.offsetWidth, void (g.slideHeight = g.slideEl.offsetHeight);
        const a = (e.clientX - m.x) * c, r = (e.clientY - m.y) * c, n = h.width * o, d = h.height * o, u = g.slideWidth, p = g.slideHeight, E = Math.min(u / 2 - n / 2, 0), v = -E, f = Math.min(p / 2 - d / 2, 0), x = -f, X = Math.max(Math.min(h.startX + a, v), E), M = Math.max(Math.min(h.startY + r, x), f);
        g.imageWrapEl.style.transitionDuration = "0ms", g.imageWrapEl.style.transform = `translate3d(${X}px, ${M}px, 0)`, m.x = e.clientX, m.y = e.clientY, h.startX = X, h.startY = M, h.currentX = X, h.currentY = M;
    }
    function $(e) {
        const i = t.zoom, a = t.params.zoom;
        if (!g.slideEl) {
            e && e.target && (g.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`)), g.slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? g.slideEl = (0, _utilsMinMjs.e)(t.slidesEl, `.${t.params.slideActiveClass}`)[0] : g.slideEl = t.slides[t.activeIndex]);
            let i = g.slideEl.querySelector(`.${a.containerClass}`);
            i && (i = i.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), g.imageEl = i, g.imageWrapEl = i ? (0, _utilsMinMjs.a)(g.imageEl, `.${a.containerClass}`)[0] : void 0;
        }
        if (!g.imageEl || !g.imageWrapEl) return;
        let r, n, l, m, c, d, u, p, E, v, f, x, Y, y, M, z, C, W;
        t.params.cssMode && (t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.touchAction = "none"), g.slideEl.classList.add(`${a.zoomedSlideClass}`), void 0 === h.touchesStart.x && e ? (r = e.pageX, n = e.pageY) : (r = h.touchesStart.x, n = h.touchesStart.y);
        const w = o, S = "number" == typeof e ? e : null;
        1 === o && S && (r = void 0, n = void 0, h.touchesStart.x = void 0, h.touchesStart.y = void 0);
        const b = X();
        i.scale = S || b, o = S || b, !e || 1 === o && S ? (u = 0, p = 0) : (C = g.slideEl.offsetWidth, W = g.slideEl.offsetHeight, l = (0, _utilsMinMjs.b)(g.slideEl).left + s.scrollX, m = (0, _utilsMinMjs.b)(g.slideEl).top + s.scrollY, c = l + C / 2 - r, d = m + W / 2 - n, E = g.imageEl.offsetWidth || g.imageEl.clientWidth, v = g.imageEl.offsetHeight || g.imageEl.clientHeight, f = E * i.scale, x = v * i.scale, Y = Math.min(C / 2 - f / 2, 0), y = Math.min(W / 2 - x / 2, 0), M = -Y, z = -y, w > 0 && S && "number" == typeof h.currentX && "number" == typeof h.currentY ? (u = h.currentX * i.scale / w, p = h.currentY * i.scale / w) : (u = c * i.scale, p = d * i.scale), u < Y && (u = Y), u > M && (u = M), p < y && (p = y), p > z && (p = z)), S && 1 === i.scale && (g.originX = 0, g.originY = 0), h.currentX = u, h.currentY = p, g.imageWrapEl.style.transitionDuration = "300ms", g.imageWrapEl.style.transform = `translate3d(${u}px, ${p}px,0)`, g.imageEl.style.transitionDuration = "300ms", g.imageEl.style.transform = `translate3d(0,0,0) scale(${i.scale})`;
    }
    function T() {
        const e = t.zoom, i = t.params.zoom;
        if (!g.slideEl) {
            t.params.virtual && t.params.virtual.enabled && t.virtual ? g.slideEl = (0, _utilsMinMjs.e)(t.slidesEl, `.${t.params.slideActiveClass}`)[0] : g.slideEl = t.slides[t.activeIndex];
            let e = g.slideEl.querySelector(`.${i.containerClass}`);
            e && (e = e.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), g.imageEl = e, g.imageWrapEl = e ? (0, _utilsMinMjs.a)(g.imageEl, `.${i.containerClass}`)[0] : void 0;
        }
        g.imageEl && g.imageWrapEl && (t.params.cssMode && (t.wrapperEl.style.overflow = "", t.wrapperEl.style.touchAction = ""), e.scale = 1, o = 1, h.currentX = void 0, h.currentY = void 0, h.touchesStart.x = void 0, h.touchesStart.y = void 0, g.imageWrapEl.style.transitionDuration = "300ms", g.imageWrapEl.style.transform = "translate3d(0,0,0)", g.imageEl.style.transitionDuration = "300ms", g.imageEl.style.transform = "translate3d(0,0,0) scale(1)", g.slideEl.classList.remove(`${i.zoomedSlideClass}`), g.slideEl = void 0, g.originX = 0, g.originY = 0, t.params.zoom.panOnMouseMove && (m = {
            x: 0,
            y: 0
        }, l && (l = !1, h.startX = 0, h.startY = 0)));
    }
    function L(e) {
        const i = t.zoom;
        i.scale && 1 !== i.scale ? T() : $(e);
    }
    function P() {
        return {
            passiveListener: !!t.params.passiveListeners && {
                passive: !0,
                capture: !1
            },
            activeListenerWithCapture: !t.params.passiveListeners || {
                passive: !1,
                capture: !0
            }
        };
    }
    function D() {
        const e = t.zoom;
        if (e.enabled) return;
        e.enabled = !0;
        const { passiveListener: i, activeListenerWithCapture: a } = P();
        t.wrapperEl.addEventListener("pointerdown", M, i), t.wrapperEl.addEventListener("pointermove", z, a), [
            "pointerup",
            "pointercancel",
            "pointerout"
        ].forEach((e)=>{
            t.wrapperEl.addEventListener(e, C, i);
        }), t.wrapperEl.addEventListener("pointermove", w, a);
    }
    function H() {
        const e = t.zoom;
        if (!e.enabled) return;
        e.enabled = !1;
        const { passiveListener: i, activeListenerWithCapture: a } = P();
        t.wrapperEl.removeEventListener("pointerdown", M, i), t.wrapperEl.removeEventListener("pointermove", z, a), [
            "pointerup",
            "pointercancel",
            "pointerout"
        ].forEach((e)=>{
            t.wrapperEl.removeEventListener(e, C, i);
        }), t.wrapperEl.removeEventListener("pointermove", w, a);
    }
    Object.defineProperty(t.zoom, "scale", {
        get: ()=>f,
        set (e) {
            if (f !== e) {
                const t = g.imageEl, i = g.slideEl;
                r("zoomChange", e, t, i);
            }
            f = e;
        }
    }), a("init", ()=>{
        t.params.zoom.enabled && D();
    }), a("destroy", ()=>{
        H();
    }), a("touchStart", (e, i)=>{
        t.zoom.enabled && function(e) {
            const i = t.device;
            if (!g.imageEl) return;
            if (h.isTouched) return;
            i.android && e.cancelable && e.preventDefault(), h.isTouched = !0;
            const a = p.length > 0 ? p[0] : e;
            h.touchesStart.x = a.pageX, h.touchesStart.y = a.pageY;
        }(i);
    }), a("touchEnd", (e, i)=>{
        t.zoom.enabled && function() {
            const e = t.zoom;
            if (p.length = 0, !g.imageEl) return;
            if (!h.isTouched || !h.isMoved) return h.isTouched = !1, void (h.isMoved = !1);
            h.isTouched = !1, h.isMoved = !1;
            let i = 300, a = 300;
            const r = E.x * i, s = h.currentX + r, o = E.y * a, n = h.currentY + o;
            0 !== E.x && (i = Math.abs((s - h.currentX) / E.x)), 0 !== E.y && (a = Math.abs((n - h.currentY) / E.y));
            const l = Math.max(i, a);
            h.currentX = s, h.currentY = n;
            const m = h.width * e.scale, c = h.height * e.scale;
            h.minX = Math.min(g.slideWidth / 2 - m / 2, 0), h.maxX = -h.minX, h.minY = Math.min(g.slideHeight / 2 - c / 2, 0), h.maxY = -h.minY, h.currentX = Math.max(Math.min(h.currentX, h.maxX), h.minX), h.currentY = Math.max(Math.min(h.currentY, h.maxY), h.minY), g.imageWrapEl.style.transitionDuration = `${l}ms`, g.imageWrapEl.style.transform = `translate3d(${h.currentX}px, ${h.currentY}px,0)`;
        }();
    }), a("doubleTap", (e, i)=>{
        !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && L(i);
    }), a("transitionEnd", ()=>{
        t.zoom.enabled && t.params.zoom.enabled && S();
    }), a("slideChange", ()=>{
        t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && S();
    }), Object.assign(t.zoom, {
        enable: D,
        disable: H,
        in: $,
        out: T,
        toggle: L
    });
}

},{"../shared/ssr-window.esm.min.mjs":"iD2WK","../shared/utils.min.mjs":"9TwJM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8mPKa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Controller);
var _utilsMinMjs = require("../shared/utils.min.mjs");
function Controller(t) {
    let { swiper: r, extendParams: e, on: n } = t;
    function o(t, r) {
        const e = function() {
            let t, r, e;
            return (n, o)=>{
                for(r = -1, t = n.length; t - r > 1;)e = t + r >> 1, n[e] <= o ? r = e : t = e;
                return t;
            };
        }();
        let n, o;
        return this.x = t, this.y = r, this.lastIndex = t.length - 1, this.interpolate = function(t) {
            return t ? (o = e(this.x, t), n = o - 1, (t - this.x[n]) * (this.y[o] - this.y[n]) / (this.x[o] - this.x[n]) + this.y[n]) : 0;
        }, this;
    }
    function l() {
        r.controller.control && r.controller.spline && (r.controller.spline = void 0, delete r.controller.spline);
    }
    e({
        controller: {
            control: void 0,
            inverse: !1,
            by: "slide"
        }
    }), r.controller = {
        control: void 0
    }, n("beforeInit", ()=>{
        if ("undefined" != typeof window && ("string" == typeof r.params.controller.control || r.params.controller.control instanceof HTMLElement)) ("string" == typeof r.params.controller.control ? [
            ...document.querySelectorAll(r.params.controller.control)
        ] : [
            r.params.controller.control
        ]).forEach((t)=>{
            if (r.controller.control || (r.controller.control = []), t && t.swiper) r.controller.control.push(t.swiper);
            else if (t) {
                const e = `${r.params.eventsPrefix}init`, n = (o)=>{
                    r.controller.control.push(o.detail[0]), r.update(), t.removeEventListener(e, n);
                };
                t.addEventListener(e, n);
            }
        });
        else r.controller.control = r.params.controller.control;
    }), n("update", ()=>{
        l();
    }), n("resize", ()=>{
        l();
    }), n("observerUpdate", ()=>{
        l();
    }), n("setTranslate", (t, e, n)=>{
        r.controller.control && !r.controller.control.destroyed && r.controller.setTranslate(e, n);
    }), n("setTransition", (t, e, n)=>{
        r.controller.control && !r.controller.control.destroyed && r.controller.setTransition(e, n);
    }), Object.assign(r.controller, {
        setTranslate: function(t, e) {
            const n = r.controller.control;
            let l, s;
            const i = r.constructor;
            function a(t) {
                if (t.destroyed) return;
                const e = r.rtlTranslate ? -r.translate : r.translate;
                "slide" === r.params.controller.by && (!function(t) {
                    r.controller.spline = r.params.loop ? new o(r.slidesGrid, t.slidesGrid) : new o(r.snapGrid, t.snapGrid);
                }(t), s = -r.controller.spline.interpolate(-e)), s && "container" !== r.params.controller.by || (l = (t.maxTranslate() - t.minTranslate()) / (r.maxTranslate() - r.minTranslate()), !Number.isNaN(l) && Number.isFinite(l) || (l = 1), s = (e - r.minTranslate()) * l + t.minTranslate()), r.params.controller.inverse && (s = t.maxTranslate() - s), t.updateProgress(s), t.setTranslate(s, r), t.updateActiveIndex(), t.updateSlidesClasses();
            }
            if (Array.isArray(n)) for(let t = 0; t < n.length; t += 1)n[t] !== e && n[t] instanceof i && a(n[t]);
            else n instanceof i && e !== n && a(n);
        },
        setTransition: function(t, e) {
            const n = r.constructor, o = r.controller.control;
            let l;
            function s(e) {
                e.destroyed || (e.setTransition(t, r), 0 !== t && (e.transitionStart(), e.params.autoHeight && (0, _utilsMinMjs.n)(()=>{
                    e.updateAutoHeight();
                }), (0, _utilsMinMjs.k)(e.wrapperEl, ()=>{
                    o && e.transitionEnd();
                })));
            }
            if (Array.isArray(o)) for(l = 0; l < o.length; l += 1)o[l] !== e && o[l] instanceof n && s(o[l]);
            else o instanceof n && e !== o && s(o);
        }
    });
}

},{"../shared/utils.min.mjs":"9TwJM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bWney":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>A11y);
var _ssrWindowEsmMinMjs = require("../shared/ssr-window.esm.min.mjs");
var _classesToSelectorMinMjs = require("../shared/classes-to-selector.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function A11y(e) {
    let { swiper: a, extendParams: t, on: n } = e;
    t({
        a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            slideLabelMessage: "{{index}} / {{slidesLength}}",
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            containerRole: null,
            itemRoleDescriptionMessage: null,
            slideRole: "group",
            id: null,
            scrollOnFocus: !0
        }
    }), a.a11y = {
        clicked: !1
    };
    let i, s, r = null, l = (new Date).getTime();
    function o(e) {
        const a = r;
        0 !== a.length && (a.innerHTML = "", a.innerHTML = e);
    }
    function c(e) {
        (e = (0, _utilsMinMjs.m)(e)).forEach((e)=>{
            e.setAttribute("tabIndex", "0");
        });
    }
    function d(e) {
        (e = (0, _utilsMinMjs.m)(e)).forEach((e)=>{
            e.setAttribute("tabIndex", "-1");
        });
    }
    function m(e, a) {
        (e = (0, _utilsMinMjs.m)(e)).forEach((e)=>{
            e.setAttribute("role", a);
        });
    }
    function p(e, a) {
        (e = (0, _utilsMinMjs.m)(e)).forEach((e)=>{
            e.setAttribute("aria-roledescription", a);
        });
    }
    function g(e, a) {
        (e = (0, _utilsMinMjs.m)(e)).forEach((e)=>{
            e.setAttribute("aria-label", a);
        });
    }
    function u(e) {
        (e = (0, _utilsMinMjs.m)(e)).forEach((e)=>{
            e.setAttribute("aria-disabled", !0);
        });
    }
    function E(e) {
        (e = (0, _utilsMinMjs.m)(e)).forEach((e)=>{
            e.setAttribute("aria-disabled", !1);
        });
    }
    function f(e) {
        if (13 !== e.keyCode && 32 !== e.keyCode) return;
        const t = a.params.a11y, n = e.target;
        if (!a.pagination || !a.pagination.el || n !== a.pagination.el && !a.pagination.el.contains(e.target) || e.target.matches((0, _classesToSelectorMinMjs.c)(a.params.pagination.bulletClass))) {
            if (a.navigation && a.navigation.prevEl && a.navigation.nextEl) {
                const e = (0, _utilsMinMjs.m)(a.navigation.prevEl);
                (0, _utilsMinMjs.m)(a.navigation.nextEl).includes(n) && (a.isEnd && !a.params.loop || a.slideNext(), a.isEnd ? o(t.lastSlideMessage) : o(t.nextSlideMessage)), e.includes(n) && (a.isBeginning && !a.params.loop || a.slidePrev(), a.isBeginning ? o(t.firstSlideMessage) : o(t.prevSlideMessage));
            }
            a.pagination && n.matches((0, _classesToSelectorMinMjs.c)(a.params.pagination.bulletClass)) && n.click();
        }
    }
    function v() {
        return a.pagination && a.pagination.bullets && a.pagination.bullets.length;
    }
    function y() {
        return v() && a.params.pagination.clickable;
    }
    const b = (e, a, t)=>{
        c(e), "BUTTON" !== e.tagName && (m(e, "button"), e.addEventListener("keydown", f)), g(e, t), function(e, a) {
            (e = (0, _utilsMinMjs.m)(e)).forEach((e)=>{
                e.setAttribute("aria-controls", a);
            });
        }(e, a);
    }, h = (e)=>{
        s && s !== e.target && !s.contains(e.target) && (i = !0), a.a11y.clicked = !0;
    }, A = ()=>{
        i = !1, requestAnimationFrame(()=>{
            requestAnimationFrame(()=>{
                a.destroyed || (a.a11y.clicked = !1);
            });
        });
    }, k = (e)=>{
        l = (new Date).getTime();
    }, M = (e)=>{
        if (a.a11y.clicked || !a.params.a11y.scrollOnFocus) return;
        if ((new Date).getTime() - l < 100) return;
        const t = e.target.closest(`.${a.params.slideClass}, swiper-slide`);
        if (!t || !a.slides.includes(t)) return;
        s = t;
        const n = a.slides.indexOf(t) === a.activeIndex, r = a.params.watchSlidesProgress && a.visibleSlides && a.visibleSlides.includes(t);
        n || r || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (a.isHorizontal() ? a.el.scrollLeft = 0 : a.el.scrollTop = 0, requestAnimationFrame(()=>{
            i || (a.params.loop ? a.slideToLoop(parseInt(t.getAttribute("data-swiper-slide-index")), 0) : a.slideTo(a.slides.indexOf(t), 0), i = !1);
        }));
    }, x = ()=>{
        const e = a.params.a11y;
        e.itemRoleDescriptionMessage && p(a.slides, e.itemRoleDescriptionMessage), e.slideRole && m(a.slides, e.slideRole);
        const t = a.slides.length;
        e.slideLabelMessage && a.slides.forEach((n, i)=>{
            const s = a.params.loop ? parseInt(n.getAttribute("data-swiper-slide-index"), 10) : i;
            g(n, e.slideLabelMessage.replace(/\{\{index\}\}/, s + 1).replace(/\{\{slidesLength\}\}/, t));
        });
    }, L = ()=>{
        const e = a.params.a11y;
        a.el.append(r);
        const t = a.el;
        e.containerRoleDescriptionMessage && p(t, e.containerRoleDescriptionMessage), e.containerMessage && g(t, e.containerMessage), e.containerRole && m(t, e.containerRole);
        const n = a.wrapperEl, i = e.id || n.getAttribute("id") || `swiper-wrapper-${s = 16, void 0 === s && (s = 16), "x".repeat(s).replace(/x/g, ()=>Math.round(16 * Math.random()).toString(16))}`;
        var s;
        const l = a.params.autoplay && a.params.autoplay.enabled ? "off" : "polite";
        var o;
        o = i, (0, _utilsMinMjs.m)(n).forEach((e)=>{
            e.setAttribute("id", o);
        }), function(e, a) {
            (e = (0, _utilsMinMjs.m)(e)).forEach((e)=>{
                e.setAttribute("aria-live", a);
            });
        }(n, l), x();
        let { nextEl: c, prevEl: d } = a.navigation ? a.navigation : {};
        if (c = (0, _utilsMinMjs.m)(c), d = (0, _utilsMinMjs.m)(d), c && c.forEach((a)=>b(a, i, e.nextSlideMessage)), d && d.forEach((a)=>b(a, i, e.prevSlideMessage)), y()) (0, _utilsMinMjs.m)(a.pagination.el).forEach((e)=>{
            e.addEventListener("keydown", f);
        });
        (0, _ssrWindowEsmMinMjs.g)().addEventListener("visibilitychange", k), a.el.addEventListener("focus", M, !0), a.el.addEventListener("focus", M, !0), a.el.addEventListener("pointerdown", h, !0), a.el.addEventListener("pointerup", A, !0);
    };
    n("beforeInit", ()=>{
        r = (0, _utilsMinMjs.c)("span", a.params.a11y.notificationClass), r.setAttribute("aria-live", "assertive"), r.setAttribute("aria-atomic", "true");
    }), n("afterInit", ()=>{
        a.params.a11y.enabled && L();
    }), n("slidesLengthChange snapGridLengthChange slidesGridLengthChange", ()=>{
        a.params.a11y.enabled && x();
    }), n("fromEdge toEdge afterInit lock unlock", ()=>{
        a.params.a11y.enabled && function() {
            if (a.params.loop || a.params.rewind || !a.navigation) return;
            const { nextEl: e, prevEl: t } = a.navigation;
            t && (a.isBeginning ? (u(t), d(t)) : (E(t), c(t))), e && (a.isEnd ? (u(e), d(e)) : (E(e), c(e)));
        }();
    }), n("paginationUpdate", ()=>{
        a.params.a11y.enabled && function() {
            const e = a.params.a11y;
            v() && a.pagination.bullets.forEach((t)=>{
                a.params.pagination.clickable && (c(t), a.params.pagination.renderBullet || (m(t, "button"), g(t, e.paginationBulletMessage.replace(/\{\{index\}\}/, (0, _utilsMinMjs.h)(t) + 1)))), t.matches((0, _classesToSelectorMinMjs.c)(a.params.pagination.bulletActiveClass)) ? t.setAttribute("aria-current", "true") : t.removeAttribute("aria-current");
            });
        }();
    }), n("destroy", ()=>{
        a.params.a11y.enabled && function() {
            r && r.remove();
            let { nextEl: e, prevEl: t } = a.navigation ? a.navigation : {};
            e = (0, _utilsMinMjs.m)(e), t = (0, _utilsMinMjs.m)(t), e && e.forEach((e)=>e.removeEventListener("keydown", f)), t && t.forEach((e)=>e.removeEventListener("keydown", f)), y() && (0, _utilsMinMjs.m)(a.pagination.el).forEach((e)=>{
                e.removeEventListener("keydown", f);
            });
            (0, _ssrWindowEsmMinMjs.g)().removeEventListener("visibilitychange", k), a.el && "string" != typeof a.el && (a.el.removeEventListener("focus", M, !0), a.el.removeEventListener("pointerdown", h, !0), a.el.removeEventListener("pointerup", A, !0));
        }();
    });
}

},{"../shared/ssr-window.esm.min.mjs":"iD2WK","../shared/classes-to-selector.min.mjs":"95jnt","../shared/utils.min.mjs":"9TwJM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"byDSE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>History);
var _ssrWindowEsmMinMjs = require("../shared/ssr-window.esm.min.mjs");
function History(e) {
    let { swiper: t, extendParams: a, on: s } = e;
    a({
        history: {
            enabled: !1,
            root: "",
            replaceState: !1,
            key: "slides",
            keepQuery: !1
        }
    });
    let r = !1, i = {};
    const l = (e)=>e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""), o = (e)=>{
        const t = (0, _ssrWindowEsmMinMjs.a)();
        let a;
        a = e ? new URL(e) : t.location;
        const s = a.pathname.slice(1).split("/").filter((e)=>"" !== e), r = s.length;
        return {
            key: s[r - 2],
            value: s[r - 1]
        };
    }, n = (e, a)=>{
        const s = (0, _ssrWindowEsmMinMjs.a)();
        if (!r || !t.params.history.enabled) return;
        let i;
        i = t.params.url ? new URL(t.params.url) : s.location;
        const o = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${a}"]`) : t.slides[a];
        let n = l(o.getAttribute("data-history"));
        if (t.params.history.root.length > 0) {
            let a = t.params.history.root;
            "/" === a[a.length - 1] && (a = a.slice(0, a.length - 1)), n = `${a}/${e ? `${e}/` : ""}${n}`;
        } else i.pathname.includes(e) || (n = `${e ? `${e}/` : ""}${n}`);
        t.params.history.keepQuery && (n += i.search);
        const p = s.history.state;
        p && p.value === n || (t.params.history.replaceState ? s.history.replaceState({
            value: n
        }, null, n) : s.history.pushState({
            value: n
        }, null, n));
    }, p = (e, a, s)=>{
        if (a) for(let r = 0, i = t.slides.length; r < i; r += 1){
            const i = t.slides[r];
            if (l(i.getAttribute("data-history")) === a) {
                const a = t.getSlideIndex(i);
                t.slideTo(a, e, s);
            }
        }
        else t.slideTo(0, e, s);
    }, d = ()=>{
        i = o(t.params.url), p(t.params.speed, i.value, !1);
    };
    s("init", ()=>{
        t.params.history.enabled && (()=>{
            const e = (0, _ssrWindowEsmMinMjs.a)();
            if (t.params.history) {
                if (!e.history || !e.history.pushState) return t.params.history.enabled = !1, void (t.params.hashNavigation.enabled = !0);
                r = !0, i = o(t.params.url), i.key || i.value ? (p(0, i.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", d)) : t.params.history.replaceState || e.addEventListener("popstate", d);
            }
        })();
    }), s("destroy", ()=>{
        t.params.history.enabled && (()=>{
            const e = (0, _ssrWindowEsmMinMjs.a)();
            t.params.history.replaceState || e.removeEventListener("popstate", d);
        })();
    }), s("transitionEnd _freeModeNoMomentumRelease", ()=>{
        r && n(t.params.history.key, t.activeIndex);
    }), s("slideChange", ()=>{
        r && t.params.cssMode && n(t.params.history.key, t.activeIndex);
    });
}

},{"../shared/ssr-window.esm.min.mjs":"iD2WK","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eJJji":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>HashNavigation);
var _ssrWindowEsmMinMjs = require("../shared/ssr-window.esm.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function HashNavigation(a) {
    let { swiper: e, extendParams: t, emit: s, on: i } = a, n = !1;
    const r = (0, _ssrWindowEsmMinMjs.g)(), h = (0, _ssrWindowEsmMinMjs.a)();
    t({
        hashNavigation: {
            enabled: !1,
            replaceState: !1,
            watchState: !1,
            getSlideIndex (a, t) {
                if (e.virtual && e.params.virtual.enabled) {
                    const a = e.slides.find((a)=>a.getAttribute("data-hash") === t);
                    if (!a) return 0;
                    return parseInt(a.getAttribute("data-swiper-slide-index"), 10);
                }
                return e.getSlideIndex((0, _utilsMinMjs.e)(e.slidesEl, `.${e.params.slideClass}[data-hash="${t}"], swiper-slide[data-hash="${t}"]`)[0]);
            }
        }
    });
    const d = ()=>{
        s("hashChange");
        const a = r.location.hash.replace("#", ""), t = e.virtual && e.params.virtual.enabled ? e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`) : e.slides[e.activeIndex];
        if (a !== (t ? t.getAttribute("data-hash") : "")) {
            const t = e.params.hashNavigation.getSlideIndex(e, a);
            if (void 0 === t || Number.isNaN(t)) return;
            e.slideTo(t);
        }
    }, l = ()=>{
        if (!n || !e.params.hashNavigation.enabled) return;
        const a = e.virtual && e.params.virtual.enabled ? e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`) : e.slides[e.activeIndex], t = a ? a.getAttribute("data-hash") || a.getAttribute("data-history") : "";
        e.params.hashNavigation.replaceState && h.history && h.history.replaceState ? (h.history.replaceState(null, null, `#${t}` || ""), s("hashSet")) : (r.location.hash = t || "", s("hashSet"));
    };
    i("init", ()=>{
        e.params.hashNavigation.enabled && (()=>{
            if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled) return;
            n = !0;
            const a = r.location.hash.replace("#", "");
            if (a) {
                const t = 0, s = e.params.hashNavigation.getSlideIndex(e, a);
                e.slideTo(s || 0, t, e.params.runCallbacksOnInit, !0);
            }
            e.params.hashNavigation.watchState && h.addEventListener("hashchange", d);
        })();
    }), i("destroy", ()=>{
        e.params.hashNavigation.enabled && e.params.hashNavigation.watchState && h.removeEventListener("hashchange", d);
    }), i("transitionEnd _freeModeNoMomentumRelease", ()=>{
        n && l();
    }), i("slideChange", ()=>{
        n && e.params.cssMode && l();
    });
}

},{"../shared/ssr-window.esm.min.mjs":"iD2WK","../shared/utils.min.mjs":"9TwJM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4Gjch":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Autoplay);
var _ssrWindowEsmMinMjs = require("../shared/ssr-window.esm.min.mjs");
function Autoplay(e) {
    let a, t, { swiper: n, extendParams: i, on: r, emit: o, params: s } = e;
    n.autoplay = {
        running: !1,
        paused: !1,
        timeLeft: 0
    }, i({
        autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !1,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1
        }
    });
    let l, p, u, d, y, m, c, g, v = s && s.autoplay ? s.autoplay.delay : 3e3, T = s && s.autoplay ? s.autoplay.delay : 3e3, f = (new Date).getTime();
    function w(e) {
        n && !n.destroyed && n.wrapperEl && e.target === n.wrapperEl && (n.wrapperEl.removeEventListener("transitionend", w), g || e.detail && e.detail.bySwiperTouchMove || S());
    }
    const b = ()=>{
        if (n.destroyed || !n.autoplay.running) return;
        n.autoplay.paused ? p = !0 : p && (T = l, p = !1);
        const e = n.autoplay.paused ? l : f + T - (new Date).getTime();
        n.autoplay.timeLeft = e, o("autoplayTimeLeft", e, e / v), t = requestAnimationFrame(()=>{
            b();
        });
    }, E = (e)=>{
        if (n.destroyed || !n.autoplay.running) return;
        cancelAnimationFrame(t), b();
        let i = void 0 === e ? n.params.autoplay.delay : e;
        v = n.params.autoplay.delay, T = n.params.autoplay.delay;
        const r = (()=>{
            let e;
            if (e = n.virtual && n.params.virtual.enabled ? n.slides.find((e)=>e.classList.contains("swiper-slide-active")) : n.slides[n.activeIndex], !e) return;
            return parseInt(e.getAttribute("data-swiper-autoplay"), 10);
        })();
        !Number.isNaN(r) && r > 0 && void 0 === e && (i = r, v = r, T = r), l = i;
        const s = n.params.speed, p = ()=>{
            n && !n.destroyed && (n.params.autoplay.reverseDirection ? !n.isBeginning || n.params.loop || n.params.rewind ? (n.slidePrev(s, !0, !0), o("autoplay")) : n.params.autoplay.stopOnLastSlide || (n.slideTo(n.slides.length - 1, s, !0, !0), o("autoplay")) : !n.isEnd || n.params.loop || n.params.rewind ? (n.slideNext(s, !0, !0), o("autoplay")) : n.params.autoplay.stopOnLastSlide || (n.slideTo(0, s, !0, !0), o("autoplay")), n.params.cssMode && (f = (new Date).getTime(), requestAnimationFrame(()=>{
                E();
            })));
        };
        return i > 0 ? (clearTimeout(a), a = setTimeout(()=>{
            p();
        }, i)) : requestAnimationFrame(()=>{
            p();
        }), i;
    }, L = ()=>{
        f = (new Date).getTime(), n.autoplay.running = !0, E(), o("autoplayStart");
    }, D = ()=>{
        n.autoplay.running = !1, clearTimeout(a), cancelAnimationFrame(t), o("autoplayStop");
    }, O = (e, t)=>{
        if (n.destroyed || !n.autoplay.running) return;
        clearTimeout(a), e || (c = !0);
        const i = ()=>{
            o("autoplayPause"), n.params.autoplay.waitForTransition ? n.wrapperEl.addEventListener("transitionend", w) : S();
        };
        if (n.autoplay.paused = !0, t) return m && (l = n.params.autoplay.delay), m = !1, void i();
        const r = l || n.params.autoplay.delay;
        l = r - ((new Date).getTime() - f), n.isEnd && l < 0 && !n.params.loop || (l < 0 && (l = 0), i());
    }, S = ()=>{
        n.isEnd && l < 0 && !n.params.loop || n.destroyed || !n.autoplay.running || (f = (new Date).getTime(), c ? (c = !1, E(l)) : E(), n.autoplay.paused = !1, o("autoplayResume"));
    }, M = ()=>{
        if (n.destroyed || !n.autoplay.running) return;
        const e = (0, _ssrWindowEsmMinMjs.g)();
        "hidden" === e.visibilityState && (c = !0, O(!0)), "visible" === e.visibilityState && S();
    }, h = (e)=>{
        "mouse" === e.pointerType && (c = !0, g = !0, n.animating || n.autoplay.paused || O(!0));
    }, A = (e)=>{
        "mouse" === e.pointerType && (g = !1, n.autoplay.paused && S());
    };
    r("init", ()=>{
        n.params.autoplay.enabled && (n.params.autoplay.pauseOnMouseEnter && (n.el.addEventListener("pointerenter", h), n.el.addEventListener("pointerleave", A)), (0, _ssrWindowEsmMinMjs.g)().addEventListener("visibilitychange", M), L());
    }), r("destroy", ()=>{
        n.el && "string" != typeof n.el && (n.el.removeEventListener("pointerenter", h), n.el.removeEventListener("pointerleave", A)), (0, _ssrWindowEsmMinMjs.g)().removeEventListener("visibilitychange", M), n.autoplay.running && D();
    }), r("_freeModeStaticRelease", ()=>{
        (d || c) && S();
    }), r("_freeModeNoMomentumRelease", ()=>{
        n.params.autoplay.disableOnInteraction ? D() : O(!0, !0);
    }), r("beforeTransitionStart", (e, a, t)=>{
        !n.destroyed && n.autoplay.running && (t || !n.params.autoplay.disableOnInteraction ? O(!0, !0) : D());
    }), r("sliderFirstMove", ()=>{
        !n.destroyed && n.autoplay.running && (n.params.autoplay.disableOnInteraction ? D() : (u = !0, d = !1, c = !1, y = setTimeout(()=>{
            c = !0, d = !0, O(!0);
        }, 200)));
    }), r("touchEnd", ()=>{
        if (!n.destroyed && n.autoplay.running && u) {
            if (clearTimeout(y), clearTimeout(a), n.params.autoplay.disableOnInteraction) return d = !1, void (u = !1);
            d && n.params.cssMode && S(), d = !1, u = !1;
        }
    }), r("slideChange", ()=>{
        !n.destroyed && n.autoplay.running && (m = !0);
    }), Object.assign(n.autoplay, {
        start: L,
        stop: D,
        pause: O,
        resume: S
    });
}

},{"../shared/ssr-window.esm.min.mjs":"iD2WK","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6EjVL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Thumb);
var _ssrWindowEsmMinMjs = require("../shared/ssr-window.esm.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function Thumb(e) {
    let { swiper: s, extendParams: i, on: t } = e;
    i({
        thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-thumbs"
        }
    });
    let r = !1, a = !1;
    function n() {
        const e = s.thumbs.swiper;
        if (!e || e.destroyed) return;
        const i = e.clickedIndex, t = e.clickedSlide;
        if (t && t.classList.contains(s.params.thumbs.slideThumbActiveClass)) return;
        if (null == i) return;
        let r;
        r = e.params.loop ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : i, s.params.loop ? s.slideToLoop(r) : s.slideTo(r);
    }
    function l() {
        const { thumbs: e } = s.params;
        if (r) return !1;
        r = !0;
        const i = s.constructor;
        if (e.swiper instanceof i) {
            if (e.swiper.destroyed) return r = !1, !1;
            s.thumbs.swiper = e.swiper, Object.assign(s.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), Object.assign(s.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), s.thumbs.swiper.update();
        } else if ((0, _utilsMinMjs.l)(e.swiper)) {
            const t = Object.assign({}, e.swiper);
            Object.assign(t, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), s.thumbs.swiper = new i(t), a = !0;
        }
        return s.thumbs.swiper.el.classList.add(s.params.thumbs.thumbsContainerClass), s.thumbs.swiper.on("tap", n), !0;
    }
    function d(e) {
        const i = s.thumbs.swiper;
        if (!i || i.destroyed) return;
        const t = "auto" === i.params.slidesPerView ? i.slidesPerViewDynamic() : i.params.slidesPerView;
        let r = 1;
        const a = s.params.thumbs.slideThumbActiveClass;
        if (s.params.slidesPerView > 1 && !s.params.centeredSlides && (r = s.params.slidesPerView), s.params.thumbs.multipleActiveThumbs || (r = 1), r = Math.floor(r), i.slides.forEach((e)=>e.classList.remove(a)), i.params.loop || i.params.virtual && i.params.virtual.enabled) for(let e = 0; e < r; e += 1)(0, _utilsMinMjs.e)(i.slidesEl, `[data-swiper-slide-index="${s.realIndex + e}"]`).forEach((e)=>{
            e.classList.add(a);
        });
        else for(let e = 0; e < r; e += 1)i.slides[s.realIndex + e] && i.slides[s.realIndex + e].classList.add(a);
        const n = s.params.thumbs.autoScrollOffset, l = n && !i.params.loop;
        if (s.realIndex !== i.realIndex || l) {
            const r = i.activeIndex;
            let a, d;
            if (i.params.loop) {
                const e = i.slides.find((e)=>e.getAttribute("data-swiper-slide-index") === `${s.realIndex}`);
                a = i.slides.indexOf(e), d = s.activeIndex > s.previousIndex ? "next" : "prev";
            } else a = s.realIndex, d = a > s.previousIndex ? "next" : "prev";
            l && (a += "next" === d ? n : -1 * n), i.visibleSlidesIndexes && i.visibleSlidesIndexes.indexOf(a) < 0 && (i.params.centeredSlides ? a = a > r ? a - Math.floor(t / 2) + 1 : a + Math.floor(t / 2) - 1 : a > r && i.params.slidesPerGroup, i.slideTo(a, e ? 0 : void 0));
        }
    }
    s.thumbs = {
        swiper: null
    }, t("beforeInit", ()=>{
        const { thumbs: e } = s.params;
        if (e && e.swiper) {
            if ("string" == typeof e.swiper || e.swiper instanceof HTMLElement) {
                const i = (0, _ssrWindowEsmMinMjs.g)(), t = ()=>{
                    const t = "string" == typeof e.swiper ? i.querySelector(e.swiper) : e.swiper;
                    if (t && t.swiper) e.swiper = t.swiper, l(), d(!0);
                    else if (t) {
                        const i = `${s.params.eventsPrefix}init`, r = (a)=>{
                            e.swiper = a.detail[0], t.removeEventListener(i, r), l(), d(!0), e.swiper.update(), s.update();
                        };
                        t.addEventListener(i, r);
                    }
                    return t;
                }, r = ()=>{
                    if (s.destroyed) return;
                    t() || requestAnimationFrame(r);
                };
                requestAnimationFrame(r);
            } else l(), d(!0);
        }
    }), t("slideChange update resize observerUpdate", ()=>{
        d();
    }), t("setTransition", (e, i)=>{
        const t = s.thumbs.swiper;
        t && !t.destroyed && t.setTransition(i);
    }), t("beforeDestroy", ()=>{
        const e = s.thumbs.swiper;
        e && !e.destroyed && a && e.destroy();
    }), Object.assign(s.thumbs, {
        init: l,
        update: d
    });
}

},{"../shared/ssr-window.esm.min.mjs":"iD2WK","../shared/utils.min.mjs":"9TwJM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3JuSP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>freeMode);
var _utilsMinMjs = require("../shared/utils.min.mjs");
function freeMode(e) {
    let { swiper: t, extendParams: o, emit: n, once: s } = e;
    o({
        freeMode: {
            enabled: !1,
            momentum: !0,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: !1,
            minimumVelocity: .02
        }
    }), Object.assign(t, {
        freeMode: {
            onTouchStart: function() {
                if (t.params.cssMode) return;
                const e = t.getTranslate();
                t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
                    currentPos: t.rtl ? t.translate : -t.translate
                });
            },
            onTouchMove: function() {
                if (t.params.cssMode) return;
                const { touchEventsData: e, touches: o } = t;
                0 === e.velocities.length && e.velocities.push({
                    position: o[t.isHorizontal() ? "startX" : "startY"],
                    time: e.touchStartTime
                }), e.velocities.push({
                    position: o[t.isHorizontal() ? "currentX" : "currentY"],
                    time: (0, _utilsMinMjs.d)()
                });
            },
            onTouchEnd: function(e) {
                let { currentPos: o } = e;
                if (t.params.cssMode) return;
                const { params: i, wrapperEl: a, rtlTranslate: r, snapGrid: l, touchEventsData: m } = t, c = (0, _utilsMinMjs.d)() - m.touchStartTime;
                if (o < -t.minTranslate()) t.slideTo(t.activeIndex);
                else if (o > -t.maxTranslate()) t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1);
                else {
                    if (i.freeMode.momentum) {
                        if (m.velocities.length > 1) {
                            const e = m.velocities.pop(), o = m.velocities.pop(), n = e.position - o.position, s = e.time - o.time;
                            t.velocity = n / s, t.velocity /= 2, Math.abs(t.velocity) < i.freeMode.minimumVelocity && (t.velocity = 0), (s > 150 || (0, _utilsMinMjs.d)() - e.time > 300) && (t.velocity = 0);
                        } else t.velocity = 0;
                        t.velocity *= i.freeMode.momentumVelocityRatio, m.velocities.length = 0;
                        let e = 1e3 * i.freeMode.momentumRatio;
                        const o = t.velocity * e;
                        let c = t.translate + o;
                        r && (c = -c);
                        let d, u = !1;
                        const f = 20 * Math.abs(t.velocity) * i.freeMode.momentumBounceRatio;
                        let p;
                        if (c < t.maxTranslate()) i.freeMode.momentumBounce ? (c + t.maxTranslate() < -f && (c = t.maxTranslate() - f), d = t.maxTranslate(), u = !0, m.allowMomentumBounce = !0) : c = t.maxTranslate(), i.loop && i.centeredSlides && (p = !0);
                        else if (c > t.minTranslate()) i.freeMode.momentumBounce ? (c - t.minTranslate() > f && (c = t.minTranslate() + f), d = t.minTranslate(), u = !0, m.allowMomentumBounce = !0) : c = t.minTranslate(), i.loop && i.centeredSlides && (p = !0);
                        else if (i.freeMode.sticky) {
                            let e;
                            for(let t = 0; t < l.length; t += 1)if (l[t] > -c) {
                                e = t;
                                break;
                            }
                            c = Math.abs(l[e] - c) < Math.abs(l[e - 1] - c) || "next" === t.swipeDirection ? l[e] : l[e - 1], c = -c;
                        }
                        if (p && s("transitionEnd", ()=>{
                            t.loopFix();
                        }), 0 !== t.velocity) {
                            if (e = r ? Math.abs((-c - t.translate) / t.velocity) : Math.abs((c - t.translate) / t.velocity), i.freeMode.sticky) {
                                const o = Math.abs((r ? -c : c) - t.translate), n = t.slidesSizesGrid[t.activeIndex];
                                e = o < n ? i.speed : o < 2 * n ? 1.5 * i.speed : 2.5 * i.speed;
                            }
                        } else if (i.freeMode.sticky) return void t.slideToClosest();
                        i.freeMode.momentumBounce && u ? (t.updateProgress(d), t.setTransition(e), t.setTranslate(c), t.transitionStart(!0, t.swipeDirection), t.animating = !0, (0, _utilsMinMjs.k)(a, ()=>{
                            t && !t.destroyed && m.allowMomentumBounce && (n("momentumBounce"), t.setTransition(i.speed), setTimeout(()=>{
                                t.setTranslate(d), (0, _utilsMinMjs.k)(a, ()=>{
                                    t && !t.destroyed && t.transitionEnd();
                                });
                            }, 0));
                        })) : t.velocity ? (n("_freeModeNoMomentumRelease"), t.updateProgress(c), t.setTransition(e), t.setTranslate(c), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, (0, _utilsMinMjs.k)(a, ()=>{
                            t && !t.destroyed && t.transitionEnd();
                        }))) : t.updateProgress(c), t.updateActiveIndex(), t.updateSlidesClasses();
                    } else {
                        if (i.freeMode.sticky) return void t.slideToClosest();
                        i.freeMode && n("_freeModeNoMomentumRelease");
                    }
                    (!i.freeMode.momentum || c >= i.longSwipesMs) && (n("_freeModeStaticRelease"), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
                }
            }
        }
    });
}

},{"../shared/utils.min.mjs":"9TwJM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eqFEI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Grid);
function Grid(e) {
    let i, r, a, t, { swiper: s, extendParams: l, on: o } = e;
    l({
        grid: {
            rows: 1,
            fill: "column"
        }
    });
    const n = ()=>{
        let e = s.params.spaceBetween;
        return "string" == typeof e && e.indexOf("%") >= 0 ? e = parseFloat(e.replace("%", "")) / 100 * s.size : "string" == typeof e && (e = parseFloat(e)), e;
    };
    o("init", ()=>{
        t = s.params.grid && s.params.grid.rows > 1;
    }), o("update", ()=>{
        const { params: e, el: i } = s, r = e.grid && e.grid.rows > 1;
        t && !r ? (i.classList.remove(`${e.containerModifierClass}grid`, `${e.containerModifierClass}grid-column`), a = 1, s.emitContainerClasses()) : !t && r && (i.classList.add(`${e.containerModifierClass}grid`), "column" === e.grid.fill && i.classList.add(`${e.containerModifierClass}grid-column`), s.emitContainerClasses()), t = r;
    }), s.grid = {
        initSlides: (e)=>{
            const { slidesPerView: t } = s.params, { rows: l, fill: o } = s.params.grid, n = s.virtual && s.params.virtual.enabled ? s.virtual.slides.length : e.length;
            a = Math.floor(n / l), i = Math.floor(n / l) === n / l ? n : Math.ceil(n / l) * l, "auto" !== t && "row" === o && (i = Math.max(i, t * l)), r = i / l;
        },
        unsetSlides: ()=>{
            s.slides && s.slides.forEach((e)=>{
                e.swiperSlideGridSet && (e.style.height = "", e.style[s.getDirectionLabel("margin-top")] = "");
            });
        },
        updateSlide: (e, t, l)=>{
            const { slidesPerGroup: o } = s.params, d = n(), { rows: p, fill: c } = s.params.grid, g = s.virtual && s.params.virtual.enabled ? s.virtual.slides.length : l.length;
            let u, h, m;
            if ("row" === c && o > 1) {
                const r = Math.floor(e / (o * p)), a = e - p * o * r, s = 0 === r ? o : Math.min(Math.ceil((g - r * p * o) / p), o);
                m = Math.floor(a / s), h = a - m * s + r * o, u = h + m * i / p, t.style.order = u;
            } else "column" === c ? (h = Math.floor(e / p), m = e - h * p, (h > a || h === a && m === p - 1) && (m += 1, m >= p && (m = 0, h += 1))) : (m = Math.floor(e / r), h = e - m * r);
            t.row = m, t.column = h, t.style.height = `calc((100% - ${(p - 1) * d}px) / ${p})`, t.style[s.getDirectionLabel("margin-top")] = 0 !== m ? d && `${d}px` : "", t.swiperSlideGridSet = !0;
        },
        updateWrapperSize: (e, r)=>{
            const { centeredSlides: a, roundLengths: t } = s.params, l = n(), { rows: o } = s.params.grid;
            if (s.virtualSize = (e + l) * i, s.virtualSize = Math.ceil(s.virtualSize / o) - l, s.params.cssMode || (s.wrapperEl.style[s.getDirectionLabel("width")] = `${s.virtualSize + l}px`), a) {
                const e = [];
                for(let i = 0; i < r.length; i += 1){
                    let a = r[i];
                    t && (a = Math.floor(a)), r[i] < s.virtualSize + r[0] && e.push(a);
                }
                r.splice(0, r.length), r.push(...e);
            }
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8I3fF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Manipulation);
function appendSlide(e) {
    const l = this, { params: o, slidesEl: i } = l;
    o.loop && l.loopDestroy();
    const t = (e)=>{
        if ("string" == typeof e) {
            const l = document.createElement("div");
            l.innerHTML = e, i.append(l.children[0]), l.innerHTML = "";
        } else i.append(e);
    };
    if ("object" == typeof e && "length" in e) for(let l = 0; l < e.length; l += 1)e[l] && t(e[l]);
    else t(e);
    l.recalcSlides(), o.loop && l.loopCreate(), o.observer && !l.isElement || l.update();
}
function prependSlide(e) {
    const l = this, { params: o, activeIndex: i, slidesEl: t } = l;
    o.loop && l.loopDestroy();
    let n = i + 1;
    const d = (e)=>{
        if ("string" == typeof e) {
            const l = document.createElement("div");
            l.innerHTML = e, t.prepend(l.children[0]), l.innerHTML = "";
        } else t.prepend(e);
    };
    if ("object" == typeof e && "length" in e) {
        for(let l = 0; l < e.length; l += 1)e[l] && d(e[l]);
        n = i + e.length;
    } else d(e);
    l.recalcSlides(), o.loop && l.loopCreate(), o.observer && !l.isElement || l.update(), l.slideTo(n, 0, !1);
}
function addSlide(e, l) {
    const o = this, { params: i, activeIndex: t, slidesEl: n } = o;
    let d = t;
    i.loop && (d -= o.loopedSlides, o.loopDestroy(), o.recalcSlides());
    const s = o.slides.length;
    if (e <= 0) return void o.prependSlide(l);
    if (e >= s) return void o.appendSlide(l);
    let p = d > e ? d + 1 : d;
    const r = [];
    for(let l = s - 1; l >= e; l -= 1){
        const e = o.slides[l];
        e.remove(), r.unshift(e);
    }
    if ("object" == typeof l && "length" in l) {
        for(let e = 0; e < l.length; e += 1)l[e] && n.append(l[e]);
        p = d > e ? d + l.length : d;
    } else n.append(l);
    for(let e = 0; e < r.length; e += 1)n.append(r[e]);
    o.recalcSlides(), i.loop && o.loopCreate(), i.observer && !o.isElement || o.update(), i.loop ? o.slideTo(p + o.loopedSlides, 0, !1) : o.slideTo(p, 0, !1);
}
function removeSlide(e) {
    const l = this, { params: o, activeIndex: i } = l;
    let t = i;
    o.loop && (t -= l.loopedSlides, l.loopDestroy());
    let n, d = t;
    if ("object" == typeof e && "length" in e) {
        for(let o = 0; o < e.length; o += 1)n = e[o], l.slides[n] && l.slides[n].remove(), n < d && (d -= 1);
        d = Math.max(d, 0);
    } else n = e, l.slides[n] && l.slides[n].remove(), n < d && (d -= 1), d = Math.max(d, 0);
    l.recalcSlides(), o.loop && l.loopCreate(), o.observer && !l.isElement || l.update(), o.loop ? l.slideTo(d + l.loopedSlides, 0, !1) : l.slideTo(d, 0, !1);
}
function removeAllSlides() {
    const e = this, l = [];
    for(let o = 0; o < e.slides.length; o += 1)l.push(o);
    e.removeSlide(l);
}
function Manipulation(e) {
    let { swiper: l } = e;
    Object.assign(l, {
        appendSlide: appendSlide.bind(l),
        prependSlide: prependSlide.bind(l),
        addSlide: addSlide.bind(l),
        removeSlide: removeSlide.bind(l),
        removeAllSlides: removeAllSlides.bind(l)
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bVyji":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectFade);
var _effectInitMinMjs = require("../shared/effect-init.min.mjs");
var _effectTargetMinMjs = require("../shared/effect-target.min.mjs");
var _effectVirtualTransitionEndMinMjs = require("../shared/effect-virtual-transition-end.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function EffectFade(e) {
    let { swiper: t, extendParams: s, on: a } = e;
    s({
        fadeEffect: {
            crossFade: !1
        }
    });
    (0, _effectInitMinMjs.e)({
        effect: "fade",
        swiper: t,
        on: a,
        setTranslate: ()=>{
            const { slides: e } = t, s = t.params.fadeEffect;
            for(let a = 0; a < e.length; a += 1){
                const e = t.slides[a];
                let r = -e.swiperSlideOffset;
                t.params.virtualTranslate || (r -= t.translate);
                let i = 0;
                t.isHorizontal() || (i = r, r = 0);
                const f = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e.progress), 0) : 1 + Math.min(Math.max(e.progress, -1), 0), n = (0, _effectTargetMinMjs.e)(s, e);
                n.style.opacity = f, n.style.transform = `translate3d(${r}px, ${i}px, 0px)`;
            }
        },
        setTransition: (e)=>{
            const s = t.slides.map((e)=>(0, _utilsMinMjs.g)(e));
            s.forEach((t)=>{
                t.style.transitionDuration = `${e}ms`;
            }), (0, _effectVirtualTransitionEndMinMjs.e)({
                swiper: t,
                duration: e,
                transformElements: s,
                allSlides: !0
            });
        },
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode
            })
    });
}

},{"../shared/effect-init.min.mjs":"35cnG","../shared/effect-target.min.mjs":"74job","../shared/effect-virtual-transition-end.min.mjs":"5mLzD","../shared/utils.min.mjs":"9TwJM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"35cnG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "e", ()=>effectInit);
function effectInit(e) {
    const { effect: s, swiper: a, on: t, setTranslate: r, setTransition: i, overwriteParams: n, perspective: o, recreateShadows: f, getEffectParams: l } = e;
    let c;
    t("beforeInit", ()=>{
        if (a.params.effect !== s) return;
        a.classNames.push(`${a.params.containerModifierClass}${s}`), o && o() && a.classNames.push(`${a.params.containerModifierClass}3d`);
        const e = n ? n() : {};
        Object.assign(a.params, e), Object.assign(a.originalParams, e);
    }), t("setTranslate", ()=>{
        a.params.effect === s && r();
    }), t("setTransition", (e, t)=>{
        a.params.effect === s && i(t);
    }), t("transitionEnd", ()=>{
        if (a.params.effect === s && f) {
            if (!l || !l().slideShadows) return;
            a.slides.forEach((e)=>{
                e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e)=>e.remove());
            }), f();
        }
    }), t("virtualUpdate", ()=>{
        a.params.effect === s && (a.slides.length || (c = !0), requestAnimationFrame(()=>{
            c && a.slides && a.slides.length && (r(), c = !1);
        }));
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"74job":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "e", ()=>effectTarget);
var _utilsMinMjs = require("./utils.min.mjs");
function effectTarget(e, i) {
    const t = (0, _utilsMinMjs.g)(i);
    return t !== i && (t.style.backfaceVisibility = "hidden", t.style["-webkit-backface-visibility"] = "hidden"), t;
}

},{"./utils.min.mjs":"9TwJM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5mLzD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "e", ()=>effectVirtualTransitionEnd);
var _utilsMinMjs = require("./utils.min.mjs");
function effectVirtualTransitionEnd(e) {
    let { swiper: n, duration: t, transformElements: r, allSlides: i } = e;
    const { activeIndex: a } = n;
    if (n.params.virtualTranslate && 0 !== t) {
        let e, t = !1;
        e = i ? r : r.filter((e)=>{
            const t = e.classList.contains("swiper-slide-transform") ? ((e)=>{
                if (!e.parentElement) return n.slides.find((n)=>n.shadowRoot && n.shadowRoot === e.parentNode);
                return e.parentElement;
            })(e) : e;
            return n.getSlideIndex(t) === a;
        }), e.forEach((e)=>{
            (0, _utilsMinMjs.k)(e, ()=>{
                if (t) return;
                if (!n || n.destroyed) return;
                t = !0, n.animating = !1;
                const e = new window.CustomEvent("transitionend", {
                    bubbles: !0,
                    cancelable: !0
                });
                n.wrapperEl.dispatchEvent(e);
            });
        });
    }
}

},{"./utils.min.mjs":"9TwJM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cHiUj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectCube);
var _effectInitMinMjs = require("../shared/effect-init.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function EffectCube(e) {
    let { swiper: t, extendParams: s, on: a } = e;
    s({
        cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: .94
        }
    });
    const r = (e, t, s)=>{
        let a = s ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"), r = s ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
        a || (a = (0, _utilsMinMjs.c)("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (s ? "left" : "top")).split(" ")), e.append(a)), r || (r = (0, _utilsMinMjs.c)("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (s ? "right" : "bottom")).split(" ")), e.append(r)), a && (a.style.opacity = Math.max(-t, 0)), r && (r.style.opacity = Math.max(t, 0));
    };
    (0, _effectInitMinMjs.e)({
        effect: "cube",
        swiper: t,
        on: a,
        setTranslate: ()=>{
            const { el: e, wrapperEl: s, slides: a, width: o, height: i, rtlTranslate: l, size: d, browser: n } = t, p = (0, _utilsMinMjs.o)(t), c = t.params.cubeEffect, w = t.isHorizontal(), h = t.virtual && t.params.virtual.enabled;
            let f, m = 0;
            c.shadow && (w ? (f = t.wrapperEl.querySelector(".swiper-cube-shadow"), f || (f = (0, _utilsMinMjs.c)("div", "swiper-cube-shadow"), t.wrapperEl.append(f)), f.style.height = `${o}px`) : (f = e.querySelector(".swiper-cube-shadow"), f || (f = (0, _utilsMinMjs.c)("div", "swiper-cube-shadow"), e.append(f))));
            for(let e = 0; e < a.length; e += 1){
                const t = a[e];
                let s = e;
                h && (s = parseInt(t.getAttribute("data-swiper-slide-index"), 10));
                let o = 90 * s, i = Math.floor(o / 360);
                l && (o = -o, i = Math.floor(-o / 360));
                const n = Math.max(Math.min(t.progress, 1), -1);
                let f = 0, u = 0, b = 0;
                s % 4 == 0 ? (f = 4 * -i * d, b = 0) : (s - 1) % 4 == 0 ? (f = 0, b = 4 * -i * d) : (s - 2) % 4 == 0 ? (f = d + 4 * i * d, b = d) : (s - 3) % 4 == 0 && (f = -d, b = 3 * d + 4 * d * i), l && (f = -f), w || (u = f, f = 0);
                const x = `rotateX(${p(w ? 0 : -o)}deg) rotateY(${p(w ? o : 0)}deg) translate3d(${f}px, ${u}px, ${b}px)`;
                n <= 1 && n > -1 && (m = 90 * s + 90 * n, l && (m = 90 * -s - 90 * n)), t.style.transform = x, c.slideShadows && r(t, n, w);
            }
            if (s.style.transformOrigin = `50% 50% -${d / 2}px`, s.style["-webkit-transform-origin"] = `50% 50% -${d / 2}px`, c.shadow) {
                if (w) f.style.transform = `translate3d(0px, ${o / 2 + c.shadowOffset}px, ${-o / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${c.shadowScale})`;
                else {
                    const e = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90), t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2), s = c.shadowScale, a = c.shadowScale / t, r = c.shadowOffset;
                    f.style.transform = `scale3d(${s}, 1, ${a}) translate3d(0px, ${i / 2 + r}px, ${-i / 2 / a}px) rotateX(-89.99deg)`;
                }
            }
            const u = (n.isSafari || n.isWebView) && n.needPerspectiveFix ? -d / 2 : 0;
            s.style.transform = `translate3d(0px,0,${u}px) rotateX(${p(t.isHorizontal() ? 0 : m)}deg) rotateY(${p(t.isHorizontal() ? -m : 0)}deg)`, s.style.setProperty("--swiper-cube-translate-z", `${u}px`);
        },
        setTransition: (e)=>{
            const { el: s, slides: a } = t;
            if (a.forEach((t)=>{
                t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t)=>{
                    t.style.transitionDuration = `${e}ms`;
                });
            }), t.params.cubeEffect.shadow && !t.isHorizontal()) {
                const t = s.querySelector(".swiper-cube-shadow");
                t && (t.style.transitionDuration = `${e}ms`);
            }
        },
        recreateShadows: ()=>{
            const e = t.isHorizontal();
            t.slides.forEach((t)=>{
                const s = Math.max(Math.min(t.progress, 1), -1);
                r(t, s, e);
            });
        },
        getEffectParams: ()=>t.params.cubeEffect,
        perspective: ()=>!0,
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0
            })
    });
}

},{"../shared/effect-init.min.mjs":"35cnG","../shared/utils.min.mjs":"9TwJM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gAdsU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectFlip);
var _createShadowMinMjs = require("../shared/create-shadow.min.mjs");
var _effectInitMinMjs = require("../shared/effect-init.min.mjs");
var _effectTargetMinMjs = require("../shared/effect-target.min.mjs");
var _effectVirtualTransitionEndMinMjs = require("../shared/effect-virtual-transition-end.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function EffectFlip(e) {
    let { swiper: t, extendParams: s, on: a } = e;
    s({
        flipEffect: {
            slideShadows: !0,
            limitRotation: !0
        }
    });
    const r = (e, s)=>{
        let a = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"), r = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
        a || (a = (0, _createShadowMinMjs.c)("flip", e, t.isHorizontal() ? "left" : "top")), r || (r = (0, _createShadowMinMjs.c)("flip", e, t.isHorizontal() ? "right" : "bottom")), a && (a.style.opacity = Math.max(-s, 0)), r && (r.style.opacity = Math.max(s, 0));
    };
    (0, _effectInitMinMjs.e)({
        effect: "flip",
        swiper: t,
        on: a,
        setTranslate: ()=>{
            const { slides: e, rtlTranslate: s } = t, a = t.params.flipEffect, i = (0, _utilsMinMjs.o)(t);
            for(let o = 0; o < e.length; o += 1){
                const l = e[o];
                let f = l.progress;
                t.params.flipEffect.limitRotation && (f = Math.max(Math.min(l.progress, 1), -1));
                const n = l.swiperSlideOffset;
                let p = -180 * f, d = 0, m = t.params.cssMode ? -n - t.translate : -n, c = 0;
                t.isHorizontal() ? s && (p = -p) : (c = m, m = 0, d = -p, p = 0), l.style.zIndex = -Math.abs(Math.round(f)) + e.length, a.slideShadows && r(l, f);
                const h = `translate3d(${m}px, ${c}px, 0px) rotateX(${i(d)}deg) rotateY(${i(p)}deg)`;
                (0, _effectTargetMinMjs.e)(a, l).style.transform = h;
            }
        },
        setTransition: (e)=>{
            const s = t.slides.map((e)=>(0, _utilsMinMjs.g)(e));
            s.forEach((t)=>{
                t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t)=>{
                    t.style.transitionDuration = `${e}ms`;
                });
            }), (0, _effectVirtualTransitionEndMinMjs.e)({
                swiper: t,
                duration: e,
                transformElements: s
            });
        },
        recreateShadows: ()=>{
            t.params.flipEffect, t.slides.forEach((e)=>{
                let s = e.progress;
                t.params.flipEffect.limitRotation && (s = Math.max(Math.min(e.progress, 1), -1)), r(e, s);
            });
        },
        getEffectParams: ()=>t.params.flipEffect,
        perspective: ()=>!0,
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode
            })
    });
}

},{"../shared/create-shadow.min.mjs":"b3jgk","../shared/effect-init.min.mjs":"35cnG","../shared/effect-target.min.mjs":"74job","../shared/effect-virtual-transition-end.min.mjs":"5mLzD","../shared/utils.min.mjs":"9TwJM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"b3jgk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "c", ()=>createShadow);
var _utilsMinMjs = require("./utils.min.mjs");
function createShadow(e, t, r) {
    const s = `swiper-slide-shadow${r ? `-${r}` : ""}${e ? ` swiper-slide-shadow-${e}` : ""}`, a = (0, _utilsMinMjs.g)(t);
    let i = a.querySelector(`.${s.split(" ").join(".")}`);
    return i || (i = (0, _utilsMinMjs.c)("div", s.split(" ")), a.append(i)), i;
}

},{"./utils.min.mjs":"9TwJM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kjv2Q":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectCoverflow);
var _createShadowMinMjs = require("../shared/create-shadow.min.mjs");
var _effectInitMinMjs = require("../shared/effect-init.min.mjs");
var _effectTargetMinMjs = require("../shared/effect-target.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function EffectCoverflow(e) {
    let { swiper: t, extendParams: s, on: r } = e;
    s({
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: !0
        }
    });
    (0, _effectInitMinMjs.e)({
        effect: "coverflow",
        swiper: t,
        on: r,
        setTranslate: ()=>{
            const { width: e, height: s, slides: r, slidesSizesGrid: o } = t, a = t.params.coverflowEffect, i = t.isHorizontal(), l = t.translate, f = i ? e / 2 - l : s / 2 - l, d = i ? a.rotate : -a.rotate, c = a.depth, h = (0, _utilsMinMjs.o)(t);
            for(let e = 0, t = r.length; e < t; e += 1){
                const t = r[e], s = o[e], l = (f - t.swiperSlideOffset - s / 2) / s, n = "function" == typeof a.modifier ? a.modifier(l) : l * a.modifier;
                let w = i ? d * n : 0, p = i ? 0 : d * n, m = -c * Math.abs(n), g = a.stretch;
                "string" == typeof g && -1 !== g.indexOf("%") && (g = parseFloat(a.stretch) / 100 * s);
                let y = i ? 0 : g * n, S = i ? g * n : 0, b = 1 - (1 - a.scale) * Math.abs(n);
                Math.abs(S) < .001 && (S = 0), Math.abs(y) < .001 && (y = 0), Math.abs(m) < .001 && (m = 0), Math.abs(w) < .001 && (w = 0), Math.abs(p) < .001 && (p = 0), Math.abs(b) < .001 && (b = 0);
                const u = `translate3d(${S}px,${y}px,${m}px)  rotateX(${h(p)}deg) rotateY(${h(w)}deg) scale(${b})`;
                if ((0, _effectTargetMinMjs.e)(a, t).style.transform = u, t.style.zIndex = 1 - Math.abs(Math.round(n)), a.slideShadows) {
                    let e = i ? t.querySelector(".swiper-slide-shadow-left") : t.querySelector(".swiper-slide-shadow-top"), s = i ? t.querySelector(".swiper-slide-shadow-right") : t.querySelector(".swiper-slide-shadow-bottom");
                    e || (e = (0, _createShadowMinMjs.c)("coverflow", t, i ? "left" : "top")), s || (s = (0, _createShadowMinMjs.c)("coverflow", t, i ? "right" : "bottom")), e && (e.style.opacity = n > 0 ? n : 0), s && (s.style.opacity = -n > 0 ? -n : 0);
                }
            }
        },
        setTransition: (e)=>{
            t.slides.map((e)=>(0, _utilsMinMjs.g)(e)).forEach((t)=>{
                t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t)=>{
                    t.style.transitionDuration = `${e}ms`;
                });
            });
        },
        perspective: ()=>!0,
        overwriteParams: ()=>({
                watchSlidesProgress: !0
            })
    });
}

},{"../shared/create-shadow.min.mjs":"b3jgk","../shared/effect-init.min.mjs":"35cnG","../shared/effect-target.min.mjs":"74job","../shared/utils.min.mjs":"9TwJM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ddJok":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectCreative);
var _createShadowMinMjs = require("../shared/create-shadow.min.mjs");
var _effectInitMinMjs = require("../shared/effect-init.min.mjs");
var _effectTargetMinMjs = require("../shared/effect-target.min.mjs");
var _effectVirtualTransitionEndMinMjs = require("../shared/effect-virtual-transition-end.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function EffectCreative(e) {
    let { swiper: t, extendParams: s, on: r } = e;
    s({
        creativeEffect: {
            limitProgress: 1,
            shadowPerProgress: !1,
            progressMultiplier: 1,
            perspective: !0,
            prev: {
                translate: [
                    0,
                    0,
                    0
                ],
                rotate: [
                    0,
                    0,
                    0
                ],
                opacity: 1,
                scale: 1
            },
            next: {
                translate: [
                    0,
                    0,
                    0
                ],
                rotate: [
                    0,
                    0,
                    0
                ],
                opacity: 1,
                scale: 1
            }
        }
    });
    const a = (e)=>"string" == typeof e ? e : `${e}px`;
    (0, _effectInitMinMjs.e)({
        effect: "creative",
        swiper: t,
        on: r,
        setTranslate: ()=>{
            const { slides: e, wrapperEl: s, slidesSizesGrid: r } = t, i = t.params.creativeEffect, { progressMultiplier: o } = i, l = t.params.centeredSlides, n = (0, _utilsMinMjs.o)(t);
            if (l) {
                const e = r[0] / 2 - t.params.slidesOffsetBefore || 0;
                s.style.transform = `translateX(calc(50% - ${e}px))`;
            }
            for(let s = 0; s < e.length; s += 1){
                const r = e[s], c = r.progress, f = Math.min(Math.max(r.progress, -i.limitProgress), i.limitProgress);
                let m = f;
                l || (m = Math.min(Math.max(r.originalProgress, -i.limitProgress), i.limitProgress));
                const p = r.swiperSlideOffset, d = [
                    t.params.cssMode ? -p - t.translate : -p,
                    0,
                    0
                ], g = [
                    0,
                    0,
                    0
                ];
                let h = !1;
                t.isHorizontal() || (d[1] = d[0], d[0] = 0);
                let w = {
                    translate: [
                        0,
                        0,
                        0
                    ],
                    rotate: [
                        0,
                        0,
                        0
                    ],
                    scale: 1,
                    opacity: 1
                };
                f < 0 ? (w = i.next, h = !0) : f > 0 && (w = i.prev, h = !0), d.forEach((e, t)=>{
                    d[t] = `calc(${e}px + (${a(w.translate[t])} * ${Math.abs(f * o)}))`;
                }), g.forEach((e, t)=>{
                    let s = w.rotate[t] * Math.abs(f * o);
                    g[t] = s;
                }), r.style.zIndex = -Math.abs(Math.round(c)) + e.length;
                const y = d.join(", "), u = `rotateX(${n(g[0])}deg) rotateY(${n(g[1])}deg) rotateZ(${n(g[2])}deg)`, v = m < 0 ? `scale(${1 + (1 - w.scale) * m * o})` : `scale(${1 - (1 - w.scale) * m * o})`, E = m < 0 ? 1 + (1 - w.opacity) * m * o : 1 - (1 - w.opacity) * m * o, M = `translate3d(${y}) ${u} ${v}`;
                if (h && w.shadow || !h) {
                    let e = r.querySelector(".swiper-slide-shadow");
                    if (!e && w.shadow && (e = (0, _createShadowMinMjs.c)("creative", r)), e) {
                        const t = i.shadowPerProgress ? f * (1 / i.limitProgress) : f;
                        e.style.opacity = Math.min(Math.max(Math.abs(t), 0), 1);
                    }
                }
                const $ = (0, _effectTargetMinMjs.e)(i, r);
                $.style.transform = M, $.style.opacity = E, w.origin && ($.style.transformOrigin = w.origin);
            }
        },
        setTransition: (e)=>{
            const s = t.slides.map((e)=>(0, _utilsMinMjs.g)(e));
            s.forEach((t)=>{
                t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow").forEach((t)=>{
                    t.style.transitionDuration = `${e}ms`;
                });
            }), (0, _effectVirtualTransitionEndMinMjs.e)({
                swiper: t,
                duration: e,
                transformElements: s,
                allSlides: !0
            });
        },
        perspective: ()=>t.params.creativeEffect.perspective,
        overwriteParams: ()=>({
                watchSlidesProgress: !0,
                virtualTranslate: !t.params.cssMode
            })
    });
}

},{"../shared/create-shadow.min.mjs":"b3jgk","../shared/effect-init.min.mjs":"35cnG","../shared/effect-target.min.mjs":"74job","../shared/effect-virtual-transition-end.min.mjs":"5mLzD","../shared/utils.min.mjs":"9TwJM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bXFss":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectCards);
var _createShadowMinMjs = require("../shared/create-shadow.min.mjs");
var _effectInitMinMjs = require("../shared/effect-init.min.mjs");
var _effectTargetMinMjs = require("../shared/effect-target.min.mjs");
var _effectVirtualTransitionEndMinMjs = require("../shared/effect-virtual-transition-end.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function EffectCards(e) {
    let { swiper: t, extendParams: a, on: s } = e;
    a({
        cardsEffect: {
            slideShadows: !0,
            rotate: !0,
            perSlideRotate: 2,
            perSlideOffset: 8
        }
    });
    (0, _effectInitMinMjs.e)({
        effect: "cards",
        swiper: t,
        on: s,
        setTranslate: ()=>{
            const { slides: e, activeIndex: a, rtlTranslate: s } = t, r = t.params.cardsEffect, { startTranslate: i, isTouched: o } = t.touchEventsData, n = s ? -t.translate : t.translate;
            for(let l = 0; l < e.length; l += 1){
                const d = e[l], c = d.progress, f = Math.min(Math.max(c, -4), 4);
                let m = d.swiperSlideOffset;
                t.params.centeredSlides && !t.params.cssMode && (t.wrapperEl.style.transform = `translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (m -= e[0].swiperSlideOffset);
                let p = t.params.cssMode ? -m - t.translate : -m, h = 0;
                const M = -100 * Math.abs(f);
                let S = 1, u = -r.perSlideRotate * f, w = r.perSlideOffset - .75 * Math.abs(f);
                const $ = t.virtual && t.params.virtual.enabled ? t.virtual.from + l : l, E = ($ === a || $ === a - 1) && f > 0 && f < 1 && (o || t.params.cssMode) && n < i, T = ($ === a || $ === a + 1) && f < 0 && f > -1 && (o || t.params.cssMode) && n > i;
                if (E || T) {
                    const e = (1 - Math.abs((Math.abs(f) - .5) / .5)) ** .5;
                    u += -28 * f * e, S += -0.5 * e, w += 96 * e, h = -25 * e * Math.abs(f) + "%";
                }
                if (p = f < 0 ? `calc(${p}px ${s ? "-" : "+"} (${w * Math.abs(f)}%))` : f > 0 ? `calc(${p}px ${s ? "-" : "+"} (-${w * Math.abs(f)}%))` : `${p}px`, !t.isHorizontal()) {
                    const e = h;
                    h = p, p = e;
                }
                const g = f < 0 ? "" + (1 + (1 - S) * f) : "" + (1 - (1 - S) * f), x = `\n        translate3d(${p}, ${h}, ${M}px)\n        rotateZ(${r.rotate ? s ? -u : u : 0}deg)\n        scale(${g})\n      `;
                if (r.slideShadows) {
                    let e = d.querySelector(".swiper-slide-shadow");
                    e || (e = (0, _createShadowMinMjs.c)("cards", d)), e && (e.style.opacity = Math.min(Math.max((Math.abs(f) - .5) / .5, 0), 1));
                }
                d.style.zIndex = -Math.abs(Math.round(c)) + e.length;
                (0, _effectTargetMinMjs.e)(r, d).style.transform = x;
            }
        },
        setTransition: (e)=>{
            const a = t.slides.map((e)=>(0, _utilsMinMjs.g)(e));
            a.forEach((t)=>{
                t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow").forEach((t)=>{
                    t.style.transitionDuration = `${e}ms`;
                });
            }), (0, _effectVirtualTransitionEndMinMjs.e)({
                swiper: t,
                duration: e,
                transformElements: a
            });
        },
        perspective: ()=>!0,
        overwriteParams: ()=>({
                _loopSwapReset: !1,
                watchSlidesProgress: !0,
                loopAdditionalSlides: t.params.cardsEffect.rotate ? 3 : 2,
                centeredSlides: !0,
                virtualTranslate: !t.params.cssMode
            })
    });
}

},{"../shared/create-shadow.min.mjs":"b3jgk","../shared/effect-init.min.mjs":"35cnG","../shared/effect-target.min.mjs":"74job","../shared/effect-virtual-transition-end.min.mjs":"5mLzD","../shared/utils.min.mjs":"9TwJM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aErfw":[function() {},{}],"jHq3j":[function() {},{}],"cNSSK":[function(require,module,exports,__globalThis) {

},{}],"7IYHs":[function(require,module,exports,__globalThis) {

},{}],"jTKI1":[function(require,module,exports,__globalThis) {

},{}],"fAg6A":[function(require,module,exports,__globalThis) {

},{}]},["5j6Kf","a0t4e"], "a0t4e", "parcelRequire78be", {})

//# sourceMappingURL=tasty-treats.31b563d9.js.map

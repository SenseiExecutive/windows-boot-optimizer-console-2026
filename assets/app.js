/**
 * WindowsBootOptimizer — Pages helper (UI only).
 * Keyword: windows boot optimizer
 */
(function (global) {
  'use strict';

  var Product = {
    name: 'WindowsBootOptimizer',
    keyword: 'windows boot optimizer',
    channel: 'github-pages'
  };

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  function bindDownload(btn, url) {
    if (!btn || !url) return;
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      window.location.href = url;
    });
  }

  global.WindowsBootOptimizerUI = { Product: Product, ready: ready, bindDownload: bindDownload };
})(typeof window !== 'undefined' ? window : globalThis);

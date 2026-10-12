/* Persists the EN/TH choice across pages. Thai twins live in thai-pages/<same-name>.html */
(function () {
  var KEY = 'hana-lang-pref';
  var TH = ['about-history.html','about-leadership.html','about-quality.html','careers-stories.html','careers.html','contact.html','index.html','investor-relations-annual.html','investor-relations-contact.html','investor-relations-esg.html','investor-relations-faq.html','investor-relations-governance.html','investor-relations-news.html','investor-relations-structure.html','investor-relations.html','privacy-policy.html'];
  var me = document.currentScript;
  var root = me ? me.src.replace(/js\/lang-pref\.js.*$/, '') : '';
  function get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function set(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }
  function rel(u) { return u.indexOf(root) === 0 ? u.slice(root.length).split('#')[0].split('?')[0] : null; }
  function name(r) { return r === '' ? 'index.html' : r; }
  var here = rel(location.href.split('#')[0]);
  if (here == null) return;
  var onThai = here.indexOf('thai-pages/') === 0;
  if (onThai) set('th');
  else if (get() === 'th' && TH.indexOf(name(here)) > -1) { location.replace(root + 'thai-pages/' + name(here) + location.hash); return; }

  function thaiTarget(a) {
    var r = rel(a.href); if (r == null || r.indexOf('thai-pages/') === 0) return null;
    var n = name(r); if (TH.indexOf(n) < 0) return null;
    var h = a.href.indexOf('#') > -1 ? a.href.slice(a.href.indexOf('#')) : '';
    return root + 'thai-pages/' + n + h;
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]'); if (!a) return;
    if (a.matches('.hana-lang, .hana-mnav-lang')) {
      var toEn = a.getAttribute('lang') === 'en' || (rel(a.href) || '').indexOf('thai-pages/') !== 0;
      set(toEn ? 'en' : 'th'); return;
    }
    if (get() !== 'th' || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || a.target === '_blank') return;
    var t = thaiTarget(a); if (t) { e.preventDefault(); location.href = t; }
  }, true);

  function init() {
    var pref = get();
    if (pref === 'th') document.querySelectorAll('a[href]').forEach(function (a) { if (!a.matches('.hana-lang')) { var t = thaiTarget(a); if (t) a.setAttribute('href', t); } });
    /* English-only page while Thai is selected: keep the switch showing the Thai state */
    if (!onThai && pref === 'th' && !document.querySelector('.hana-util-bar a.hana-lang')) {
      var bar = document.querySelector('.hana-util-bar'); if (!bar) return;
      var ref = Array.prototype.filter.call(bar.querySelectorAll('a'), function (a) { return /insights|careers/i.test(a.textContent); }).pop();
      if (!ref) return;
      var l = document.createElement('a');
      l.href = location.href.split('#')[0]; l.className = 'hana-lang'; l.lang = 'en';
      l.setAttribute('style', 'color:inherit; text-decoration:none; display:inline-flex; align-items:center; gap:6px;');
      l.innerHTML = '<i data-lucide="globe" style="width:13px; height:13px;"></i> EN';
      ref.parentNode.insertBefore(l, ref.nextSibling);
      if (window.lucide && lucide.createIcons) lucide.createIcons();
    }
  }
  if (document.readyState !== 'loading' || document.querySelector('.hana-util-bar')) init(); else document.addEventListener('DOMContentLoaded', init);
})();

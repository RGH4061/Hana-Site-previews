/* Persists the EN/TH choice across pages. Thai twins live in thai-pages/<same-name>.html */
(function () {
  var KEY = 'hana-lang-pref';
  var TH = ['about-history.html','about-leadership.html','about-quality.html','capabilities-automation-mes-traceability.html','capabilities-automation-robotic-smart-manufacturing.html','capabilities-automation.html','capabilities-dfx-jdm-dfx-dfm.html','capabilities-dfx-jdm-jdm.html','capabilities-dfx-jdm-npi.html','capabilities-dfx-jdm.html','capabilities-microelectronic-assembly-mems-sensor-assembly.html','capabilities-microelectronic-assembly-micro-assembly.html','capabilities-microelectronic-assembly-precision-flip-chip.html','capabilities-microelectronic-assembly-precision-interconnect.html','capabilities-microelectronic-assembly.html','capabilities-osat-flip-chip.html','capabilities-osat-hermetic-ceramic.html','capabilities-osat-optical-packaging.html','capabilities-osat-package-design.html','capabilities-osat-power-packages.html','capabilities-osat-qfn-dfn-lga.html','capabilities-osat-system-in-package.html','capabilities-osat-ultra-small-packages.html','capabilities-osat-wafer-level-packaging.html','capabilities-osat-wafer-probe-final-test.html','capabilities-osat-wafer-processing.html','capabilities-osat.html','capabilities-pcba-box-build-box-build.html','capabilities-pcba-box-build-cob-assembly.html','capabilities-pcba-box-build-smt-assembly.html','capabilities-pcba-box-build.html','capabilities-rfid-smart-tags.html','capabilities.html','careers-stories.html','careers.html','contact.html','index.html','investor-relations-annual.html','investor-relations-contact.html','investor-relations-esg.html','investor-relations-faq.html','investor-relations-governance.html','investor-relations-news.html','investor-relations-structure.html','investor-relations.html','locations-ayutthaya.html','locations-jiaxing.html','locations-koh-kong.html','locations-lamphun.html','locations-ohio.html','locations.html','markets-access-control-rfid-cards.html','markets-access-control-smart-lock-assembly.html','markets-access-control.html','markets-automotive-automotive-pcba.html','markets-automotive-led-lighting.html','markets-automotive-power-modules.html','markets-automotive-sensor-assembly.html','markets-automotive.html','markets-consumer-electronics-smt-sensors.html','markets-consumer-electronics-wireless-charging.html','markets-consumer-electronics.html','markets-data-centers.html','markets-industrial-iot-iot-device-assembly.html','markets-industrial-iot-pcba-box-build.html','markets-industrial-iot.html','markets-medical-hearing-aid-assembly.html','markets-medical-mems-sensors.html','markets-medical-pcba.html','markets-medical-wireless-charging.html','markets-medical.html','markets-optical-sensors-camera-modules.html','markets-optical-sensors.html','markets-power-management.html','markets-rfid-rfid-cards.html','markets-rfid-rfid-tags-inlays.html','markets-rfid-rfid-tire-tags.html','markets-rfid.html','markets-telecommunications-rf-assembly.html','markets-telecommunications.html','markets.html','privacy-policy.html'];
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

/* Hana geometric motion backgrounds — adds the shape layer to every
   [data-hana-geo] element. Styles and options: css/hana-geo-motion.css. */
(function () {
  var SHAPES = {
    tri:    '0,100 50,0 100,100',
    triInv: '0,0 100,0 50,100',
    para:   '18,0 100,0 82,100 0,100',
    wedge:  '0,0 100,50 0,100'
  };
  // Drawing order and shape per slot (geo-4 sits at the back, geo-5 at the front)
  var LAYER = [['geo-4', 'triInv'], ['geo-3', 'para'], ['geo-1', 'tri'], ['geo-2', 'triInv'], ['geo-5', 'wedge']];

  function addSprite() {
    if (document.getElementById('hana-geo-sprite')) return;
    var defs = Object.keys(SHAPES).map(function (k) {
      return '<symbol id="hana-geo-' + k + '" viewBox="0 0 100 100" preserveAspectRatio="none">' +
             '<polygon points="' + SHAPES[k] + '" fill="currentColor"/></symbol>';
    }).join('');
    var holder = document.createElement('div');
    holder.innerHTML = '<svg id="hana-geo-sprite" width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>' + defs + '</defs></svg>';
    document.body.insertBefore(holder.firstChild, document.body.firstChild);
  }

  function decorate(el) {
    if (el.querySelector(':scope > .hana-geo')) return;
    var scale = parseFloat(el.getAttribute('data-geo-scale'));
    if (!isNaN(scale)) el.style.setProperty('--geo-s', scale);
    var layer = document.createElement('div');
    layer.className = 'hana-geo';
    layer.setAttribute('aria-hidden', 'true');
    layer.innerHTML = LAYER.map(function (s) {
      return '<svg class="geo-s ' + s[0] + '" focusable="false"><use href="#hana-geo-' + s[1] + '"/></svg>';
    }).join('');
    el.insertBefore(layer, el.firstChild);
  }

  function init(root) {
    var els = (root || document).querySelectorAll('[data-hana-geo]');
    if (!els.length) return;
    addSprite();
    Array.prototype.forEach.call(els, decorate);
  }

  window.HanaGeo = { init: init };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { init(); });
  else init();
})();

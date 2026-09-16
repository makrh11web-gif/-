// 野州食品工業株式会社 SAMPLE SITE — assets/main.js
// 全ページ共通：モバイルナビの開閉トグル

(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.mobile-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // ページ内リンク・別ページ遷移どちらでもメニューを閉じる
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

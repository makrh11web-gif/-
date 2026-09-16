// リンクフィールド株式会社 サンプルサイト 共通スクリプト
(function () {
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.hidden = open;
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        if (window.matchMedia('(max-width:860px)').matches) {
          toggle.setAttribute('aria-expanded', 'false');
          nav.hidden = true;
        }
      });
    });
    var mq = window.matchMedia('(max-width:860px)');
    function syncNav() {
      if (mq.matches) {
        nav.hidden = toggle.getAttribute('aria-expanded') !== 'true';
      } else {
        nav.hidden = false;
      }
    }
    mq.addEventListener('change', syncNav);
    syncNav();
  }

  // mailto 経由の問い合わせフォーム（このサンプルサイトでは実送信しない）
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var get = function (id) {
        var el = document.getElementById(id);
        return el ? el.value : '';
      };
      var company = get('cf-company');
      var name = get('cf-name');
      var email = get('cf-email');
      var tel = get('cf-tel');
      var category = get('cf-category');
      var budget = get('cf-budget');
      var message = get('cf-message');
      var subject = encodeURIComponent('【開発相談】' + (company || name) + '様よりお問い合わせ');
      var body = encodeURIComponent(
        '会社名・組織名: ' + company + '\n' +
        'お名前: ' + name + '\n' +
        'メールアドレス: ' + email + '\n' +
        '電話番号: ' + tel + '\n' +
        'ご相談内容: ' + category + '\n' +
        'ご予算感: ' + budget + '\n\n' +
        message
      );
      window.location.href = 'mailto:contact@example.com?subject=' + subject + '&body=' + body;
    });
  }
})();

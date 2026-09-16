// とちぎ中央税理士法人（サンプルサイト） 共通スクリプト

(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
})();

// お問い合わせフォーム（contact.html）: サンプルのためメールソフト起動で代用
(function () {
  var form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var get = function (id) {
      var el = document.getElementById(id);
      return el ? el.value : '';
    };
    var name = get('cf-name');
    var kana = get('cf-kana');
    var company = get('cf-company');
    var tel = get('cf-tel');
    var email = get('cf-email');
    var category = get('cf-category');
    var contactPref = get('cf-pref');
    var message = get('cf-message');

    var subject = encodeURIComponent('【とちぎ中央税理士法人】無料相談のお問い合わせ（' + name + '様）');
    var body = encodeURIComponent(
      'お名前: ' + name + '（' + kana + '）\n' +
      '会社名・屋号: ' + company + '\n' +
      '電話番号: ' + tel + '\n' +
      'メールアドレス: ' + email + '\n' +
      'ご相談内容: ' + category + '\n' +
      'ご希望の連絡方法: ' + contactPref + '\n\n' +
      'メッセージ:\n' + message
    );
    window.location.href = 'mailto:contact@example.com?subject=' + subject + '&body=' + body;
  });
})();

// 採用エントリーフォーム（recruit.html）: サンプルのためメールソフト起動で代用
(function () {
  var form = document.getElementById('recruit-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var get = function (id) {
      var el = document.getElementById(id);
      return el ? el.value : '';
    };
    var name = get('rf-name');
    var kana = get('rf-kana');
    var tel = get('rf-tel');
    var email = get('rf-email');
    var position = get('rf-position');
    var message = get('rf-message');

    var subject = encodeURIComponent('【とちぎ中央税理士法人】採用エントリー（' + name + '様）');
    var body = encodeURIComponent(
      'お名前: ' + name + '（' + kana + '）\n' +
      '電話番号: ' + tel + '\n' +
      'メールアドレス: ' + email + '\n' +
      '希望職種: ' + position + '\n\n' +
      'メッセージ・自己PR:\n' + message
    );
    window.location.href = 'mailto:contact@example.com?subject=' + subject + '&body=' + body;
  });
})();

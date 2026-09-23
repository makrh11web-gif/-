/* LUMEN NOIR（サンプル） - 共通スクリプト
   モバイルナビの開閉と、お問い合わせフォームのmailto送信のみを行う簡易JS */
document.addEventListener('DOMContentLoaded', function () {
  // モバイル用ハンバーガーメニュー
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // お問い合わせフォーム（mailto送信）
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var nameEl = document.getElementById('cf-name');
      var telEl = document.getElementById('cf-tel');
      var messageEl = document.getElementById('cf-message');

      var name = nameEl ? nameEl.value : '';
      var tel = telEl ? telEl.value : '';
      var message = messageEl ? messageEl.value : '';

      var subject = encodeURIComponent('LUMEN NOIRへのお問い合わせ（' + name + '様）');
      var lines = ['お名前: ' + name];
      if (tel) lines.push('お電話番号: ' + tel);
      lines.push('');
      lines.push('お問い合わせ内容:');
      lines.push(message);

      var body = encodeURIComponent(lines.join('\n'));
      window.location.href = 'mailto:contact@example.com?subject=' + subject + '&body=' + body;
    });
  }
});

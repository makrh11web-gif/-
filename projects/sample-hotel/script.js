/* 碧泉庵 HEKISEN-AN（サンプル） - 共通スクリプト
   モバイルナビの開閉と、お問い合わせフォームのmailto送信のみを行う簡易JS */
document.addEventListener('DOMContentLoaded', function () {
  // モバイル用ハンバーガーメニュー
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.primary-nav');
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
      var contactEl = document.getElementById('cf-contact');
      var dateEl = document.getElementById('cf-date');
      var messageEl = document.getElementById('cf-message');

      var name = nameEl ? nameEl.value : '';
      var contact = contactEl ? contactEl.value : '';
      var date = dateEl ? dateEl.value : '';
      var message = messageEl ? messageEl.value : '';

      var subject = encodeURIComponent('碧泉庵への宿泊お問い合わせ（' + name + '様）');
      var lines = ['お名前: ' + name];
      if (contact) lines.push('ご連絡先: ' + contact);
      if (date) lines.push('ご希望日（任意）: ' + date);
      lines.push('');
      lines.push('お問い合わせ内容:');
      lines.push(message);

      var body = encodeURIComponent(lines.join('\n'));
      window.location.href = 'mailto:contact@example.com?subject=' + subject + '&body=' + body;
    });
  }
});

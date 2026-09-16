// 関東急送株式会社 サンプルサイト / MAKRH
// 共通スクリプト：モバイルナビゲーションの開閉、お問い合わせフォームの送信（mailto）

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('main-nav');

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

  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var get = function (id) {
        var el = document.getElementById(id);
        return el ? el.value : '';
      };
      var company = get('cf-company');
      var name = get('cf-name');
      var email = get('cf-email');
      var tel = get('cf-tel');
      var type = get('cf-type');
      var volume = get('cf-volume');
      var message = get('cf-message');

      var subject = encodeURIComponent('【関東急送株式会社】お問い合わせ（' + company + ' ' + name + '様）');
      var body = encodeURIComponent(
        '会社名: ' + company + '\n' +
        'ご担当者名: ' + name + '\n' +
        'メールアドレス: ' + email + '\n' +
        '電話番号: ' + tel + '\n' +
        'お問い合わせ種別: ' + type + '\n' +
        'ご希望の荷量・エリア等: ' + volume + '\n\n' +
        message
      );
      window.location.href = 'mailto:contact@example.com?subject=' + subject + '&body=' + body;
    });
  }

  var recruitForm = document.getElementById('recruit-form');
  if (recruitForm) {
    recruitForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var get = function (id) {
        var el = document.getElementById(id);
        return el ? el.value : '';
      };
      var name = get('rf-name');
      var tel = get('rf-tel');
      var email = get('rf-email');
      var job = get('rf-job');
      var message = get('rf-message');

      var subject = encodeURIComponent('【関東急送株式会社】求人エントリー（' + name + '様）');
      var body = encodeURIComponent(
        'お名前: ' + name + '\n' +
        '電話番号: ' + tel + '\n' +
        'メールアドレス: ' + email + '\n' +
        'ご希望職種: ' + job + '\n\n' +
        message
      );
      window.location.href = 'mailto:contact@example.com?subject=' + subject + '&body=' + body;
    });
  }
});

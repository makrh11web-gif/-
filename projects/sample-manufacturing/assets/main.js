// 誠和精機株式会社 SAMPLE SITE — shared script
(function () {
  "use strict";

  // ---- mobile nav toggle ----
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---- quote / contact form (sample: mailto handoff, no real submission) ----
  var form = document.getElementById("quote-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var get = function (id) {
        var el = document.getElementById(id);
        return el ? el.value : "";
      };
      var company = get("qf-company");
      var name = get("qf-name");
      var email = get("qf-email");
      var tel = get("qf-tel");
      var category = get("qf-category");
      var material = get("qf-material");
      var qty = get("qf-qty");
      var deadline = get("qf-deadline");
      var message = get("qf-message");

      var subject = encodeURIComponent(
        "【誠和精機】お問い合わせ・見積もり依頼（" + (company || name || "お客様") + "様）"
      );
      var body = encodeURIComponent(
        "会社名: " + company + "\n" +
        "ご担当者名: " + name + "\n" +
        "メールアドレス: " + email + "\n" +
        "電話番号: " + tel + "\n" +
        "お問い合わせ種別: " + category + "\n" +
        "想定材質: " + material + "\n" +
        "想定数量: " + qty + "\n" +
        "希望納期: " + deadline + "\n\n" +
        "ご相談内容:\n" + message
      );

      var status = document.getElementById("form-status");
      if (status) {
        status.hidden = false;
        status.textContent = "送信内容をメールソフトに引き継ぎました。内容をご確認のうえ送信してください。";
      }
      window.location.href = "mailto:contact@example.com?subject=" + subject + "&body=" + body;
    });
  }

  // ---- footer year ----
  var yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();

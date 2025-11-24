// 年份自動更新
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 簡單阻止表單真的送出，避免 GitHub Pages 出錯
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Form is a local demo. Connect it to your email or backend when you are ready.");
    });
  }
});

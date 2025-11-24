// script.js
// 年份自動更新 + Contact Form 串接 Formspree（含 72h 回覆說明）

document.addEventListener("DOMContentLoaded", () => {
  // 動態更新 footer 年份
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Contact form → Formspree
  const form = document.getElementById("contact-form");
  if (!form) return;

  const statusEl = form.querySelector(".form-note");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // 用 fetch 自己送

    if (statusEl) {
      statusEl.textContent = "Sending your message…";
    }

    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xpweznwq", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // 成功
        form.reset();
        if (statusEl) {
          statusEl.textContent =
            "Thank you — your message has been sent. I usually reply within 72 hours for projects that fit the lab’s visual-physics focus.";
        } else {
          alert(
            "Thank you — your message has been sent. I usually reply within 72 hours for projects that fit the lab’s visual-physics focus."
          );
        }
      } else {
        // Formspree 回傳錯誤
        if (statusEl) {
          statusEl.textContent =
            "Something went wrong. Please try again in a moment, or email me directly at leimai2023@gmail.com.";
        } else {
          alert(
            "Something went wrong. Please try again in a moment, or email me directly at leimai2023@gmail.com."
          );
        }
      }
    } catch (err) {
      // 網路或其他異常
      if (statusEl) {
        statusEl.textContent =
          "Network error. Please check your connection and try again, or email me directly at leimai2023@gmail.com.";
      } else {
        alert(
          "Network error. Please check your connection and try again, or email me directly at leimai2023@gmail.com."
        );
      }
    }
  });
});

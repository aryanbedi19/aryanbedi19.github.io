(function () {
  "use strict";

  var root = document.documentElement;
  var storageKey = "aryanbedi-theme";

  function storedTheme() {
    try { return window.localStorage.getItem(storageKey); } catch (error) { return null; }
  }

  function preferredTheme() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    var button = document.querySelector("[data-theme-toggle]");
    if (button) {
      var next = theme === "dark" ? "light" : "dark";
      button.setAttribute("aria-label", "Switch to " + next + " theme");
      button.setAttribute("title", "Switch to " + next + " theme");
      button.innerHTML = theme === "dark" ? "☀" : "◐";
    }
  }

  applyTheme(storedTheme() || preferredTheme());

  document.addEventListener("click", function (event) {
    var toggle = event.target.closest("[data-theme-toggle]");
    if (toggle) {
      var theme = root.dataset.theme === "dark" ? "light" : "dark";
      applyTheme(theme);
      try { window.localStorage.setItem(storageKey, theme); } catch (error) { /* Storage is optional. */ }
    }
  });

  var portrait = document.querySelector("[data-portrait-toggle]");
  if (portrait) {
    portrait.addEventListener("click", function () {
      var flipped = portrait.classList.toggle("is-flipped");
      portrait.setAttribute("aria-pressed", String(flipped));
      portrait.setAttribute("aria-label", flipped ? "Show casual photo" : "Show conference photo");
    });
  }
}());

var _switchTheme = () => {
  var t =
      localStorage.getItem("theme") === "is-theme-dark"
          ? "is-theme-light"
          : "is-theme-dark";
  localStorage.setItem("theme", t);
  return t;
};
var switchTheme = (t) =>
  (document.documentElement.className = t ?? _switchTheme());
window.onload = () =>
switchTheme(localStorage.getItem("theme") ?? "is-theme-light");

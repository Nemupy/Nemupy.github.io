const applyVisited = (status) => {
  status = "";
  sessionStorage.setItem("status", status);
};
const applyTheme = (themeName) => {
  sessionStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
};
const initialTheme = () => {
  const prefersColorSchemeDark = matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  if (prefersColorSchemeDark) {
    applyTheme("is-theme-dark");
  } else {
    applyTheme("is-theme-light");
  }
};
const getStorageTheme = () => {
  const storageTheme = sessionStorage.getItem("theme");
  if (storageTheme === "is-theme-dark") {
    applyTheme("is-theme-dark");
  } else if (storageTheme === "is-theme-light") {
    applyTheme("is-theme-light");
  }
};
const switchTheme = () => {
  const storageTheme = sessionStorage.getItem("theme");
  if (storageTheme !== "is-theme-dark") {
    applyTheme("is-theme-dark");
  } else {
    applyTheme("is-theme-light");
  }
};
const discriminationTheme = () => {
  const getStrageVisited = sessionStorage.getItem("status");
  if (getStrageVisited) {
    getStorageTheme();
  } else {
    initialTheme();
    applyVisited("visted");
  }
};

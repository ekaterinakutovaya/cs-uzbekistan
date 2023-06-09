window.addEventListener("DOMContentLoaded", () => {
  console.log("Loaded Scripts");

  const detectColorScheme = () => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      console.log("dark mode");
      document.querySelector("html").setAttribute("data-theme", "theme-dark");
    } else {
      console.log("light mode");
      document.querySelector("html").setAttribute("data-theme", "theme-light");
    }
  };

  detectColorScheme();
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", detectColorScheme);
});

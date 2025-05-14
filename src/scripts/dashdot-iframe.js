const iframe = document.getElementById("dashdot"); // Vybere iframe s ID "dashdot"

// Funkce pro nastavení parametrů podle režimu
function setIframeTheme() {
  if (!iframe) return; // Pokud iframe neexistuje, nic nedělej

  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const theme = isDarkMode ? "dark" : "light";
  const color = isDarkMode ? "B1D18A" : "4C662B"; // Barva textu
  const surface = isDarkMode ? "12140e" : "dadbd0"; // Barva pozadí

  const baseUrl = "https://dash.mrburger.cz?graph=cpu&showPercentage=true&innerRadius=0";
  const newUrl = `${baseUrl}&theme=${theme}&color=${color}&surface=${surface}`;

  iframe.src = newUrl;
}

// Spustit při načtení stránky
setIframeTheme();

// Poslouchat změny režimu
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", setIframeTheme);
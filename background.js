importScripts("urls.js");

const urlsIgnoradas = [
  "google-analytics.com",
  "googletagmanager.com",
  "doubleclick.net",
  "facebook.com/tr", // Caso tenha rastreamento do Facebook
];

chrome.webRequest.onCompleted.addListener(
  function (details) {
    // Se a URL contém alguma das palavras-chave da lista de ignoradas, sai da função
    if (urlsIgnoradas.some(dominio => details.url.includes(dominio))) {
      console.log("URL ignorada:", details.url);
      return;
    }

    let opcoes = urlsConfig.filter(config => details.url.includes(config.urlPattern));

    if (opcoes.length > 0) {
      chrome.storage.local.set({ caminhos: opcoes }, function () {
        console.log("Caminhos salvos:", opcoes);
      });
    }
  },
  { urls: ["<all_urls>"] }
);

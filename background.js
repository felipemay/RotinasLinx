importScripts("urls.js");
chrome.webRequest.onCompleted.addListener(
  function (details) {
    let opcoes = urlsConfig.filter(config => details.url.includes(config.urlPattern));

    if (opcoes.length > 0) {
      chrome.storage.local.set({ caminhos: opcoes }, function() {
        console.log("Caminhos salvos:", opcoes);
      });
    }
  },
  { urls: ["<all_urls>"] }
);

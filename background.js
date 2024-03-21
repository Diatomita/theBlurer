// Intercepta a request que busca o js com o blur
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      // Substitiui pelo nosso arquivo moidificado
      if (details.url.endsWith("material-viewer.umd.min.pd-material-viewer.js")) {
        return {redirectUrl: chrome.extension.getURL("arquivo.js")};
      }
    },
    {urls: ["<all_urls>"]},
    ["blocking"]
  );  
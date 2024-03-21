chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      if (details.url.endsWith("material-viewer.umd.min.pd-material-viewer.js")) {
        console.log("redirected");
        return {redirectUrl: chrome.extension.getURL("arquivo.js")};
      }
    },
    {urls: ["<all_urls>"]},
    ["blocking"]
  );  
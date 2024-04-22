// JavaScript
// File: background.js

browser.browserAction.onClicked.addListener(() => {
  browser.tabs.executeScript({
    file: "subwaySurf.js",
  });
});

chrome.tabs.query({}, function(tabs) {
  for(var i in tabs) {
    // filter by url if needed; that would require "tabs" permission
    chrome.tabs.executeScript(tabs[i].id, {file: "content.js"});
  }
});

var id = "your-extension-id"

function reloadExternal(id) {
  chrome.management.setEnabled(id, false)
  chrome.management.setEnabled(id, true)
}

function reloadExtension(id) {
  reloadExternal(id)
  chrome.runtime.reload()
  console.log("reloaded: ", id)
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  reloadExtension(id)
  sendResponse(id)
});

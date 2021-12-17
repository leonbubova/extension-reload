chrome.runtime.sendMessage({action: "reload"}, (res) => console.log("extension reloaded: ", res))

chrome.runtime.onMessage.addListener(
    function(payload, sender, sendResponse)
    {
	var downloadUrl = payload.message;
        chrome.downloads.download({"url" : downloadUrl});
    }
);

function sendResponse() { 
}

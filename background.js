chrome.runtime.onMessage.addListener(
  function(payload, sender, sendResponse) {
    var url = payload.message;
    download(url);
  }
);

function sendResponse() {};

function download(url) {
  if (file(url)) {
    chrome.downloads.download({
      "url": url
    });
  } else {
    links = fetchLinks(url);
    downloadRecursive(url);
  }
};

function file(url) {
  success = false;
  fetch(url)
    .then(function(response) {
      if (response.status == 200) {
        html = $.parseHTML(response.text());
        success = html != null;
      }
    })
    .catch(function(error) {
      console.log(error);
      success = false;
    })
  return success;
};

function fetchLinks(url) {
  var html = $.parseHTML(url);
};

function contents(url) {
  fetch(url)
    .then(function(response) {
      //return content body here;
    })
    .catch(function(error) {
      console.log(error);
    })
}

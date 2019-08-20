var btn = document.createElement("BUTTON");
btn.innerHTML = "Download Artifacts";                   
document.body.appendChild(btn); 
btn.addEventListener("click", function() {
    $('a').each(function(index) {
           process($(this));
    });
});

function process(link)
{
    chrome.runtime.sendMessage({ message : link[0].href});
};

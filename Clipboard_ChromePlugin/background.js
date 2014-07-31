
chrome.browserAction.onClicked.addListener(function(){

	chrome.tabs.executeScript(null,{file: "jquery.js"});
	chrome.tabs.executeScript(null,{file: "selection.js"});

});





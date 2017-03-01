chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
    console.log('auth token:', token);

  	chrome.identity.getProfileUserInfo(function(userInfo) {
  		var msg = {from: 'event-script', data: userInfo};
			console.log('should be sending', msg, 'to the tab:', tab);

			chrome.tabs.sendMessage(tab.id, msg, function(response) {
				console.log(response);
			});
  	});
	});
});

// chrome.runtime.onMessage.addListener(function (msg, sender, response) {
//   if ((msg.from === 'popup') && (msg.subject === 'identity')) {
//     chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
// 	    console.log('auth token:', token);
//     	chrome.identity.getProfileUserInfo(function(userInfo) {
//     		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     			console.log('should be sending', {from: 'event-script', data: userInfo}, 'to active tab:', tabs[0]);
//     			chrome.tabs.sendMessage(tabs[0].id, userInfo, function(response) {
//     				console.log(response);
//     			});
// 				});
//     	});
//   	});
// 		response({message_received: true});
//   }
// });

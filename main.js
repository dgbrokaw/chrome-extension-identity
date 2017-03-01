function setIdentityInfo(email) {
	console.log(email);
  // document.getElementById('user-email').innerHTML(email);
}

chrome.runtime.onMessage.addListener(function(msg, sender, response) {
  if (msg.from === 'event-script' && msg.data) {
    console.log('received message from event script', msg);
    setIdentityInfo(msg.data.email);
    response({message_received: true});
  } else {
    console.log('received unaccepable message', msg);
  }
});

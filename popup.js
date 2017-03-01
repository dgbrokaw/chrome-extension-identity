function setIdentityInfo(email) {
  document.getElementById('user-email').innerHTML(email);
}

// request to the event page for user account information
window.addEventListener('DOMContentLoaded', function () {
  chrome.runtime.sendMessage({from: 'popup', subject: 'identity'}, function(response) {
    console.log(response);
  });
});

chrome.runtime.onMessage.addListener(function(msg, sender, response) {
  if (msg.from === 'event-script' && msg.data) {
    console.log('received message from event script', msg);
    setIdentityInfo(msg.data.email);
    response({message_received: true});
  } else {
    console.log('received unaccepable message', msg);
  }
});

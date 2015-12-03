console.log('!ARE WE HERE!');
renderStatus('HELLO');
document.getElementById('status').textContent = 'hello';

function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

function cb(callback){
  renderStatus('HELLO');
  console.log(callback);
}

chrome.webRequest.onBeforeRequest.addListener(cb, {urls: ['*']});

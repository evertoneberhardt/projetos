/*
document.addEventListener("DOMContentLoaded", function(event) {
    document.removeAttribute("crossOrigin");
});

function httpRequestM3u(urlM3u) {
    fetch(urlM3u)
    .then(response => response.text())
    .then(text => {
        console.log(text);
    });
}
const URL = "https://lojavip.lrstore.workers.dev/4:/LOJA/LISTA_01/MENU_LISTAS.m3u";

// Proxy script
app.get('proxy.uefs.br', function(req, res) {
  request({url: req.query.url}).pipe(res);
});

// JavaScript
var xhr = new XMLHttpRequest();
xhr.open('GET', 'proxy.uefs.br?url=' + URL, true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send();



fetch(URL)
.then(response => response.text())
.then(m3uList => {
    const lines = m3uList.split('\n');
    const urls = [];
    for (const line in lines) {
        if (line.startsWith('m3u:')) {
            const url = line.substring(4);
            urls.push(url);
        }
    }
    console.log(urls);
});
*/
const URL = "https://lojavip.lrstore.workers.dev/4:/LOJA/LISTA_01/MENU_LISTAS.m3u";
fetch(URL, {
method: "GET",
mode: "no-cors",
crossDomain: true,
headers: {
    "Content-Type": "text/plain"
},
credentials: "include"
})
.then(response => response.text())
.then(text => {
    console.log(text);
});
/*
----------------------------
fetch(URL, {
  method: 'GET',
  mode: "no-cors",
  credentials: "include",
  headers: new Headers({
    'Authorization': 'Basic ' + 'LRSTORE:8956'
  })
})
  .then(response => response.text())
  .then(data => console.log(data));
 */ 
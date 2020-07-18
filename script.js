/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
//console.log("hi");

(function () {
    const old = console.log;
    const logger = document.getElementById('log');
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
        } else {
            logger.innerHTML += message + '<br />';
        }
    }
})();

const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://api.github.com/repos/borgified/free-programming-books/contents/'
const url = proxyUrl + targetUrl;

async function getData(url) {
    const response = await fetch(url);
    return response.json()
}

const regex = /free-programming-books/
async function main() {
    var data = await getData(url);
    //console.log(data[20].name)
    for(let dat of data){
      if(dat.name)
      console.log(dat)
    }
}
main()
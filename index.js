var requestURL = 'https://yuhengsu.github.io/My-Website/projects.json';

//Alternative way to fetch data
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = () => {
    initialize(request.response);
}

function initialize(data) {
    let grid = document.querySelector('#content');
    let len = data.length;

    for (let i = 0; i < len; i++) {
        let div = document.createElement('div');
        let h3 = document.createElement('h3');
        let a = document.createElement('a');
        let img = document.createElement('img');
        let p = document.createElement('p');

        if (i === len - 1 && len % 2 === 1) {
            div.className = "proj-span2-title";
            p.className = "proj-span2-info"
        } else {
            div.className = "proj-title"
            p.className = "proj-info";
        }

        h3.textContent = data[i]['name'];

        p.textContent = data[i]['desc'];

        a.setAttribute("href", data[i]['link']);

        img.setAttribute("src", data[i]['img']);
        img.setAttribute("alt", data[i]['alt']);
        img.className = "proj-image";

        a.appendChild(img);
        div.appendChild(h3);
        div.appendChild(a);
        div.appendChild(p);
        grid.appendChild(div);
    }

}
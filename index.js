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
        let h4 = document.createElement('h4');
        let a = document.createElement('a');
        let img = document.createElement('img');
        let para = document.createElement('p');

        if (i === len - 1 && len % 2 === 1) {
            div.className = "span2";
        } else if (i % 2 === 1) {
            div.className = "proj2";
        } else if (i % 2 === 0) {
            div.className = "proj1";
        } else {
            console.log("Error in setting class name of div");
        }

        h4.textContent = data[i]['name'];

        para.className = "sideproject";
        para.textContent = data[i]['desc'];

        a.setAttribute("href", data[i]['link']);
        a.setAttribute("target", "_blank");

        img.setAttribute("src", data[i]['img']);
        img.setAttribute("alt", data[i]['alt']);
        img.className = "image";

        a.appendChild(img);
        div.appendChild(h4);
        div.appendChild(a);
        div.appendChild(para);
        grid.appendChild(div);
    }

}
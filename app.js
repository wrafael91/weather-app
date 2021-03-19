(() => {
    const Http = new XMLHttpRequest();
    //const $bogotaData = document.getElementById('bogota-data');
    //const $fragment = document.createDocumentFragment();
    const url = "http://api.openweathermap.org/data/2.5/weather?q=Bogota&appid=5be15f27f180f07259d63b580db53929";
    Http.addEventListener('readystatechange', (event) => {
        if (Http.readyState !== 4) return;
        //console.log(Http)

        if (Http.status >=200 && Http.status <300) {
            //console.log(Http.responseText);
            let json = JSON.parse(Http.responseText);
            console.log(json);
            // json.forEach((element) =>{
            //     const $li = document.createElement('li');
            //     $li.innerHTML = `${element.name} -- ${element.email}`;
            //     $fragment.appendChild($li);
            // });
            //$bogotaData.appendChild($fragment);
        } else {
            console.log("error");
        }

    });
    Http.open("GET", url);
    Http.send();
})()
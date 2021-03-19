(() => {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=Bogota&appid=5be15f27f180f07259d63b580db53929";
    const bogotaHttps = new XMLHttpRequest();

    bogotaHttps.open("GET", url);

    bogotaHttps.addEventListener('load', (data) => {
        const dataJSON = JSON.parse(data.target.response);

        // const list = document.getElementById('bog-list');
        // const listItem = document.createElement('');
        // listItem.textContent = `${dataJSON.main.temp} -- ${dataJSON.weather[0].main} ${dataJSON.weather[0].icon}`
        // list.appendChild(listItem)
        const { main, icon } = dataJSON.weather[0];
        const { temp } = dataJSON.main;
        document.querySelector('.bog-temp').innerText = (temp-273.15) + '°C';
        document.querySelector('.icon').src = "https://api.openweathermap.org/img/wn/" + icon + "@2x.png";
        
    })
    
    bogotaHttps.send();
})()
(() => {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=Bogota&appid=5be15f27f180f07259d63b580db53929";
    const bogotaHttps = new XMLHttpRequest();

    bogotaHttps.open("GET", url);

    bogotaHttps.addEventListener('load', (data) => {
        const dataJSON = JSON.parse(data.target.response);

        const list = document.getElementById('bog-list');
        for (const weatherInfo of dataJSON) {
            const listItem = document.createElement('LI');
            listItem.textContent = `${weatherInfo.main} -- ${weatherInfo.weather[1]}`
            list.appendChild(listItem)
        }
    })

    bogotaHttps.send();
})()
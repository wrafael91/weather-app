//3 Days Forecast Section
//First Day Forecast
const bogotaFirstDay = "http://api.openweathermap.org/data/2.5/forecast?lat=4.60971&lon=-74.081749&appid=5be15f27f180f07259d63b580db53929";
const bogotaHttps1 = new XMLHttpRequest();

bogotaHttps1.open("GET", bogotaFirstDay);

bogotaHttps1.addEventListener('load', (data) => {
    const dataJSON2 = JSON.parse(data.target.response);
    console.log(dataJSON2);
    //Day 1
    //Get date/time format translated into days label.
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"];
    let getStringDaysInfo = new Date(dataJSON2.list[4].dt * 1000);
    let dayName = days[getStringDaysInfo.getDay()];
    console.log(dayName);  
    //Display information on client side.
    const { icon, description } = dataJSON2.list[4].weather[0];
    const { temp } = dataJSON2.list[4].main;
    document.querySelector('.icon-1').src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector('.status-1').innerText = description;
    document.querySelector('.temp-1').innerText = (Math.round(temp-273.15)) + '°C';
    document.querySelector('.day-1').innerText = dayName;
    
});
bogotaHttps1.send();

// {
//     "id": 3688689,
//     "name": "Bogotá",
//     "state": "",
//     "country": "CO",
//     "coord": {
//         "lon": -74.081749,
//         "lat": 4.60971
//     }
// },
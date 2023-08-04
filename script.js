// const API = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_KEY}`;
// const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={API_KEY}&units=metric`;
// const IMG_URL = `https:openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

const API_KEY = `99fafb167fecc9a97ae3716a74267483`;

const form = document.querySelector("form");
const weather = document.querySelector("#weather");
const search = document.querySelector("#search");

const getWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data); // You can see the fetched data in the browser console
    // Use the data here to display the weather information on the page
    return showWeather(data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert('city not found !')
  }
};

const showWeather = (data) => {

  weather.innerHTML = `
    <div class="weatherImg">
    <img src="https:openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
     </div>
          <div class="text">
           <h3> Temperature : ${data.main.temp} &#8451; </h3>
           <p>City : ${data.name}</p>
           <p>Sky : ${data.weather[0].main}</p>
           <p>Humadity : ${data.main.humidity}</p>

          </div>
    `;
};

form.addEventListener("submit", function (e) {
  getWeather(search.value);
  e.preventDefault();
});

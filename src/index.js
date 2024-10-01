const containerEl = document.querySelector(".container");
const searchIcon = document.querySelector(".search");

const searchField = document.getElementById("enter-city");
const dateEl = document.querySelector(".date");
const addressEl = document.querySelector(".address");
const imgEl = document.getElementById("image");
const tempEl = document.querySelector(".temp");
const descriptionEl = document.getElementById("description");
const humidityEl = document.querySelector(".humidity");
const windSpeedEl = document.querySelector(".wind-speed");

/* Icons */
const cloudy = document.createElement("span");
cloudy.classList.add("material-symbols-outlined");
cloudy.innerHTML = "cloud";

const sunny = document.createElement("span");
sunny.classList.add("material-symbols-outlined");
sunny.innerHTML = "sunny";

const rainy = document.createElement("span");
rainy.classList.add("material-symbols-outlined");
rainy.innerHTML = "rainy";

const thunderStorm = document.createElement("span");
thunderStorm.classList.add("material-symbols-outlined");
thunderStorm.innerHTML = "thunderstorm";

const partlyCloudyDay = document.createElement("span");
partlyCloudyDay.classList.add("material-symbols-outlined");
partlyCloudyDay.innerHTML = "partly_cloudy_day";

const clearDay = document.createElement("span");
clearDay.classList.add("material-symbols-outlined");
clearDay.innerHTML = "clear_day";

const cloudySnowing = document.createElement("span");
cloudySnowing.classList.add("material-symbols-outlined");
cloudySnowing.innerHTML = "cloudy_snowing";

const nightStay = document.createElement("span");
nightStay.classList.add("material-symbols-outlined");
nightStay.innerHTML = "nights_stay";

const sunnySnowing = document.createElement("span");
sunnySnowing.classList.add("material-symbols-outlined");
sunnySnowing.innerHTML = "sunny_snowing";

const partlyCloudyNight = document.createElement("span");
partlyCloudyNight.classList.add("material-symbols-outlined");
partlyCloudyDay.innerHTML = "partly_cloudy_night";

const severeCold = document.createElement("span");
severeCold.classList.add("material-symbols-outlined");
severeCold.innerHTML = "severe_cold";

const airwave = document.createElement("span");
airwave.classList.add("material-symbols-outlined");
airwave.innerHTML = "airwave";

const snowing = document.createElement("span");
snowing.classList.add("material-symbols-outlined");
snowing.innerHTML = "snowing";

const tornado = document.createElement("span");
tornado.classList.add("material-symbols-outlined");
tornado.innerHTML = "tornado";

const foggy = document.createElement("span");
foggy.classList.add("material-symbols-outlined");
foggy.innerHTML = "foggy";

const weatherSnowy = document.createElement("span");
weatherSnowy.classList.add("material-symbols-outlined");
weatherSnowy.innerHTML = "weather_snowy";

const storm = document.createElement("span");
storm.classList.add("material-symbols-outlined");
storm.innerHTML = "storm";

const rainySnowy = document.createElement("span");
rainySnowy.classList.add("material-symbols-outlined");
rainySnowy.innerHTML = "rainy_snow";

const tempCircle = document.createElement("span");
tempCircle.classList.add("material-symbols-outlined");
tempCircle.innerHTML = "circle";
tempCircle.style.cssText = "font-size: 5px; vertical-align: top;";

/* Make a request to use visualcroosing weather API and then fetch the data and save in an obj */
async function getData() {
  const request = new Request(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchField.value}?key=FF8G6AB7WE29JU48EC2WEV78Q`,
    {
      method: "GET",
      mode: "cors",
    }
  );

  try {
    const response = await fetch(request);
    const weatherData = await response.json();

    console.log(weatherData);

    const weatherDataObj = {
      date: `${weatherData.days[0].datetime}`,
      address: `${weatherData.address}`,
      weatherIcon: `${weatherData.currentConditions.icon}`,
      temp: `${weatherData.currentConditions.temp} `,
      description: `${weatherData.description}`,
      humidity: `${weatherData.currentConditions.humidity}%`,
      windSpeed: `${weatherData.currentConditions.windspeed}km/h`,
    };

    dateEl.textContent = weatherDataObj.date;
    addressEl.textContent = weatherDataObj.address;

    if (weatherDataObj.weatherIcon.includes("cloud")) {
      imgEl.innerHTML = "";
      imgEl.appendChild(cloudy);
      /////////////////////////////////////////////////////
    } else if (weatherDataObj.weatherIcon.includes("sunny")) {
      imgEl.innerHTML = "";
      imgEl.appendChild(sunny);
      /////////////////////////////////////////////////////
    } else if (weatherDataObj.weatherIcon.includes("rain")) {
      imgEl.innerHTML = "";
      imgEl.appendChild(rainy);
      /////////////////////////////////////////////////////
    } else if (weatherDataObj.weatherIcon.includes("thunderstorm")) {
      imgEl.innerHTML = "";
      imgEl.appendChild(thunderStorm);
      /////////////////////////////////////////////////////
    } else if (weatherDataObj.weatherIcon.includes("Partially cloudy")) {
      imgEl.innerHTML = "";
      imgEl.appendChild(partlyCloudyDay);
      /////////////////////////////////////////////////////
    } else if (weatherDataObj.weatherIcon.includes("clear")) {
      imgEl.innerHTML = "";
      imgEl.appendChild(clearDay);
      /////////////////////////////////////////////////////
    } else if (weatherDataObj.weatherIcon.includes("cloudy snowing")) {
      imgEl.innerHTML = "";
      imgEl.appendChild(cloudySnowing);
      /////////////////////////////////////////////////////
    } else if (weatherDataObj.weatherIcon.includes("nights stay")) {
      imgEl.innerHTML = "";
      imgEl.appendChild(nightStay);
      /////////////////////////////////////////////////////
    } else if (weatherDataObj.weatherIcon.includes("sunny snowing")) {
      imgEl.innerHTML = "";
      imgEl.appendChild(sunnySnowing);
      /////////////////////////////////////////////////////
    } else if (weatherDataObj.weatherIcon.includes("partially cloudy night")) {
      imgEl.innerHTML = "";
      imgEl.appendChild(partlyCloudyNight);
      /////////////////////////////////////////////////////
    } else if (weatherDataObj.weatherIcon.includes("severe cold")) {
      imgEl.innerHTML = "";
      imgEl.appendChild(severeCold);
      /////////////////////////////////////////////////////
    } else if (weatherDataObj.weatherIcon.includes("airwave")) {
      imgEl.innerHTML = "";
      imgEl.appendChild(airwave);
      /////////////////////////////////////////////////////
    } else if (weatherDataObj.weatherIcon.includes("snowing")) {
      imgEl.innerHTML = "";
      imgEl.appendChild(snowing);
      /////////////////////////////////////////////////////
    } else if (weatherDataObj.weatherIcon.includes("tornado")) {
      imgEl.innerHTML = "";
      imgEl.appendChild(tornado);
      /////////////////////////////////////////////////////
    } else if (weatherDataObj.weatherIcon.includes("foggy")) {
      imgEl.innerHTML = "";
      imgEl.appendChild(foggy);
      /////////////////////////////////////////////////////
    } else if (weatherDataObj.weatherIcon.includes("weather snowy")) {
      imgEl.innerHTML = "";
      imgEl.appendChild(weatherSnowy);
      /////////////////////////////////////////////////////
    } else if (weatherDataObj.weatherIcon.includes("storm")) {
      imgEl.innerHTML = "";
      imgEl.appendChild(storm);
      /////////////////////////////////////////////////////
    } else if (weatherDataObj.weatherIcon.includes("rainy snow")) {
      imgEl.innerHTML = "";
      imgEl.appendChild(rainySnowy);
    }

    tempEl.textContent = weatherDataObj.temp;
    tempEl.appendChild(tempCircle);
    tempEl.innerHTML += "F";

    descriptionEl.textContent = weatherDataObj.description;
    humidityEl.textContent = weatherDataObj.humidity;
    windSpeedEl.textContent = weatherDataObj.windSpeed;
    containerEl.style.cssText = "gap: 1.5rem;";

    ///////////////////////////////////////////////////////////////
  } catch (error) {
    console.log(error);
  }
}

export function appendData() {
  if (searchField.value === "") {
    alert("You didn't type a country!");
    searchIcon.ariaDisabled;
  } else if (searchField.value.length < 4) {
    alert("The shortest country name is 4 letters!");
    searchIcon.ariaDisabled;
  }

  getData();
  searchField.value = "";
}

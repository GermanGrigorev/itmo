export const weatherApi = {
  async getWeatherByName(name) {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=71d31aa0fa80b76923fd889e32f0d07f&units=metric&lang=ru`
    );
    const json = await data.json();
    return {
      temp: json.main.temp,
      name: json.name,
    };
  },
  async getWeatherByCoord(lat, lon) {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=71d31aa0fa80b76923fd889e32f0d07f&units=metric&lang=ru`
    );
    const json = await data.json();
    const obj = {
      temp: json.main.temp,
      name: json.name,
    };
    return obj;
  },
};

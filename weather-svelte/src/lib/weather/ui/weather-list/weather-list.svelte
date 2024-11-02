<script>
  import WeatherCard from "../weather-card/weather-card.svelte";
  import { weatherApi } from "../../api/weather.api";

  let inputValue = $state("");
  let isLoading = $state(false);
  let errorMsg = $state("");
  let cardsData = $state([]);

  const handleWeatherInCity = async () => {
    try {
      errorMsg = "";
      const hasCard = cardsData.some((card) => card.inputValue === inputValue);
      if (hasCard) {
        errorMsg = "You already have this city in list";
        return;
      }
      isLoading = true;
      const res = await weatherApi.getWeatherByName(inputValue);

      cardsData.forEach((card) => (card.name += 1));
      cardsData.push({ ...res, inputValue });
    } catch (e) {
      errorMsg = e.message;
    } finally {
      isLoading = false;
    }
  };

  async function getCurrentPositionAsync() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  const handleWeatherHere = async () => {
    try {
      errorMsg = "";
      isLoading = true;
      const currentPos = await getCurrentPositionAsync();

      const coords = currentPos.coords;
      const lat = coords.latitude;
      const lon = coords.longitude;
      const res = await weatherApi.getWeatherByCoord(lat, lon);
      cardsData.push(res);
    } catch (e) {
      errorMsg = e.message;
    } finally {
      isLoading = false;
    }
  };
</script>

<div>
  <form>
    <input bind:value={inputValue} placeholder="Введите город" />
    <button onclick={handleWeatherInCity} class="border p-1 bg-slate-100"
      >Погода в этом городе</button
    >
  </form>
  <button onclick={handleWeatherHere} class="border p-1 bg-slate-100"
    >Погода у нас</button
  >

  {#each cardsData as card}
    <WeatherCard name={card.name} temp={card.temp} />
  {/each}

  {#if isLoading}
    <div class=" animate-bounce text-red-600 text-3xl">Loading...</div>
  {/if}
  {#if errorMsg !== ""}
    <div class=" animate-bounce text-red-600 text-3xl">{errorMsg}</div>
  {/if}
</div>

<style>
  .weatherCard {
    border: 1px solid green;
    padding: 10px;
    margin: 10px;
  }
</style>

<template>
  <div class="content-wrapper">
    <div class="welcome">
      <h1>Welcome to MyCompany Inc</h1>
      <p class="sub">Your choice for IT consulting based in the heart of downtown Toronto</p>
    </div>

    <div class="info">
      <div class="date-time">
        <h2>Current Date and Time</h2>
        <p class="info value">{{ currentTime }}</p>
      </div>

      <div class="date-time">
        <h2>Current Temperature in Belleville</h2>
        <p class="info value">{{ temp }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { format } from 'date-fns'

const currentTime = ref(format(new Date(), 'yyyy-MM-dd HH:mm:ss'))
const temp = ref('Loading...')


//Make sure not to leave this exposed but for this small assignment its fine
const API_KEY = '5051b61960f9a107905e94d93a14746a'

// Function to fetch weather data
async function fetchTemperature() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Belleville,CA&units=metric&appid=${API_KEY}`
    )
    const data = await response.json()
    if (data && data.main && data.main.temp !== undefined) {
      temp.value = `${data.main.temp} °C`
    } else {
      temp.value = 'Temperature not available'
    }
  } catch (error) {
    console.error('Error fetching temperature:', error)
    temp.value = 'Error fetching temperature'
  }
}

// When the component is mounted, fetch the temperature
onMounted(() => {
  fetchTemperature()
})
</script>


<style scoped>
.welcome {
  text-align: center;
  margin-bottom: 3rem;
}

.welcome h1 {
  font-size: 2.5;
  color: var(--secondary-color);
  margin-botton: 1rem;
}

.welcome .sub { font-size: 1.2rem;
color: var(--text-color);
}

.info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.date-time {
  background-color: var(--card-bg);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px ;
  transition: transform 0.3s ease;
}

.date-time h2 {
  color: var(--light-text);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.info.value {
  font-size: 1.8rem;
  color: var(--secondary-color);
  font-weight: bold;
}

@media (max-width: 768px) {
  .welcome h1 {
    font-size: 2rem;
  }
}
</style>
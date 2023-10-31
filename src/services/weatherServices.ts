import axios from 'axios';

const apiKey = '2e7679bebee6e42a3d10832bbcf4f8e4'; 
const apiUrl = 'http://api.openweathermap.org/data/2.5/weather';

const getWeatherByCity = async (city: string) => {
  try {
    const response = await axios.get(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export { getWeatherByCity };

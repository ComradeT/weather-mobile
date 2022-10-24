import axios from 'axios';
import { useEffect, useState } from 'react';
import { WeatherDataType } from 'src/types';
const API_URl = 'https://api.weather.yandex.ru/v2/forecast?';

const useGetWeather = () => {
  const [data, setData] = useState<WeatherDataType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getWeather = async () => {
    setIsLoading(true);
    try {
      const { data: weather } = await axios({
        method: 'get',
        url: `${API_URl}lat=55.75396&lon=37.620393`,
        headers: {
          'X-Yandex-API-Key': '85610d6f-66b1-4730-907e-50f7bd6d5295',
        },
      });
      setIsLoading(false);
      setData(weather);
    } catch (error) {
      setIsLoading(false);
      console.log('error', error);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return {
    data,
    isLoading,
  };
};

export default useGetWeather;

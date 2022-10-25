import axios from 'axios';
import { useEffect, useState } from 'react';
import { WeatherDataType } from 'src/types';
import useLocation from '../hooks/useLocation';

const API_URl = 'https://api.weather.yandex.ru/v2/forecast?';

const useGetWeather = () => {
  const [data, setData] = useState<WeatherDataType | null>(null);

  const { getPermissions, getPosition, locationData } = useLocation();

  const getWeather = async () => {
    if (locationData) {
      try {
        const { data: weather } = await axios({
          method: 'get',
          url: `${API_URl}lat=${locationData.lat}&lon=${locationData.long}`,
          headers: {
            'X-Yandex-API-Key': '85610d6f-66b1-4730-907e-50f7bd6d5295',
          },
        });
        setData(weather);
      } catch (error) {
        console.log('error', error);
      }
    }
  };

  useEffect(() => {
    const initWeather = async () => {
      await getPermissions();
      getPosition();
    };
    initWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    locationData && getWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationData]);

  return {
    data,
  };
};

export default useGetWeather;

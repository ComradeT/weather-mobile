import axios from 'axios';
import { useEffect, useState } from 'react';
import { WeatherDataType } from 'types';

import useLocation from '../hooks/useLocation';

const API_KEY = '85610d6f-66b1-4730-907e-50f7bd6d5295';
const API_URl = 'https://api.weather.yandex.ru/v2/forecast?';
const GEOCOD_API_KEY = 'ab052112-5760-47fc-aca5-6ef0e9b075f2';
const GEOCOD_API_URl = 'https://geocode-maps.yandex.ru/1.x/?';

const useGetWeather = (cityName: string | null, isEndEdditing: boolean) => {
  const [data, setData] = useState<WeatherDataType | null>(null);

  const { getPermissions, getPosition, locationData } = useLocation();

  const getCoordByName = async (address: string | null) => {
    if (!address) return;
    try {
      const { data: coords } = await axios({
        method: 'get',
        url: `${GEOCOD_API_URl}apikey=${GEOCOD_API_KEY}&geocode=${address}&format=json`,
      });
      console.log(
        'coords getCoordByName',
        coords.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos,
      );
    } catch (error) {
      console.log('error coords', error);
    }
  };

  const getWeather = async () => {
    if (locationData) {
      try {
        const { data: weather } = await axios({
          method: 'get',
          url: `${API_URl}lat=${locationData.lat}&lon=${locationData.long}`,
          headers: {
            'X-Yandex-API-Key': API_KEY,
          },
        });
        setData(weather);
      } catch (error) {
        console.log('error', error);
      }
    }
  };

  useEffect(() => {
    isEndEdditing && getCoordByName(cityName);
  }, [isEndEdditing, cityName]);

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

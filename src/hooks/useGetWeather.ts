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
  const [cityLocation, setCityLocatin] = useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { getPermissions, getPosition, locationData } = useLocation();

  const getCoordByName = async (address: string | null) => {
    if (!address) return;
    try {
      const { data: coords } = await axios({
        method: 'get',
        url: `${GEOCOD_API_URl}apikey=${GEOCOD_API_KEY}&geocode=${address}&format=json`,
      });
      const position = coords.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos?.split(' ');
      setCityLocatin(position);
    } catch (error) {
      console.log('error coords', error);
    }
  };

  const getWeather = async (lat: number, long: number) => {
    setIsLoading(true);
    try {
      const { data: weather } = await axios({
        method: 'get',
        url: `${API_URl}lat=${lat}&lon=${long}`,
        headers: {
          'X-Yandex-API-Key': API_KEY,
        },
      });
      setData(weather);
    } catch (error) {
      console.log('error', error);
    } finally {
      setIsLoading(false);
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
    locationData && getWeather(locationData.lat, locationData.long);
  }, [locationData]);

  useEffect(() => {
    cityLocation && getWeather(+cityLocation[1], +cityLocation[0]);
  }, [cityLocation]);

  return {
    data,
    isLoading,
  };
};

export default useGetWeather;

import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { WeatherInfo } from './types';
import { LocationContext } from '@context/LocationContext';

export const useWeather = () => {
  const { location } = useContext(LocationContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo>();
  const [weatherApiError, setWeatherApiError] = useState<boolean>(false);

  useEffect(() => {
    const getDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://api.weatherstack.com/current?access_key=60774ad1b455f3cff7d3f8a273f488f5&query=${location}`
        );

        // const response = await fetch(
        //   `http://api.weatherstack.com/current?access_key=60774ad1b455f3cff7d3f8a273f488f5&query=${region}`
        // );
        // const data = await response.json();
        const data = response.data;
        console.log({ data });
        setWeatherInfo(data.current);
        setLoading(false);
      } catch (error) {
        setWeatherApiError(true);
      }
    };

    getDetails();
  }, [location]);

  return {
    loading: loading,
    error: {
      weatherApiError: weatherApiError,
    },
    data: weatherInfo,
  };
};

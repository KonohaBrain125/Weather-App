import { createContext, useState } from 'react';

type LocationContextProps = {
  location: string;
  setRegion: (region: string) => void;
};

type LocationProviderProps = {
  children: React.ReactNode;
};

export const LocationContext = createContext<LocationContextProps>({
  location: '',
  setRegion: () => {},
});

export const LocationProvider = ({ children }: LocationProviderProps) => {
  const [location, setLocation] = useState('');

  const setRegion = (region: string) => {
    setLocation(region);
  };

  return (
    <LocationContext.Provider value={{ location, setRegion }}>{children}</LocationContext.Provider>
  );
};

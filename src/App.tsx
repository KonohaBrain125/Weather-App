import { Text } from '@components/Text/Text';
import { Search } from '@components/Search/Search';
import { WeatherIcon } from '@icons/Weather';

export const App = () => {
  return (
    <div className="flex flex-col p-2 gap-3">
      <Text content="Weather App" icon={<WeatherIcon />} />
      <Search />
    </div>
  );
};

export default App;

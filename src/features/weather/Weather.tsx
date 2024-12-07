import { WeatherApiResponse } from "../../types";
import Error from "../../ui/Error";
import MiniSpinner from "../../ui/MiniSpinner";
import CurrentWeather from "./CurrentWeather";
import ForecastWeather from "./ForecastWeather";
import { useWeather } from "./hooks/useWeather";

const Weather = () => {
  const { data, isLoading, error } = useWeather();

  if (isLoading) return <MiniSpinner />;
  if (error) return <Error message="Došlo je do greške" />;

  const { current, forecast } = data as Omit<WeatherApiResponse, "location">;

  return (
    <div className="w-full h-auto absolute left-0 bottom-0 lg:bottom-[65px] py-2 px-4 z-[401] bg-primary-500 flex flex-wrap gap-x-3 gap-y-1 items-center">
      <CurrentWeather todayWeather={current} />
      <ForecastWeather forecastWeather={forecast} />
    </div>
  );
};

export default Weather;
import { ForecastDayType, WeatherForecast } from "../../types";
import WDay from "./WDay";

const ForecastWeather = ({
  forecastWeather,
}: {
  forecastWeather: WeatherForecast;
}) => {
  return (
    <div className="flex-1 ">
      <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-9 2xl:grid-cols-9 3xl:grid-cols-9 gap-1 opacity-70 h-[65px] overflow-y-auto overflow-x-hidden">
        {forecastWeather.forecast.forecastday.map(
          (
            singleDay: { date: string; day: ForecastDayType },
            index: number
          ) => (
            <li key={index} className="border-r-1 border-secondary-500/50 ">
              <>
                <WDay forecastFirst={singleDay.day} singleDay={singleDay} />
              </>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default ForecastWeather;

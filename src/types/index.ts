export enum TempEnum {
  CEL = 'CEL',
  FAHR = 'FAHR',
}

export type WeatherDataType = {
  now: string;
  now_dt: string;
  info: {
    lat: number;
    lon: number;
    tzinfo: {
      offset: number;
      name: string;
      abbr: string;
      dst: boolean;
    };
    def_pressure_mm: number;
    def_pressure_pa: number;
    url: string;
  };
  fact: {
    temp: number;
    feels_like: number;
    icon: string;
    condition: ConditionsEnum;
    wind_speed: number;
    wind_gust: number;
    wind_dir: WindDirEnum;
    pressure_mm: number;
    pressure_pa: number;
    humidity: number;
    daytime: string;
    polar: boolean;
    season: string;
    prec_type: number;
    prec_strength: number;
    is_thunder: boolean;
    cloudness: number;
    obs_time: number;
    phenom_icon: string;
    'phenom-condition': string;
  };
  forecasts: [
    {
      date: string;
      date_ts: number;
      week: number;
      sunrise: string;
      sunset: string;
      moon_code: number;
      moon_text: string;
      parts: {
        night: {
          temp_min: number;
          temp_max: number;
          temp_avg: number;
          feels_like: number;
          icon: string;
          condition: string;
          daytime: string;
          polar: boolean;
          wind_speed: number;
          wind_gust: number;
          wind_dir: string;
          pressure_mm: number;
          pressure_pa: number;
          humidity: number;
          prec_mm: number;
          prec_period: number;
          prec_type: number;
          prec_strength: number;
          cloudness: number;
        };
        evening: {
          temp_min: number;
          temp_max: number;
          temp_avg: number;
          feels_like: number;
          icon: string;
          condition: string;
          daytime: string;
          polar: boolean;
          wind_speed: number;
          wind_dir: string;
          pressure_mm: number;
          pressure_pa: number;
          humidity: number;
          prec_mm: number;
          prec_period: number;
          prec_type: number;
          prec_strength: number;
          cloudness: number;
        };
        day_short: {
          temp: number;
          temp_min: number;
          feels_like: number;
          icon: string;
          condition: string;
          wind_speed: number;
          wind_gust: number;
          wind_dir: string;
          pressure_mm: number;
          pressure_pa: number;
          humidity: number;
          prec_type: number;
          prec_strength: number;
          cloudness: number;
        };
        night_short: {
          temp: number;
          feels_like: number;
          icon: string;
          condition: string;
          wind_speed: number;
          wind_gust: number;
          wind_dir: string;
          pressure_mm: number;
          pressure_pa: number;
          humidity: number;
          prec_type: number;
          prec_strength: number;
          cloudness: number;
        };
      };
      hours: [
        {
          hour: number;
          hour_ts: number;
          temp: number;
          feels_like: number;
          icon: string;
          condition: string;
          wind_speed: number;
          wind_gust: number;
          wind_dir: string;
          pressure_mm: number;
          pressure_pa: number;
          humidity: number;
          prec_mm: number;
          prec_period: number;
          prec_type: number;
          prec_strength: number;
          is_thunder: boolean;
          cloudness: number;
        },
        {
          hour: number;
          hour_ts: number;
          temp: number;
          feels_like: number;
          icon: string;
          condition: string;
          wind_speed: number;
          wind_gust: number;
          wind_dir: string;
          pressure_mm: number;
          pressure_pa: number;
          humidity: number;
          prec_mm: number;
          prec_period: number;
          prec_type: number;
          prec_strength: number;
          is_thunder: boolean;
          cloudness: number;
        },
      ];
    },
    {
      date: string;
      date_ts: number;
      week: number;
      sunrise: string;
      sunset: string;
      moon_code: number;
      moon_text: string;
      parts: {
        night: any;
        morning: any;
        day: any;
        evening: any;
        day_short: any;
        night_short: any;
      };
      hours: [];
    },
  ];
  geo_object: {
    country: { id: number; name: string };
    district: { id: number; name: string };
    locality: { id: number; name: string };
    province: { id: number; name: string };
  };
};

export enum ConditionsEnum {
  'clear' = 'Ясно',
  'partly-cloudy' = 'Малооблачно',
  'cloudy' = 'Облачно с прояснениями',
  'overcast' = 'Пасмурно',
  'drizzle' = 'Морось',
  'light-rain' = 'Небольшой дождь',
  'rain' = 'Дождь',
  'moderate-rain' = 'Умеренно сильный дождь',
  'heavy-rain' = 'Сильный дождь',
  'continuous-heavy-rain' = 'Длительный сильный дождь',
  'showers' = 'Ливень',
  'wet-snow' = 'Дождь со снегом',
  'light-snow' = 'Небольшой снег',
  'snow' = 'Снег',
  'snow-showers' = 'Снегопад',
  'hail' = 'Град',
  'thunderstorm' = 'Гроза',
  'thunderstorm-with-rain' = 'Дождь с грозой',
  'thunderstorm-with-hail' = 'Гроза с градом',
}

export enum WindDirEnum {
  'nw' = 'северо-западный',
  'n' = 'северный',
  'ne' = 'северо-восточный',
  'e' = 'восточный',
  'se' = 'юго-восточный',
  's' = 'южный',
  'sw' = 'юго-западный',
  'w' = 'западный',
  'c' = 'штиль',
}

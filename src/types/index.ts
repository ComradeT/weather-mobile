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
  'clear' = '????????',
  'partly-cloudy' = '??????????????????????',
  'cloudy' = '?????????????? ?? ????????????????????????',
  'overcast' = '????????????????',
  'drizzle' = '????????????',
  'light-rain' = '?????????????????? ??????????',
  'rain' = '??????????',
  'moderate-rain' = '???????????????? ?????????????? ??????????',
  'heavy-rain' = '?????????????? ??????????',
  'continuous-heavy-rain' = '???????????????????? ?????????????? ??????????',
  'showers' = '????????????',
  'wet-snow' = '?????????? ???? ????????????',
  'light-snow' = '?????????????????? ????????',
  'snow' = '????????',
  'snow-showers' = '????????????????',
  'hail' = '????????',
  'thunderstorm' = '??????????',
  'thunderstorm-with-rain' = '?????????? ?? ????????????',
  'thunderstorm-with-hail' = '?????????? ?? ????????????',
}

export enum WindDirEnum {
  'nw' = '????????????-????????????????',
  'n' = '????????????????',
  'ne' = '????????????-??????????????????',
  'e' = '??????????????????',
  'se' = '??????-??????????????????',
  's' = '??????????',
  'sw' = '??????-????????????????',
  'w' = '????????????????',
  'c' = '??????????',
}

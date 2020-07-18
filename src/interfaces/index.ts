export interface IMain {
  temp: number;
}

export interface ISys {
  country: string;
}

export interface IWeather {
  description: string;
  icon: string;
}

export interface IData {
  main: IMain;
  name: string;
  sys: ISys;
  weather: IWeather[];
}

export interface IWeatherComponent {
  name: string;
  country: string;
  description: string;
  icon: string;
  temp: number;
}

export interface ISearch {
  query: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (event: React.KeyboardEvent) => void;
}

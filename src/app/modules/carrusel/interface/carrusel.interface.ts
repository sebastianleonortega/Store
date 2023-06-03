export interface ICarrusel {
  id: number;
  title?: {
    first: string;
    second: string;
  };
  subtitle?: string;
  link?: string;
  img: string;
  order?: string;
  marginLeft?: number;
}

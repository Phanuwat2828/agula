// src/app/interfaces/movie-type.ts

export interface Creator {
  name: string;
  image: string;
  role: string;
  title: string;
  age: number | string;
}

export interface Movie_type {
  name: string;
  midb: number;
  image: string;
  image_bg: string;
  detail: string;
  vidoe: string;
  type: string;
  creator: Creator[];
}

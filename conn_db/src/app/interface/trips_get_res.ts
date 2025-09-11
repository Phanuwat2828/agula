export interface TripGetResponse {
  idx: number;
  name: string;
  country: string;
  destinationid: number;
  coverimage: string;
  detail: string;
  price: number;
  duration: number;
}

export interface TripPage {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  data: TripGetResponse[];
}

export interface place{
  country:string
}
export interface Des{
  idx:number;
  zone:string
}

export interface TripReq{
  name: string;
  country: string;
  destinationid: number;
  coverimage: string;
  detail: string;
  price: number;
  duration: number;
}
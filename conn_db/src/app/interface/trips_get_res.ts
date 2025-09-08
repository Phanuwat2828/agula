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
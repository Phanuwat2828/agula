import { Injectable } from '@angular/core';
import { environment } from '../env/env';
import { HttpClient } from '@angular/common/http';
import { TripGetResponse, TripPage } from '../interface/trips_get_res';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiCall {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}
  getTrip(page:number): Observable<TripPage> {
    return this.http.get<TripPage>(`${this.apiUrl}/trip?page=${page}`);
  }

  getSearch(q:string, page:number): Observable<TripPage> {
    return this.http.get<TripPage>(`${this.apiUrl}/trip/search?search=${q}&page=${page}`);
  }

  getId(id:string): Observable<TripGetResponse> {
    return this.http.get<TripGetResponse>(`${this.apiUrl}/trip/${id}`);
  }

}

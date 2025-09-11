import { Injectable } from '@angular/core';
import { environment } from '../env/env';
import { HttpClient } from '@angular/common/http';
import { Des, place, TripGetResponse, TripPage, TripReq } from '../interface/trips_get_res';
import { firstValueFrom, Observable } from 'rxjs';
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

  getId(id:string): Observable<TripPage> {
    return this.http.get<TripPage>(`${this.apiUrl}/trip/${id}`);
  }

  getplace(): Observable<place[]>{
    return this.http.get<place[]>(`${this.apiUrl}/trip/zone`);
  }

  getplace_(): Observable<Des[]>{
    return this.http.get<Des[]>(`${this.apiUrl}/trip/destinations`);
  }

  postplace(place: string): Observable<TripPage> {
    return this.http.get<TripPage>(`${this.apiUrl}/trip/place?place=${place}`);
  }

  deleteplace(id: string){
    return firstValueFrom(this.http.delete(`${this.apiUrl}/trip/${id}`));
  }

  posttrips(req:TripReq){
    return firstValueFrom(this.http.post(`${this.apiUrl}/trip`,req))
  }

  puttrips(req:TripReq,id:string){
    return firstValueFrom(this.http.put(`${this.apiUrl}/trip/${id}`,req))
  }

}

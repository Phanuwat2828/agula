import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../env';
import { lastValueFrom } from 'rxjs';
import { TripGetResponse } from '../../../interface/trips_get_res';
@Component({
  selector: 'app-call-api',
  imports: [CommonModule, MatButtonModule, HttpClientModule],
  templateUrl: './call-api.html',
  styleUrl: './call-api.css'
})

export class CallApi {
  tripData: TripGetResponse[] | undefined;
  constructor(private http: HttpClient) {}
  async callApi() {
    const url = environment.apiUrl + '/trip';
    let data = await lastValueFrom(this.http.get(url));

    this.tripData = data as TripGetResponse[];
    console.log(data);
    console.log('Call Completed');


  }
}


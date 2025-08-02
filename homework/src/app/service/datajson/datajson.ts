import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import myData from '../../../assets/data/data.json';
import { Movie_type } from '../../interface/movie-interface';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(): { [key: string]: Movie_type } {
    return myData;
  }


}
